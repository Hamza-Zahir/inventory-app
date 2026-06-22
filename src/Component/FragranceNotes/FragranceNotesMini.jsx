import "./FragranceNotesMini.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function FragranceNotesMini({ notes, matchedNotes = [] }) {
  if (!notes) return null;

  // ⭐ نفس logic ديال App.js باش matched يكون ذكي
  function isNoteMatch(note, selected) {
    const n = note.toLowerCase();
    const s = selected.toLowerCase();

    if (n === s) return true;                     // exact match
    if (n.startsWith(s + " ")) return true;       // Turkish Rose / Black Vanilla Husk
    if (n.endsWith(" " + s)) return true;         // Rose Absolute / Vanilla Absolute
    if (n.includes(" " + s + " ")) return true;   // White Rose Petals

    return false;
  }

  const sections = [
    { title: "Top Notes", list: notes.top || [] },
    { title: "Middle Notes", list: notes.middle || [] },
    { title: "Base Notes", list: notes.base || [] }
  ];

  return (
    <div className="notes-mini-wrapper">
      {sections.map((sec, i) =>
        sec.list.length > 0 && (
          <div key={i} className="notes-section-mini">

            {/* TITLE */}
            <div className="notes-title-mini">
              <div className="line-mini left"></div>
              <span>{sec.title}</span>
              <div className="line-mini right"></div>
            </div>

            {/* NOTES */}
            <div className="notes-grid-mini">
              {sec.list.map((n, idx) => {
                const key = n.toLowerCase();

                // ⭐ matched intelligent
                const isMatch = matchedNotes.some((sel) =>
                  isNoteMatch(key, sel)
                );

                return (
                  <div key={idx} className="note-item-mini">
                    <div className={`note-icon-mini ${isMatch ? "matched" : ""}`}>
                      <img src={NOTES_IMAGES[key]} alt={n} />
                    </div>

                    <span className={`note-label-mini ${isMatch ? "matched" : ""}`}>
                      {n}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        )
      )}
    </div>
  );
}
