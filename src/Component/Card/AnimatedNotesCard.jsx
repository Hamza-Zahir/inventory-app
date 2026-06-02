import "./AnimatedNotesCard.css";
import FragranceNotesMini from "../FragranceNotes/FragranceNotesMini";

export default function AnimatedNotesCard({ item, selectedNotes, onClick }) {
  const { fragrance, brand, image, notes } = item;

  // ⭐ استخراج جميع النوتات
  const allNotes = [
    ...notes.top.map((n) => n.note.toLowerCase()),
    ...notes.middle.map((n) => n.note.toLowerCase()),
    ...notes.base.map((n) => n.note.toLowerCase())
  ];

  // ⭐ النوتات لي كيتطابقو مع selectedNotes
  const matchedNotes = selectedNotes
    .map((n) => n.toLowerCase())
    .filter((n) => allNotes.includes(n));

  return (
    <div className="card-wrapper" onClick={onClick}>

      {/* ⭐ الصورة خارج الكارد نهائياً */}
      <img
        src={image}
        alt={fragrance}
        className="card-img-rise"
      />

      {/* ⭐ الكارد فوق الصورة */}
      <div className="card notes-mode">
        <div className="card-content">
          <div className="frag">{fragrance}</div>
          <div className="brand">({brand})</div>

          {/* ⭐ notes always visible in this card */}
          <FragranceNotesMini
            notes={{
              top: [...notes.top],
              middle: [...notes.middle],
              base: [...notes.base]
            }}
            matchedNotes={matchedNotes}
          />
        </div>
      </div>

    </div>
  );
}
