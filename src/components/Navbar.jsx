import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { t } = useLanguage();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            {t("navHome")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/equipe">
            {t("navTeam")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/projets">
            {t("navProjects")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            {t("navContact")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;