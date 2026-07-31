import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { t } = useLanguage();

  return (
    <h1>{t("found")}</h1>
  );
}

export default NotFound;