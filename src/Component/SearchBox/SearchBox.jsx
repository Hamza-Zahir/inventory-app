import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({
  nameQuery,
  setNameQuery,
  notesList,
  selectedNotes,
  setSelectedNotes,
}) {
  const [active, setActive] = useState("name"); // name | notes
  const [noteInput, setNoteInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter suggestions
  const suggestions =
    noteInput.trim().length === 0
      ? []
      : notesList.filter((n) => n.startsWith(noteInput.toLowerCase()));

  // Add note chip
  const addNote = (note) => {
    if (!selectedNotes.includes(note)) {
      setSelectedNotes([...selectedNotes, note]);
    }
    setNoteInput("");
    setShowSuggestions(false);
  };

  // Remove note chip
  const removeNote = (note) => {
    setSelectedNotes(selectedNotes.filter((n) => n !== note));
  };

  return (
    <div className="search-wrapper">

      {/* TABS */}
      <div className="search-tabs">

        {/* BRAND / FRAGRANCE TAB */}
        <div
          className={`search-tab ${active === "name" ? "active" : ""}`}
          onClick={() => {
            setActive("name");

            // RESET NOTES SEARCH
            setSelectedNotes([]);   // remove all chips
            setNoteInput("");       // clear input
            setShowSuggestions(false);

            // RESET NAME SEARCH
            setNameQuery("");       // start fresh
          }}
        >
          Search by Brand / Fragrance
        </div>

        {/* NOTES TAB */}
        <div
          className={`search-tab ${active === "notes" ? "active" : ""}`}
          onClick={() => {
            setActive("notes");

            // RESET NAME SEARCH
            setNameQuery("");

            // RESET NOTES INPUT ONLY (chips stay until user removes them)
            setNoteInput("");
            setShowSuggestions(false);
          }}
        >
          Search by Notes
        </div>
      </div>

      {/* NAME SEARCH */}
      {active === "name" && (
        <input
          className="search-input fade-in"
          placeholder="Type brand or fragrance..."
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
        />
      )}

      {/* NOTES SEARCH */}
      {active === "notes" && (
        <div className="notes-container fade-in">

          {/* SELECTED NOTES (CHIPS) */}
          <div className="chips-row">
            {selectedNotes.map((note) => (
              <div key={note} className="chip">
                {note}
                <span className="chip-x" onClick={() => removeNote(note)}>
                  ×
                </span>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <input
            className="search-input"
            placeholder="Type notes (vanilla, musk...)"
            value={noteInput}
            onChange={(e) => {
              setNoteInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
          />

          {/* SUGGESTIONS */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions-box">
              {suggestions.map((note) => (
                <div
                  key={note}
                  className="suggestion-item"
                  onClick={() => addNote(note)}
                >
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
