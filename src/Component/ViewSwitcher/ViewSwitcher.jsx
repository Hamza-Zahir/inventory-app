import "./ViewSwitcher.css";

export default function ViewSwitcher({ view, setView }) {

  const iconCards = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="2"></rect>
      <rect x="14" y="3" width="7" height="7" rx="2"></rect>
      <rect x="3" y="14" width="7" height="7" rx="2"></rect>
      <rect x="14" y="14" width="7" height="7" rx="2"></rect>
    </svg>
  );

  const iconTable = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );

  const iconNotes = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z"></path>
      <line x1="8" y1="9" x2="16" y2="9"></line>
      <line x1="8" y1="13" x2="16" y2="13"></line>
      <line x1="8" y1="17" x2="13" y2="17"></line>
    </svg>
  );

  return (
    <div className="view-switcher">

      <div
        className={`view-btn ${view === "cards" ? "active" : ""}`}
        onClick={() => setView("cards")}
      >
        {iconCards}
        <span>See with Photos</span>
      </div>
  <div
        className={`view-btn ${view === "notes" ? "active" : ""}`}
        onClick={() => setView("notes")}
      >
        {iconNotes}
        <span>See with Notes</span>
      </div>

      <div
        className={`view-btn ${view === "table" ? "active" : ""}`}
        onClick={() => setView("table")}
      >
        {iconTable}
        <span>See Table</span>
      </div>

    
    </div>
  );
}
