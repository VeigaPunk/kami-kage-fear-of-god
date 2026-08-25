import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  LOCALES,
  STORAGE_KEY,
  type Locale,
  type Messages,
} from "./types";
import { I18nContext, type I18nValue } from "./context";
import en from "./locales/en";
import ja from "./locales/ja";
import zhCN from "./locales/zh-CN";
import ms from "./locales/ms";
import ptBR from "./locales/pt-BR";
import de from "./locales/de";

const catalogs: Record<Locale, Messages> = {
  en,
  ja,
  "zh-CN": zhCN,
  ms,
  "pt-BR": ptBR,
  de,
};

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (LOCALES as readonly string[]).includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  const nav = navigator.language || "";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("zh")) return "zh-CN";
  if (nav.startsWith("ms") || nav.toLowerCase().includes("sg")) return "ms";
  if (nav.startsWith("pt")) return "pt-BR";
  if (nav.startsWith("de")) return "de";
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(readInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      t: catalogs[locale],
      meta: LOCALE_META[locale],
      locales: LOCALES,
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
