import "./FragranceNotesMini.css";

export default function FragranceNotesMini({ notes }) {
  if (!notes) return null;

  return (
    <div className="mini-wrapper">

      {/* TOP NOTES */}
      {notes.top?.length > 0 && (
        <div className="mini-section">
          <div className="mini-title">
            <div className="mini-line left"></div>
            <span>Top Notes</span>
            <div className="mini-line right"></div>
          </div>

          <div className="mini-grid">
            {notes.top.map((n, i) => (
              <div key={i} className="mini-item">
                <div className="mini-icon">
                  <img src={n.image} alt={n.note} />
                </div>
                <span className="mini-label">{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MIDDLE NOTES */}
      {notes.middle?.length > 0 && (
        <div className="mini-section">
          <div className="mini-title">
            <div className="mini-line left"></div>
            <span>Middle Notes</span>
            <div className="mini-line right"></div>
          </div>

          <div className="mini-grid">
            {notes.middle.map((n, i) => (
              <div key={i} className="mini-item">
                <div className="mini-icon">
                  <img src={n.image} alt={n.note} />
                </div>
                <span className="mini-label">{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BASE NOTES */}
      {notes.base?.length > 0 && (
        <div className="mini-section">
          <div className="mini-title">
            <div className="mini-line left"></div>
            <span>Base Notes</span>
            <div className="mini-line right"></div>
          </div>

          <div className="mini-grid">
            {notes.base.map((n, i) => (
              <div key={i} className="mini-item">
                <div className="mini-icon">
                  <img src={n.image} alt={n.note} />
                </div>
                <span className="mini-label">{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
