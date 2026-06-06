import { useState, useEffect } from "react";
import { getBranchItems } from "./data/merge";
import { BRANCHES } from "./data/branches";

import BranchSelector from "./Component/BranchSelector/BranchSelector";
import SearchBox from "./Component/SearchBox/SearchBox";
import ModalCard from "./Component/ModalCard/ModalCard";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";

import AnimatedNotesCard from "./Component/Card/AnimatedNotesCard";
import SimpleFragranceCard from "./Component/Card/SimpleFragranceCard";

import ViewSwitcher from "./Component/ViewSwitcher/ViewSwitcher";
import FragranceTable from "./Component/FragranceTable/FragranceTable";

import LuxuryBackground from "./Component/LuxuryBackground/LuxuryBackground";
import "./Component/LuxuryBackground/LuxuryBackground.css";

import "./App.css";

export default function App() {
  const branchNames = Object.keys(BRANCHES);
  const savedBranch = localStorage.getItem("selectedBranch") || branchNames[0];

  const [branch, setBranch] = useState(savedBranch);
  const [nameQuery, setNameQuery] = useState("");
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [view, setView] = useState("cards");

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

      if (selectedNotes.length > 0 && item.matchCount === 0) return false;

      const matchName =
        item.fragrance.toLowerCase().includes(nameQ) ||
        item.brand.toLowerCase().includes(nameQ) ||
        item.id.toString().includes(nameQ);

      if (nameQ && selectedNotes.length > 0) return matchName;
      if (nameQ) return matchName;

      return true;
    })
    .sort((a, b) => b.matchCount - a.matchCount);

  return (
    <>
      {/* ⭐ الخلفية */}
      <LuxuryBackground nameQuery={nameQuery} selectedNotes={selectedNotes} />

      {/* ⭐ overlay الجديد */}
      <div className="luxury-overlay"></div>

      {/* ⭐ المحتوى */}
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

          {selectedNotes.length === 0 && (
            <ViewSwitcher view={view} setView={setView} />
          )}

          {selectedNotes.length > 0 ? (
            <div className="grid notes-grid">
              {filtered.map((item) => (
                <AnimatedNotesCard
                  key={item.id}
                  item={item}
                  selectedNotes={selectedNotes}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          ) : view === "cards" ? (
            <div className="grid">
              {filtered.map((item) => (
                <SimpleFragranceCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          ) : view === "table" ? (
            <div className="table-view">
              <FragranceTable data={filtered} />
            </div>
          ) : view === "notes" ? (
            <div className="grid notes-grid">
              {filtered.map((item) => (
                <AnimatedNotesCard
                  key={item.id}
                  item={item}
                  selectedNotes={[]}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          ) : null}

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
