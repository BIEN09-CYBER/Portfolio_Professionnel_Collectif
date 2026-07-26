import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      aria-label={t("theme")}
    >
      {theme === "light"
        ? t("themeDark")
        : t("themeLight")}
    </button>
  );
}

export default ThemeToggle;