import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

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

      <ThemeToggle />
    </header>
  );
}

export default Header;