// src/Component/ModalCard/ModalCard.js

import FragranceNotes from "../FragranceNotes/FragranceNotes";
import "./ModalCard.css";

export default function ModalCard({ item, onClose }) {
  if (!item) return null;

  const { fragrance, brand, family, gender, image, notes, id } = item;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-big" onClick={(e) => e.stopPropagation()}>

        {/* CLOSE BUTTON */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* LEFT SIDE */}
        <div className="modal-left">
          <img src={image} alt={fragrance} className="modal-big-img" />
        </div>

        {/* RIGHT SIDE */}
        <div className="modal-right">

          {/* ⭐ ID فوق العنوان */}
          <div className="id-inline modal-id">{id}</div>

          {/* TITLE */}
          <div className="modal-title-line">
            {fragrance} {brand}
          </div>

          {/* GENDER */}
          <div className="gender-line-modal">
            {gender === "women" && (
              <span className="gender-text-modal women">For Women</span>
            )}
            {gender === "men" && (
              <span className="gender-text-modal men">For Men</span>
            )}
            {gender === "unisex" && (
              <span className="gender-text-modal unisex">
                For Women and Men
              </span>
            )}
          </div>

          {/* FAMILY */}
          <p className="family-line">{family} fragrance</p>

          {/* NOTES */}
          <FragranceNotes notes={notes} />

        </div>
      </div>
    </div>
  );
}
