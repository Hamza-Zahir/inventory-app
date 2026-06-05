import "./FragranceNotesMini.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function FragranceNotesMini({ notes, matchedNotes = [] }) {
  const sections = [
    { title: "Top Notes", list: notes.top || [] },
    { title: "Middle Notes", list: notes.middle || [] },
    { title: "Base Notes", list: notes.base || [] }
  ];

  return (
    <div className="notes-mini-wrapper">

      {sections.map((sec, i) => (
        <div key={i} className="section-block">

          {/* ⭐ TITLE FIXED */}
          <div className="mini-title">
            <div className="line-block"></div>
            <span className="title-text">{sec.title}</span>
            <div className="line-block"></div>
          </div>

          {/* ⭐ NOTES MAPPING */}
          <div className="section-content">
            {sec.list.length > 0 ? (
              sec.list.map((n, idx) => {
                const key = n.note.toLowerCase();
                const isMatch = matchedNotes.includes(key);

                return (
                  <div key={idx} className="note-item">
                    <div className={`note-icon ${isMatch ? "matched" : ""}`}>
                      <img src={NOTES_IMAGES[key]} alt={n.note} />
                    </div>
                    <div className={`note-label ${isMatch ? "matched" : ""}`}>
                      {n.note}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="note-empty">—</div>
            )}
          </div>

        </div>
      ))}

    </div>
  );
}
