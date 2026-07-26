import { createContext, useContext, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === "fr" ? "en" : "fr"
    );
  }

  function t(key) {
    return translations[language][key] || key;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}