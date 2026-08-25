import { createContext } from "react";
import { LOCALE_META, LOCALES, type Locale, type Messages } from "./types";

export type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
  meta: (typeof LOCALE_META)[Locale];
  locales: typeof LOCALES;
};

export const I18nContext = createContext<I18nValue | null>(null);
