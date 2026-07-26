import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <p>© 2026 {t("portfolioTitle")}</p>
    </footer>
  );
}

export default Footer;