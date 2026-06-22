import "./MixingTable.css";
import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function MixingTable({ selectedNotes }) {
  return (
    <div className="mix-table-wrapper">
      <h2 className="mix-title">What if you mix?</h2>

      {/* Selected Notes */}
      <div className="mix-subtitle">
        Selected notes:
        <span className="mix-notes">{selectedNotes.join(", ")}</span>
      </div>

      {/* Notes Images */}
      <div className="mix-notes-images">
        {selectedNotes.map((note) => {
          const key = note.toLowerCase();
          const img = NOTES_IMAGES[key];

          return (
            <div key={note} className="mix-note-img">
              {img && (
                <img
                  src={img}
                  alt={note}
                />
              )}
              <span>{note}</span>
            </div>
          );
        })}
      </div>

      {/* AI Description */}
      <div className="mix-coming">
        <h3>AI‑Powered Blending</h3>

        <p>
          This upcoming feature will use an intelligent AI engine capable of
          analyzing fragrance structures and predicting optimal blends. It will
          identify which perfumes can be mixed together, calculate the ideal
          percentage of each fragrance, and generate multiple high‑quality
          suggestions to help you achieve the closest match to your selected
          notes.
        </p>

        <p className="mix-highlight">
          Smart combinations. Precision ratios. Better results.
        </p>

        <p className="mix-coming-soon">Coming soon…</p>
      </div>
    </div>
  );
}
