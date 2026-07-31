import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="header-top">

        <div className="header-logo">
          <Link to="/">
            <img
              src="/favicon.svg"
              alt={t("portfolioTitle")}
              width="42"
              height="42"
            />
          </Link>

          <h1>{t("portfolioTitle")}</h1>
        </div>

      </div>

      <div className="header-bottom">

        <Navbar />

        <div className="header-actions">
          <LanguageSelector />
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}

export default Header;