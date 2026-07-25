import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img
            src="/favicon.svg"
            alt="Logo"
            width="42"
            height="42"
          />

          <h1>Portfolio Professionnel Collectif</h1>
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