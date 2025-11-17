"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import deContent from '@/i18n/de.json';
import enContent from '@/i18n/en.json';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMergeFallback<T>(base: T, partial: Partial<T>): T {
  // If base is an array, only accept an array override; otherwise keep base
  if (Array.isArray(base)) {
    return (Array.isArray(partial) ? (partial as unknown as T) : base);
  }

  if (isPlainObject(base)) {
    const baseObj = base as unknown as Record<string, unknown>;
    const partialObj = isPlainObject(partial) ? (partial as unknown as Record<string, unknown>) : {};
    const result: Record<string, unknown> = { ...baseObj };

    for (const key of Object.keys(baseObj)) {
      const bVal = baseObj[key];
      const pVal = partialObj[key];

      if (pVal === undefined) {
        result[key] = bVal;
      } else if (isPlainObject(bVal)) {
        result[key] = deepMergeFallback(bVal, pVal as Partial<typeof bVal>);
      } else if (Array.isArray(bVal)) {
        result[key] = Array.isArray(pVal) ? pVal : bVal;
      } else {
        result[key] = pVal;
      }
    }

    // include keys that exist only in partial
    for (const key of Object.keys(partialObj)) {
      if (!(key in baseObj)) {
        result[key] = partialObj[key];
      }
    }

    return result as unknown as T;
  }

  return (partial !== undefined ? (partial as T) : base);
}

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: typeof deContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const content = language === 'de'
    ? deContent
    : deepMergeFallback(deContent, enContent as unknown as Partial<typeof deContent>);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}