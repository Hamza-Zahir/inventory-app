import "./Card.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function Card({ item, selectedNotes, notesMode, onClick }) {
  const { fragrance, brand, image, notes } = item;

  // Extract notes
  const topNotes = notes.top.map((n) => n.note.toLowerCase());
  const middleNotes = notes.middle.map((n) => n.note.toLowerCase());
  const baseNotes = notes.base.map((n) => n.note.toLowerCase());

  const allNotes = [...topNotes, ...middleNotes, ...baseNotes];

  // Count matches
  const matchCount = selectedNotes.filter((n) => allNotes.includes(n)).length;

  // Highlight function
  const highlight = (note) =>
    selectedNotes.includes(note.toLowerCase()) ? "note highlight" : "note";

  return (
    <div
      className={`card ${notesMode ? "notes-mode" : ""}`}
      onClick={onClick}
    >
      {/* IMAGE */}
      <img src={image} alt={fragrance} className="card-img" />

      {/* TEXT CONTENT */}
      <div className="card-content">
        <div className="frag">{fragrance}</div>
        <div className="brand">({brand})</div>

        {/* MATCH COUNT */}
        {notesMode && (
          <div className="match-count">{matchCount} matches</div>
        )}

        {/* MINI NOTES GRID */}
        {notesMode && (
          <div className="mini-notes-grid">

            {/* TOP NOTES */}
            <div className="mini-section">
              <div className="mini-title">Top</div>
              <div className="mini-list">
                {topNotes.map((n) => (
                  <div key={n} className="mini-item">
                    <img src={NOTES_IMAGES[n]} className="mini-icon" />
                    <span className={highlight(n)}>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MIDDLE NOTES */}
            <div className="mini-section">
              <div className="mini-title">Middle</div>
              <div className="mini-list">
                {middleNotes.map((n) => (
                  <div key={n} className="mini-item">
                    <img src={NOTES_IMAGES[n]} className="mini-icon" />
                    <span className={highlight(n)}>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BASE NOTES */}
            <div className="mini-section">
              <div className="mini-title">Base</div>
              <div className="mini-list">
                {baseNotes.map((n) => (
                  <div key={n} className="mini-item">
                    <img src={NOTES_IMAGES[n]} className="mini-icon" />
                    <span className={highlight(n)}>{n}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
