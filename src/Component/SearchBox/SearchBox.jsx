import { useState, useRef } from "react";
import "./SearchBox.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";
// list
export default function SearchBox({
  nameQuery,
  setNameQuery,
  notesList,
  selectedNotes,
  setSelectedNotes,
  onModeChange,
}) {
  const [active, setActive] = useState("name");
  const [noteInput, setNoteInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionsRef = useRef(null);

  // ⭐ FIXED — lowercase mapping for images
  const notesWithImages = notesList.map((note) => ({
    name: note,
    img: NOTES_IMAGES[note.toLowerCase()] || "/images/notes/default.png",
  }));

  // ⭐ alphabetical sorting
  const sortedNotes = [...notesWithImages].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // ⭐ smart suggestions
  const suggestions = [...sortedNotes].sort((a, b) => {
    const input = noteInput.toLowerCase();
    if (!input) return a.name.localeCompare(b.name);

    const aStarts = a.name.toLowerCase().startsWith(input);
    const bStarts = b.name.toLowerCase().startsWith(input);

    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;

    return a.name.localeCompare(b.name);
  });

  // ⭐ add note
  const addNote = (note) => {
    if (!selectedNotes.includes(note.name)) {
      setSelectedNotes([...selectedNotes, note.name]);
    }
    setNoteInput("");
    setShowSuggestions(false);
  };

  const changeMode = (mode) => {
    setActive(mode);
    onModeChange(mode);
    setNameQuery("");
    setNoteInput("");
    setShowSuggestions(false);
  };

  // ⭐ remove note
  const removeNote = (note) => {
    setSelectedNotes(selectedNotes.filter((n) => n !== note));
  };

  return (
    <div className="search-wrapper">
      <div className="search-row">
        <label className="search-mode">
          <span className="search-mode-label">Search by</span>
          <select
            className="search-mode-select"
            aria-label="Search by"
            value={active}
            onChange={(event) => changeMode(event.target.value)}
          >
            <option value="name">Brand / Fragrance / Our Name / ID</option>
            <option value="notes">Notes</option>
          </select>
        </label>

        <div className="search-dynamic-area">

          {/* ⭐ NAME SEARCH */}
          <div className={`name-container ${active === "name" ? "show" : "hide"}`}>
            <input
              className="search-input"
              placeholder="Type brand, fragrance, our name or ID..."
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
            />
          </div>

          {/* ⭐ NOTES SEARCH */}
          <div className={`notes-container ${active === "notes" ? "show" : "hide"}`}>

            {/* Selected notes chips */}
            {selectedNotes.length > 0 && (
              <div className="chips-row">
                {selectedNotes.map((note) => (
                  <div key={note} className="chip">
                    {note}
                    <span className="chip-x" onClick={() => removeNote(note)}>×</span>
                  </div>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="input-wrapper">
              <input
                className="search-input"
                placeholder="Type notes (vanilla, musk...)"
                value={noteInput}
                onChange={(e) => {
                  setNoteInput(e.target.value);
                  setShowSuggestions(true);

                  if (suggestionsRef.current) {
                    suggestionsRef.current.scrollTop = 0;
                  }
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => {
                  setTimeout(() => setShowSuggestions(false), 150);
                }}
              />

              {noteInput.length > 0 && (
                <span className="clear-input" onClick={() => setNoteInput("")}>
                  ×
                </span>
              )}
            </div>

            {/* Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions-box" ref={suggestionsRef}>
                {suggestions.map((note) => (
                  <div
                    key={note.name}
                    className={`suggestion-item note-with-img ${
                      selectedNotes.includes(note.name) ? "selected-note" : ""
                    }`}
                    onClick={() => addNote(note)}
                  >
                    <img src={note.img} alt={note.name} className="note-icon" />
                    {note.name}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
