import "./FragranceNotesMini.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function FragranceNotesMini({ notes, matchedNotes = [] }) {
  if (!notes) return null;

  const renderSection = (title, list) => (
    list?.length > 0 && (
      <div className="mini-section">
        <div className="mini-title">
          <div className="mini-line left"></div>
          <span>{title}</span>
          <div className="mini-line right"></div>
        </div>

        <div className="mini-grid">
          {list.map((n, i) => {
            const key = n.note.toLowerCase();
            const isMatch = matchedNotes.includes(key);

            return (
              <div key={i} className="mini-item">
                {/* ICON */}
                <div className={`mini-icon ${isMatch ? "matched" : ""}`}>
                  <img src={NOTES_IMAGES[key]} alt={n.note} />
                </div>

                {/* LABEL */}
                <span className={`mini-label ${isMatch ? "matched" : ""}`}>
                  {n.note}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    )
  );

  return (
    <div className="notes-mini-wrapper">
      <div className="mini-wrapper">
        {renderSection("Top Notes", notes.top)}
        {renderSection("Middle Notes", notes.middle)}
        {renderSection("Base Notes", notes.base)}
      </div>
    </div>
  );
}
