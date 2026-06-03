import { useState, useEffect } from "react";
import { getBranchItems } from "./data/merge";
import { BRANCHES } from "./data/branches";
import BranchSelector from "./Component/BranchSelector/BranchSelector";
import SearchBox from "./Component/SearchBox/SearchBox";
import ModalCard from "./Component/ModalCard/ModalCard";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";

import AnimatedNotesCard from "./Component/Card/AnimatedNotesCard";
import SimpleFragranceCard from "./Component/Card/SimpleFragranceCard";

import "./App.css";

export default function App() {
  const branchNames = Object.keys(BRANCHES);
  const savedBranch = localStorage.getItem("selectedBranch") || branchNames[0];

  const [branch, setBranch] = useState(savedBranch);
  const [nameQuery, setNameQuery] = useState("");
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("selectedBranch", branch);
  }, [branch]);

  const items = getBranchItems(branch);

  const ALL_NOTES = new Set();
  items.forEach((item) => {
    item.notes.top.forEach((n) => ALL_NOTES.add(n.note.toLowerCase()));
    item.notes.middle.forEach((n) => ALL_NOTES.add(n.note.toLowerCase()));
    item.notes.base.forEach((n) => ALL_NOTES.add(n.note.toLowerCase()));
  });

  const notesList = Array.from(ALL_NOTES);

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

      // ⭐ البحث بالـ NOTES
      if (selectedNotes.length > 0 && item.matchCount === 0) return false;

      // ⭐ البحث بالاسم / البراند / ID
      const matchName =
        item.fragrance.toLowerCase().includes(nameQ) ||
        item.brand.toLowerCase().includes(nameQ) ||
        item.id.toString().includes(nameQ); // ⭐ البحث بالـ ID

      if (nameQ && selectedNotes.length > 0) return matchName;
      if (nameQ) return matchName;

      return true;
    })
    .sort((a, b) => b.matchCount - a.matchCount);

  return (
    <>
      <div className="bg-fixed"></div>

      <div className="app-bg">
        <div className="app-container">

          <h1 className="title">Inventory</h1>

          <BranchSelector branch={branch} setBranch={setBranch} />

          <SearchBox
            nameQuery={nameQuery}
            setNameQuery={setNameQuery}
            notesList={notesList}
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
          />

          <div className={`grid ${selectedNotes.length > 0 ? "notes-grid" : ""}`}>
            {filtered.map((item) =>
              selectedNotes.length > 0 ? (
                <AnimatedNotesCard
                  key={item.id}
                  item={item}
                  selectedNotes={selectedNotes}
                  notesMode={true}
                  onClick={() => setSelectedItem(item)}
                />
              ) : (
                <SimpleFragranceCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              )
            )}
          </div>

          <ScrollToTopButton />
        </div>

        <footer className="footer">
          Created by <strong>Hamza Zahir</strong>
        </footer>

        <ModalCard item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </>
  );
}
