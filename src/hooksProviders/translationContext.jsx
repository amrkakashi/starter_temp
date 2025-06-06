import { createContext, useContext, useState, useEffect } from "react";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);

    const loadTranslations = async () => {
      try {
        const res = await import(`../locales/${language}.json`);
        setTranslations(res);
      } catch (error) {
        console.error(
          `Error loading translations for language: ${language}`,
          error
        );
      }
    };
    loadTranslations();
  }, [language]);

  const translate = (keyPath) =>
    keyPath.split(".").reduce((obj, key) => obj?.[key], translations) || keyPath;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
