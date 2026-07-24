import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header>
      <h1>Portfolio Professionnel Collectif</h1>

      <Navbar />

      <ThemeToggle />
    </header>
  );
}

export default Header;