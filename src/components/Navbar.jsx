import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
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

export default Navbar;