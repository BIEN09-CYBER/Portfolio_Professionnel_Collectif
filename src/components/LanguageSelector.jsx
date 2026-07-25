import { useLanguage } from "../context/LanguageContext";

function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
    </button>
  );
}

export default LanguageSelector;