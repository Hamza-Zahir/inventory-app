import { useState, useRef, useEffect } from "react";
import { BRANCHES } from "../../data/branches";
import "./BranchSelector.css";

export default function BranchSelector({ branch, setBranch }) {
  const [open, setOpen] = useState(false);
  const branchNames = Object.keys(BRANCHES);

  const menuRef = useRef(null);

  // ⭐ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatName = (b) =>
    b.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="branch-menu-container" ref={menuRef}>
      <button
        className="branch-menu-button"
        onClick={() => setOpen(!open)}
      >
        <span className="branch-text">{formatName(branch)}</span>
        <span className="arrow">▼</span>
      </button>

      {open && (
        <div className="branch-menu-list">
          {branchNames.map((b) => (
            <div
              key={b}
              className="branch-menu-item"
              onClick={() => {
                setBranch(b);
                setOpen(false);
              }}
            >
              {formatName(b)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
