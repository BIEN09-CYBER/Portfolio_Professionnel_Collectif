import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="/icons.svg"
            alt="Logo du Portfolio Professionnel Collectif"
          />
        </Link>

        <h1>Portfolio Professionnel Collectif</h1>
      </div>

      <nav aria-label="Navigation principale">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li>
            <NavLink to="/equipe">Équipe</NavLink>
          </li>

          <li>
            <NavLink to="/projets">Projets</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}