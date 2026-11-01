import "./AnimatedNotesCard.css";
import FragranceNotesMini from "../FragranceNotes/FragranceNotesMini";

export default function AnimatedNotesCard({ item, selectedNotes, onClick }) {
  const { fragrance, brand, image, notes, gender, id } = item;

  // ⭐ FUNCTION — نفس logic ديال App.js
  function isNoteMatch(note, selected) {
    const n = note.toLowerCase();
    const s = selected.toLowerCase();

    if (n === s) return true;
    if (n.startsWith(s + " ")) return true;
    if (n.endsWith(" " + s)) return true;
    if (n.includes(" " + s + " ")) return true;

    return false;
  }

  // ⭐ جميع النوتات ديال العطر
  const allNotes = (notes.all || [
    ...notes.top.map((n) => n.toLowerCase()),
    ...notes.middle.map((n) => n.toLowerCase()),
    ...notes.base.map((n) => n.toLowerCase())
  ]).map((n) => n.toLowerCase());

  // ⭐ matched intelligent (vanilla → black vanilla husk)
  const matchedNotes = selectedNotes.filter((sel) =>
    allNotes.some((note) => isNoteMatch(note, sel))
  );

  return (
    <div className={`card ${gender?.toLowerCase()}`} onClick={onClick}>

      {/* ⭐ SEE MORE ICON — TOP RIGHT */}
      <div className="see-more-icon">➜</div>

      {/* HEADER */}
      <div className="card-header">

        {/* IMAGE */}
        <div className="image-box">
          {image && <img src={image} alt={fragrance} className="small-img" />}
        </div>

        {/* TITLE + ID */}
        <div className="title-column">
          <div className="id-inline">{id}</div>

          <div className="title-box">
            <div className="frag">{fragrance}</div>
            {brand && <div className="brand">({brand})</div>}
          </div>
        </div>

      </div>

      {/* NOTES */}
      <div className="notes-box">
        <FragranceNotesMini
          notes={notes}
          matchedNotes={matchedNotes}
        />
      </div>

    </div>
  );
}
