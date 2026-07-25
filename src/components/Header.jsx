import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="/favicon.svg"
          alt="Logo Portfolio"
          width="40"
          height="40"
        />

        <h1>Portfolio Professionnel Collectif</h1>
      </div>

      <Navbar />

      <div className="header-actions">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;