import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <p className="footer-title">ParfumAe Insight — © 2026</p>

      <p className="footer-desc">
        Smart fragrance search & note‑based discovery.
      </p>

      <div className="footer-divider"></div>

      <p className="footer-author">
        Created by <strong>Hamza Zahir</strong> — 
        <a href="mailto:hamzahir1998@gmail.com" className="footer-mail">
          hamzahir1998@gmail.com
        </a>
      </p>

    </footer>
  );
}
