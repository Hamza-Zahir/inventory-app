import NOTES_IMAGES from "../../data/NOTES_IMAGES";

export default function LuxuryBackground() {
  const notesArray = Object.values(NOTES_IMAGES);

  return (
    <div className="luxury-bg-root">
      <div className="luxury-bg-notes">
        {notesArray.map((img, i) => (
          <div
            key={i}
            className="note-fish"
            style={{
              "--x": Math.random() * 100 + "%",
              "--y": Math.random() * 100 + "%",
              "--d": 12 + Math.random() * 18 + "s",
              "--s": 0.7 + Math.random() * 0.6,
              "--r": Math.random() * 360 + "deg",
              backgroundImage: `url(${img})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
