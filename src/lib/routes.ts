// Locale + route map. Keeps slugs in sync between MK and EN for hreflang + language switcher.
export type Locale = "mk" | "en";

export type RouteKey =
  | "home"
  | "what-is-ip"
  | "trademark"
  | "trademark/procedure"
  | "trademark/fees"
  | "trademark/renewal"
  | "trademark/opposition"
  | "trademark/madrid"
  | "patent"
  | "patent/procedure"
  | "patent/pct"
  | "patent/european-patent"
  | "patent/spc"
  | "industrial-design"
  | "industrial-design/procedure"
  | "industrial-design/renewal"
  | "industrial-design/hague"
  | "copyright"
  | "copyright/duration"
  | "copyright/ownership-and-licensing"
  | "copyright/software"
  | "copyright/related-rights"
  | "geographical-indications"
  | "enforcement"
  | "glossary"
  | "faq"
  | "contact"
  | "about"
  | "sources"
  | "privacy"
  | "terms"
  | "disclaimer";

// Path segment per locale, keyed by stable RouteKey. Empty string = locale root.
export const ROUTES: Record<RouteKey, { mk: string; en: string }> = {
  "home": { mk: "", en: "" },
  "what-is-ip": {
    mk: "sto-e-intelektualna-sopstvenost",
    en: "what-is-intellectual-property",
  },
  "trademark": { mk: "trgovska-marka", en: "trademark" },
  "trademark/procedure": { mk: "trgovska-marka/procedura", en: "trademark/procedure" },
  "trademark/fees": { mk: "trgovska-marka/taksi-i-troshoci", en: "trademark/fees" },
  "trademark/renewal": { mk: "trgovska-marka/obnovuvanje", en: "trademark/renewal" },
  "trademark/opposition": { mk: "trgovska-marka/prigovor", en: "trademark/opposition" },
  "trademark/madrid": {
    mk: "trgovska-marka/megunarodna-zashtita-madrid",
    en: "trademark/madrid-international-protection",
  },
  "patent": { mk: "patent", en: "patent" },
  "patent/procedure": { mk: "patent/procedura", en: "patent/procedure" },
  "patent/pct": { mk: "patent/pct", en: "patent/pct" },
  "patent/european-patent": { mk: "patent/evropski-patent", en: "patent/european-patent" },
  "patent/spc": {
    mk: "patent/sertifikat-za-dopolnitelna-zashtita",
    en: "patent/supplementary-protection-certificate",
  },
  "industrial-design": { mk: "industriski-dizajn", en: "industrial-design" },
  "industrial-design/procedure": {
    mk: "industriski-dizajn/procedura",
    en: "industrial-design/procedure",
  },
  "industrial-design/renewal": {
    mk: "industriski-dizajn/obnovuvanje",
    en: "industrial-design/renewal",
  },
  "industrial-design/hague": {
    mk: "industriski-dizajn/haski-sistem",
    en: "industrial-design/hague-system",
  },
  "copyright": { mk: "avtorsko-pravo", en: "copyright" },
  "copyright/duration": { mk: "avtorsko-pravo/trajanje", en: "copyright/duration" },
  "copyright/ownership-and-licensing": {
    mk: "avtorsko-pravo/sopstvenost-i-licenci",
    en: "copyright/ownership-and-licensing",
  },
  "copyright/software": {
    mk: "avtorsko-pravo/kompjuterski-programi",
    en: "copyright/software",
  },
  "copyright/related-rights": {
    mk: "avtorsko-pravo/srodni-prava",
    en: "copyright/related-rights",
  },
  "geographical-indications": {
    mk: "geografski-oznaki",
    en: "geographical-indications",
  },
  "enforcement": { mk: "zashtita-i-carina", en: "enforcement-and-customs" },
  "glossary": { mk: "poimnik", en: "glossary" },
  "faq": { mk: "chesti-prashanja", en: "faq" },
  "contact": { mk: "kontakt", en: "contact" },
  "about": { mk: "za-nas", en: "about" },
  "sources": { mk: "izvori", en: "sources" },
  "privacy": { mk: "privatnost", en: "privacy" },
  "terms": { mk: "uslovi", en: "terms" },
  "disclaimer": { mk: "odrekuvanje", en: "disclaimer" },
};

export const ALL_ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];

export function pathFor(key: RouteKey, locale: Locale): string {
  const slug = ROUTES[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

// Reverse lookup: from a /mk or /en path, find the RouteKey + locale.
export function resolvePath(pathname: string): { key: RouteKey; locale: Locale } | null {
  const m = pathname.match(/^\/(mk|en)(?:\/(.*?))?\/?$/);
  if (!m) return null;
  const locale = m[1] as Locale;
  const rest = (m[2] ?? "").replace(/\/$/, "");
  for (const key of ALL_ROUTE_KEYS) {
    if (ROUTES[key][locale] === rest) return { key, locale };
  }
  return null;
}

export function alternateOf(key: RouteKey, locale: Locale): string {
  const other: Locale = locale === "mk" ? "en" : "mk";
  return pathFor(key, other);
}

export const SITE_URL = "https://iplaw.nexa.mk";
export const SITE_EMAIL = "info@nexa.mk";
