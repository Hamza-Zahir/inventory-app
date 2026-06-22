import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <p className="footer-title">ParfumAe Insight — © 2026</p>

      <p className="footer-desc">
        Smart fragrance search & note‑based discovery.
      </p>

      <div className="footer-divider"></div>

      <div className="footer-author-line">
        <p className="footer-author">
          Created by <strong>Hamza Zahir</strong>
        </p>

        <a 
          href="mailto:hamzahir1998@gmail.com" 
          className="footer-mail-icon"
        >
          <FaEnvelope className="mail-icon" />
        </a>
      </div>

    </footer>
  );
}
