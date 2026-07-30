import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Portfolio Professionnel Collectif -
        Tous droits réservés
      </p>

      <nav aria-label="Liens secondaires">
        <ul>
          <li>
            <Link to="/mentions-legales">
              Mentions légales
            </Link>
          </li>

          <li>
            <Link to="/accessibilite">
              Accessibilité
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}