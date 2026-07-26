import { useLanguage } from "../context/LanguageContext";

function LanguageSelector() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={t("language")}
    >
      {language === "fr"
        ? t("english")
        : t("french")}
    </button>
  );
}

export default LanguageSelector;