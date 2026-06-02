import "./FragranceNotes.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function FragranceNotes({ notes }) {
  if (!notes) return null;

  return (
    <div className="notes-wrapper">

      {/* TOP NOTES */}
      {notes.top?.length > 0 && (
        <div className="notes-section">
          <div className="notes-title">
            <div className="line left"></div>
            <span>Top Notes</span>
            <div className="line right"></div>
          </div>

          <div className="notes-grid">
            {notes.top.map((n, i) => (
              <div key={i} className="note-item-large">
                <div className="note-icon-large">
                  <img
                    className="note-img-large"
                    src={NOTES_IMAGES[n.note.toLowerCase()]}
                    alt={n.note}
                  />
                </div>
                <span className="note-label-large">{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MIDDLE NOTES */}
      {notes.middle?.length > 0 && (
        <div className="notes-section">
          <div className="notes-title">
            <div className="line left"></div>
            <span>Middle Notes</span>
            <div className="line right"></div>
          </div>

          <div className="notes-grid">
            {notes.middle.map((n, i) => (
              <div key={i} className="note-item-large">
                <div className="note-icon-large">
                  <img
                    className="note-img-large"
                    src={NOTES_IMAGES[n.note.toLowerCase()]}
                    alt={n.note}
                  />
                </div>
                <span className="note-label-large">{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BASE NOTES */}
      {notes.base?.length > 0 && (
        <div className="notes-section">
          <div className="notes-title">
            <div className="line left"></div>
            <span>Base Notes</span>
            <div className="line right"></div>
          </div>

          <div className="notes-grid">
            {notes.base.map((n, i) => (
              <div key={i} className="note-item-large">
                <div className="note-icon-large">
                  <img
                    className="note-img-large"
                    src={NOTES_IMAGES[n.note.toLowerCase()]}
                    alt={n.note}
                  />
                </div>
                <span className="note-label-large">{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
