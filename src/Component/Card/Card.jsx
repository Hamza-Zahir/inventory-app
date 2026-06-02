import "./Card.css";
import FragranceNotesMini from "../FragranceNotes/FragranceNotesMini";

export default function Card({ item, selectedNotes, notesMode, onClick }) {
  const { fragrance, brand, image, notes } = item;

  const allNotes = [
    ...notes.top.map((n) => n.note.toLowerCase()),
    ...notes.middle.map((n) => n.note.toLowerCase()),
    ...notes.base.map((n) => n.note.toLowerCase())
  ];

  const matchedNotes = selectedNotes
    .map((n) => n.toLowerCase())
    .filter((n) => allNotes.includes(n));

  return (
    <div
      className={`card ${notesMode ? "notes-mode" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={fragrance} className="card-img" />

      <div className="card-content">
        <div className="frag">{fragrance}</div>
        <div className="brand">({brand})</div>

        {notesMode && (
          <FragranceNotesMini
            notes={{
              top: [...notes.top],
              middle: [...notes.middle],
              base: [...notes.base]
            }}
            matchedNotes={matchedNotes}
          />
        )}
      </div>
    </div>
  );
}
