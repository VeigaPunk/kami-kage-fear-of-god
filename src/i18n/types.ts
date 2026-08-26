export const LOCALES = ["en", "ja", "zh-CN", "ms", "pt-BR", "de"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { label: string; native: string; htmlLang: string }> = {
  en: { label: "English", native: "EN", htmlLang: "en" },
  ja: { label: "Japanese", native: "日本語", htmlLang: "ja" },
  "zh-CN": { label: "Chinese", native: "中文", htmlLang: "zh-CN" },
  ms: { label: "Singapore · Melayu", native: "BM", htmlLang: "ms" },
  "pt-BR": { label: "Português (Brasil)", native: "PT", htmlLang: "pt-BR" },
  de: { label: "Deutsch", native: "DE", htmlLang: "de" },
};

export const DEFAULT_LOCALE: Locale = "en";
export const STORAGE_KEY = "kami-kage-locale";

export type Messages = {
  skip: string;
  nav: {
    special: string;
    brand: string;
    story: string;
    zhurong: string;
    editions: string;
    limited: string;
    runway: string;
    details: string;
    explore: string;
    openMenu: string;
    closeMenu: string;
    lang: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    body: string;
    ctaEditions: string;
    ctaSet: string;
    statBrand: string;
    statLeather: string;
    statIncludes: string;
    pauseVideo: string;
    playVideo: string;
  };
  story: {
    kicker: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    brand: string;
    brandLabel: string;
    silhouette: string;
    silhouetteLabel: string;
    codex: string;
    codexLabel: string;
  };
  zhurong: {
    kicker: string;
    title: string;
    body: string;
    kanjiThree: string;
    units: string;
    p1Title: string;
    p1Body: string;
    p2Title: string;
    p2Body: string;
    p3Title: string;
    p3Body: string;
    quote: string;
    after: string;
    cta: string;
    bridge: string;
  };
  editions: {
    kicker: string;
    title: string;
    intro: string;
    leatherLabel: string;
    leatherName: string;
    leatherTag: string;
    leatherMaterial: string;
    leatherDesc: string;
    leatherSpecs: string[];
    leatherCta: string;
    knitLabel: string;
    knitName: string;
    knitTag: string;
    knitMaterial: string;
    knitDesc: string;
    knitSpecs: string[];
    knitCta: string;
  };
  limited: {
    kicker: string;
    titleBefore: string;
    titleAfter: string;
    body: string;
    plaque: string;
    of: string;
    plaqueNote: string;
    srSerial: string;
    items: string[];
    setCaption: string;
    leatherCaption: string;
    bagCaption: string;
    setAlt: string;
    leatherAlt: string;
    bagAlt: string;
    sealAria: string;
  };
  runway: {
    kicker: string;
    title: string;
    body: string;
    venue: string;
    venueValue: string;
    brand: string;
    codex: string;
    caption: string;
    captionsLabel: string;
  };
  details: {
    kicker: string;
    title: string;
    intro: string;
    tableAria: string;
    spec: string;
    colLeather: string;
    colKnit: string;
    rows: { label: string; leather: string; knit: string }[];
    c1Title: string;
    c1Body: string;
    c2Title: string;
    c2Body: string;
    c3Title: string;
    c3Body: string;
  };
  footer: {
    tagline: string;
    navigate: string;
    editions: string;
    edLeather: string;
    edKnit: string;
    edBag: string;
    codex: string;
    threeStripes: string;
    three: string;
    zhurong: string;
    note: string;
    noteBody: string;
    bottom: string;
    serial: string;
    lead: string;
  };
};
