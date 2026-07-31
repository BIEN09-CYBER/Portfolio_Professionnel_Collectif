import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {t("portfolioTitle")}
      </p>

      <p>{t("copyright")}</p>
    </footer>
  );
}

export default Footer;