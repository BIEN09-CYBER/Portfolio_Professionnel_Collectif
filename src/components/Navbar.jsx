import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigation principale">
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
  );
}