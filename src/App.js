import { useState, useEffect } from "react";
import { getBranchItems } from "./data/merge";
import { BRANCHES } from "./data/branches";

import Header from "./Component/Header/Header";
import SearchBox from "./Component/SearchBox/SearchBox";
import ModalCard from "./Component/ModalCard/ModalCard";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";

import AnimatedNotesCard from "./Component/Card/AnimatedNotesCard";
import SimpleFragranceCard from "./Component/Card/SimpleFragranceCard";

import FragranceTable from "./Component/FragranceTable/FragranceTable";
import MixingTable from "./Component/MixingTable/MixingTable";

import LuxuryBackground from "./Component/LuxuryBackground/LuxuryBackground";
import Footer from "./Component/Footer/Footer";

import "./Component/LuxuryBackground/LuxuryBackground.css";
import "./App.css";

export default function App() {
  const branchNames = Object.keys(BRANCHES);

  const [branch, setBranch] = useState(() => {
    const urlBranch = new URLSearchParams(window.location.search).get("branch");
    const savedBranch = localStorage.getItem("selectedBranch");

    if (urlBranch && branchNames.includes(urlBranch)) return urlBranch;
    if (savedBranch && branchNames.includes(savedBranch)) return savedBranch;
    return branchNames[0];
  });

  useEffect(() => {
    localStorage.setItem("selectedBranch", branch);
    setSelectedBrand("all");

    const url = new URL(window.location.href);
    if (url.searchParams.get("branch") !== branch) {
      url.searchParams.set("branch", branch);
      window.history.replaceState(window.history.state, "", url);
    }
  }, [branch]);

  const [nameQuery, setNameQuery] = useState("");
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState(["all"]);
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchMode, setSearchMode] = useState("name");
  const [selectedItem, setSelectedItem] = useState(null);

  const savedView = localStorage.getItem("selectedView") || "cards";
  const [view, setView] = useState(savedView);

  const [forcedNotesMode, setForcedNotesMode] = useState(false);
  const [showMixTable, setShowMixTable] = useState(false);

  function clearFragranceFilters() {
    setSelectedGenders(["all"]);
    setSelectedFamily("all");
    setSelectedBrand("all");
  }

  function toggleGender(gender) {
    if (gender === "all") {
      setSelectedGenders(["all"]);
      return;
    }

    setSelectedGenders((current) => {
      const selected = current.filter((value) => value !== "all");
      const next = selected.includes(gender)
        ? selected.filter((value) => value !== gender)
        : [...selected, gender];
      if (next.length === 3) return ["all"];
      return next.length > 0 ? next : ["all"];
    });
  }

  useEffect(() => {
    if (!forcedNotesMode) {
      localStorage.setItem("selectedView", view);
    }
  }, [view, forcedNotesMode]);

  useEffect(() => {
    if (selectedNotes.length > 0) {
      setForcedNotesMode(true);
      setView("notes");
    }
  }, [selectedNotes]);

  useEffect(() => {
    if (selectedNotes.length === 0 && forcedNotesMode) {
      setForcedNotesMode(false);
      const saved = localStorage.getItem("selectedView") || "cards";
      setView(saved);
      setShowMixTable(false);
    }
  }, [selectedNotes, forcedNotesMode]);

  // ⭐ Matching logic
  function isNoteMatch(note, selected) {
    const n = note.toLowerCase();
    const s = selected.toLowerCase();

    if (n === s) return true;
    if (n.startsWith(s + " ")) return true;
    if (n.endsWith(" " + s)) return true;
    if (n.includes(" " + s + " ")) return true;

    return false;
  }

  const items = getBranchItems(branch);
  const fragranceFamilies = Array.from(
    new Set(items.map((item) => item.family).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));
  const fragranceBrands = Array.from(
    new Set(items.map((item) => item.brand).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const ALL_NOTES = new Set();
  items.forEach((item) => {
    const notes = item.notes.all || [
      ...item.notes.top,
      ...item.notes.middle,
      ...item.notes.base,
    ];
    notes.forEach((n) => ALL_NOTES.add(n.toLowerCase()));
  });

  const notesList = Array.from(ALL_NOTES);

  // ⭐ FILTERING
  const filtered = items
    .map((item) => {
      const perfumeNotes = (item.notes.all || [
        ...item.notes.top,
        ...item.notes.middle,
        ...item.notes.base,
      ]).map((n) => n.toLowerCase());

      const matchCount = selectedNotes.filter((selected) =>
        perfumeNotes.some((note) => isNoteMatch(note, selected))
      ).length;

      return { ...item, matchCount };
    })
    .filter((item) => {
      const nameQ = nameQuery.toLowerCase().trim();

      if (selectedNotes.length > 0 && item.matchCount === 0) return false;
      if (!selectedGenders.includes("all") && !selectedGenders.includes(item.gender)) return false;
      if (selectedFamily !== "all" && item.family !== selectedFamily) return false;
      if (selectedBrand !== "all" && item.brand !== selectedBrand) return false;

      const matchName =
        item.fragrance.toLowerCase().includes(nameQ) ||
        item.brand.toLowerCase().includes(nameQ) ||
        item.Our_Name?.toLowerCase().includes(nameQ) ||
        item.id.toString().includes(nameQ) ||
        item.brand_short?.toLowerCase().includes(nameQ);

      if (nameQ && selectedNotes.length > 0) return matchName;
      if (nameQ) return matchName;

      return true;
    })
    .sort((a, b) => b.matchCount - a.matchCount);

  return (
    <>
      <LuxuryBackground key="lux-bg" />
      <div className="luxury-overlay"></div>

      <div className="app-wrapper">
        <Header
          branch={branch}
          setBranch={setBranch}
          view={view}
          setView={setView}
          selectedNotes={selectedNotes}
        />

        <div className="app-content">
          <div className="app-container">
            <SearchBox
              nameQuery={nameQuery}
              setNameQuery={setNameQuery}
              notesList={notesList}
              selectedNotes={selectedNotes}
              setSelectedNotes={setSelectedNotes}
              onModeChange={(mode) => {
                setSearchMode(mode);
                clearFragranceFilters();
                if (mode === "name") setSelectedNotes([]);
              }}
            />

            {searchMode === "name" && (
              <div className="fragrance-filters">
                <div className="gender-filters" role="group" aria-label="Filter by gender">
                  <span className="filter-label">Gender</span>
                  {["all", "men", "women", "unisex"].map((gender) => (
                    <button
                      key={gender}
                      type="button"
                      className={`gender-filter ${selectedGenders.includes(gender) ? "active" : ""}`}
                      aria-pressed={selectedGenders.includes(gender)}
                      onClick={() => toggleGender(gender)}
                    >
                      {gender === "all" ? "All" : gender[0].toUpperCase() + gender.slice(1)}
                    </button>
                  ))}
                </div>

                <label className="family-filter">
                  <span className="filter-label">Fragrance type</span>
                  <select
                    className={selectedFamily !== "all" ? "active" : ""}
                    value={selectedFamily}
                    onChange={(event) => setSelectedFamily(event.target.value)}
                  >
                    <option value="all">All types</option>
                    {fragranceFamilies.map((family) => (
                      <option key={family} value={family}>{family}</option>
                    ))}
                  </select>
                </label>

                <label className="brand-filter">
                  <span className="filter-label">Brand</span>
                  <select
                    className={selectedBrand !== "all" ? "active" : ""}
                    value={selectedBrand}
                    onChange={(event) => setSelectedBrand(event.target.value)}
                  >
                    <option value="all">All brands</option>
                    {fragranceBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </label>

                <button
                  type="button"
                  className="clear-filters-button"
                  onClick={clearFragranceFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* ⭐ MIX BUTTONS */}
            {selectedNotes.length > 2 && !showMixTable && (
              <button className="mix-button" onClick={() => setShowMixTable(true)}>
                What if you mix?
              </button>
            )}

            {showMixTable && (
              <button className="back-button" onClick={() => setShowMixTable(false)}>
                back
              </button>
            )}

            {/* ⭐ VIEW SWITCHING */}
            {showMixTable ? (
              <div className="table-view">
                <MixingTable selectedNotes={selectedNotes} />
              </div>
            ) : selectedNotes.length > 0 ? (
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
        </div>

        <Footer />

        <ModalCard item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </>
  );
}
