import "./AnimatedNotesCard.css";
import FragranceNotesMini from "../FragranceNotes/FragranceNotesMini";

export default function AnimatedNotesCard({ item, selectedNotes, onClick }) {
  const { fragrance, brand, image, notes, gender, id } = item;

  const allNotes = [
    ...notes.top.map((n) => n.note.toLowerCase()),
    ...notes.middle.map((n) => n.note.toLowerCase()),
    ...notes.base.map((n) => n.note.toLowerCase())
  ];

  const matchedNotes = selectedNotes
    .map((n) => n.toLowerCase())
    .filter((n) => allNotes.includes(n));

  return (
    <div className="card" onClick={onClick}>

      {/* ⭐ SEE MORE ICON — TOP RIGHT */}
      <div className="see-more-icon">➜</div>

      {/* HEADER */}
      <div className="card-header">

        {/* IMAGE */}
        <div className={`image-box ${gender}`}>
          <img src={image} alt={fragrance} className="small-img" />
        </div>

        {/* TITLE + ID */}
        <div className="title-column">
          <div className="id-inline">{id}</div>

          <div className="title-box">
            <div className="frag">{fragrance}</div>
            <div className="brand">({brand})</div>
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
