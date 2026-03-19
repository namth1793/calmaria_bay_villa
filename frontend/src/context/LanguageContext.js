'use client';
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({ lang: 'vi', toggleLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('vi');
  const toggleLang = () => setLang(l => (l === 'vi' ? 'en' : 'vi'));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
