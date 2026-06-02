import { useState, useEffect } from "react";
import { getBranchItems } from "./data/merge";
import { BRANCHES } from "./data/branches";
import BranchSelector from "./Component/BranchSelector/BranchSelector";
import SearchBox from "./Component/SearchBox/SearchBox";
import ModalCard from "./Component/ModalCard/ModalCard";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";
import Card from "./Component/Card/Card";
import "./App.css";

export default function App() {
  const branchNames = Object.keys(BRANCHES);

  // Load saved branch OR default to first branch
  const savedBranch = localStorage.getItem("selectedBranch") || branchNames[0];

  const [branch, setBranch] = useState(savedBranch);

  // Search states
  const [nameQuery, setNameQuery] = useState("");

  // Selected notes (chips)
  const [selectedNotes, setSelectedNotes] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  // Save branch to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedBranch", branch);
  }, [branch]);

  const items = getBranchItems(branch);

  // Extract ALL notes from branch
  const ALL_NOTES = new Set();

  items.forEach((item) => {
    item.notes.top.forEach((n) => ALL_NOTES.add(n.note.toLowerCase()));
    item.notes.middle.forEach((n) => ALL_NOTES.add(n.note.toLowerCase()));
    item.notes.base.forEach((n) => ALL_NOTES.add(n.note.toLowerCase()));
  });

  const notesList = Array.from(ALL_NOTES);

  // ⭐ FILTER + STRICT RANKING + HIDE ZERO MATCHES
  const filtered = items
    .map((item) => {
      const perfumeNotes = [
        ...item.notes.top,
        ...item.notes.middle,
        ...item.notes.base,
      ].map((n) => n.note.toLowerCase());

      const matchCount = selectedNotes.filter((n) =>
        perfumeNotes.includes(n)
      ).length;

      return { ...item, matchCount };
    })
    .filter((item) => {
      const nameQ = nameQuery.toLowerCase().trim();

      // ❗ hide perfumes with 0 matches when searching by notes
      if (selectedNotes.length > 0 && item.matchCount === 0) return false;

      const matchName =
        item.fragrance.toLowerCase().includes(nameQ) ||
        item.brand.toLowerCase().includes(nameQ);

      if (nameQ && selectedNotes.length > 0) return matchName;
      if (nameQ) return matchName;

      return true;
    })
    .sort((a, b) => b.matchCount - a.matchCount);

  return (
    <div
      className="app-bg"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("woodbg.png")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="app-container">

        <h1 className="title">Inventory</h1>

        <BranchSelector branch={branch} setBranch={setBranch} />

        {/* SEARCH SYSTEM */}
        <SearchBox
          nameQuery={nameQuery}
          setNameQuery={setNameQuery}
          notesList={notesList}
          selectedNotes={selectedNotes}
          setSelectedNotes={setSelectedNotes}
        />

        {/* ⭐ GRID CHANGES BASED ON NOTES MODE */}
        <div className={`grid ${selectedNotes.length > 0 ? "notes-grid" : ""}`}>
          {filtered.map((item) => (
            <Card
              key={item.id}
              item={item}
              selectedNotes={selectedNotes}
              notesMode={selectedNotes.length > 0}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <ScrollToTopButton />
      </div>

      <footer className="footer">
        Created by <strong>Hamza Zahir</strong>
      </footer>

      <ModalCard item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
