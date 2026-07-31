import { useLanguage } from "../context/LanguageContext";

function Loader() {
  const { t } = useLanguage();

  return <p>{t("load")}</p>;
}

export default Loader;