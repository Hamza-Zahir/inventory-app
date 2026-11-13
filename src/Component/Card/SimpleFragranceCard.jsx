import "./SimpleFragranceCard.css";

export default function SimpleFragranceCard({ item, onClick }) {
  const { fragrance, brand, image, id, gender, Our_Name } = item;

  return (
    <div className={`simple-card ${gender?.toLowerCase()}`} onClick={onClick}>
      
      {/* ⭐ Image wrapper with gender background */}
      <div className={`img-wrapper ${gender?.toLowerCase()}`}>
        {image && <img src={image} alt={fragrance} className="simple-card-img" />}
      </div>

      <div className="simple-card-content">
        <div className="frag">{fragrance}</div>
        <div className="brand">{brand ? `(${brand})` : null}</div>
        {Our_Name && <div className="our-name">{Our_Name}</div>}
      </div>

      {/* ⭐ Footer same style as image wrapper */}
      <div className={`id-footer ${gender?.toLowerCase()}`}>
        <span className="id-number">{id}</span>
      </div>
    </div>
  );
}
