import "./FragranceNotes.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function FragranceNotes({ notes }) {
  if (!notes) return null;

  const sections = notes.all?.length
    ? [{ title: "Fragrance Notes", list: notes.all }]
    : [
        { title: "Top Notes", list: notes.top || [] },
        { title: "Middle Notes", list: notes.middle || [] },
        { title: "Base Notes", list: notes.base || [] },
      ];

  return (
    <div className="notes-wrapper">
      {sections.map((section) =>
        section.list.length > 0 ? (
          <div key={section.title} className="notes-section">
            <div className="notes-title">
              <div className="line left"></div>
              <span>{section.title}</span>
              <div className="line right"></div>
            </div>

            <div className="notes-grid">
              {section.list.map((note, index) => {
                const key = note.toLowerCase();
                return (
                  <div key={index} className="note-item-large">
                    <div className="note-icon-large">
                      <img
                        className="note-img-large"
                        src={NOTES_IMAGES[key]}
                        alt={note}
                      />
                    </div>
                    <span className="note-label-large">{note}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
