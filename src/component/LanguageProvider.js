import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from "../i18n/i18n";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(''); // Default language is English

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage && preferredLanguage !== language) {
      setLanguage(preferredLanguage);
      i18n.changeLanguage(preferredLanguage);
    }
  }, [language]);

  const changeLanguage = (lang) => {
    localStorage.setItem('preferredLanguage', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
