import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import {
  Header,
  Footer,
  PathwayCard,
  StatTile,
  BlockView,
  ContactBox,
  ContactForm,
  ContactSidebar,
  CookieBanner,
  EcosystemRibbon,
  RelatedTopics,
  TldrBlock,
  AuthorByline,
  FAQItem,
  Pill,
} from "./SiteUI";
import { type Locale, type RouteKey, pathFor, alternateOf, ROUTES, SITE_URL } from "@/lib/routes";
import { t } from "@/lib/i18n";
import {
  CONTENT,
  GLOSSARY_MK,
  GLOSSARY_EN,
  FAQ_MK,
  FAQ_EN,
} from "@/lib/content";

const AUTHOR_URL = SITE_URL + "/mk/za-nas";
const AUTHOR_NAME_MK = "Мартин Бошкоски";
const AUTHOR_NAME_EN = "Martin Boshkoski";

export function PageShell({ locale, currentKey, children }: { locale: Locale; currentKey?: RouteKey; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">{t(locale, "skip.toContent")}</a>
      <Header locale={locale} currentKey={currentKey} />
      <main id="main">{children}</main>
      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </>
  );
}

export function PageRenderer({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  const page = CONTENT[locale][routeKey];
  if (!page) return null;
  const isHome = routeKey === "home";
  const isContact = routeKey === "contact";
  const isGlossary = routeKey === "glossary";
  const isFaq = routeKey === "faq";

  return (
    <PageShell locale={locale} currentKey={routeKey}>
      {/* Breadcrumbs */}
      {!isHome && (
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 lg:px-8 pt-6 text-xs text-[var(--color-ink-500)]">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link to={pathFor("home", locale)} className="hover:text-[var(--color-brand-700)]">{t(locale, "nav.home")}</Link></li>
            {page.pillarFamily && page.pillarFamily !== (routeKey as string) && routeKey !== page.pillarFamily && (
              <>
                <li className="text-[var(--color-ink-300)]">/</li>
                <li><Link to={pathFor(page.pillarFamily as RouteKey, locale)} className="hover:text-[var(--color-brand-700)]">{t(locale, `nav.${page.pillarFamily}`)}</Link></li>
              </>
            )}
            <li className="text-[var(--color-ink-300)]">/</li>
            <li aria-current="page" className="text-[var(--color-ink-700)]">{page.title}</li>
          </ol>
        </nav>
      )}

      {/* Hero */}
      <section className={`${isHome ? "py-12 md:py-20" : "py-10 md:py-14"}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {page.eyebrow && (
            <div className="text-xs uppercase tracking-widest font-semibold text-[var(--color-brand-700)] mb-4">{page.eyebrow}</div>
          )}
          <h1 className={isHome ? "text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-ink-900)] leading-[1.05] max-w-4xl" : "text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-ink-900)] leading-[1.1] max-w-3xl"}>
            {page.h1}
          </h1>
          {page.lede && (
            <p className={`mt-6 text-lg text-[var(--color-ink-600)] leading-relaxed max-w-3xl ${isHome ? "font-serif" : ""}`}>
              {page.lede}
            </p>
          )}
          {isHome && <EcosystemRibbon locale={locale} />}
          {!isHome && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {page.lastReviewed && (
                <Pill tone="neutral">{t(locale, "pill.lastReviewed", { date: page.lastReviewed })}</Pill>
              )}
            </div>
          )}
          {!isHome && page.lastReviewed && (
            <AuthorByline locale={locale} reviewed={page.lastReviewed} />
          )}
          {isHome && (
            <>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={pathFor("trademark", locale)} className="inline-flex h-12 items-center px-6 rounded-lg bg-[var(--color-brand-600)] text-white font-medium hover:bg-[var(--color-brand-700)]">
                  {t(locale, "cta.startTm")} <ChevronRight size={18} className="ml-1" />
                </Link>
                <Link to={pathFor("what-is-ip", locale)} className="inline-flex h-12 items-center px-6 rounded-lg bg-white text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-200)] font-medium hover:bg-[var(--color-brand-50)]">
                  {t(locale, "cta.allAreas")}
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatTile value={locale === "mk" ? "10 години" : "10 years"} label={locale === "mk" ? "важност на регистрирана трговска марка" : "trademark validity, renewable indefinitely"} />
                <StatTile value={locale === "mk" ? "20 години" : "20 years"} label={locale === "mk" ? "траење на патент од денот на пријавата" : "patent term from filing date"} />
                <StatTile value={locale === "mk" ? "25 години" : "25 years"} label={locale === "mk" ? "максимално траење на индустриски дизајн" : "maximum industrial design protection"} />
                <StatTile value={locale === "mk" ? "70 години" : "70 years"} label={locale === "mk" ? "заштита на авторско дело по смртта на авторот" : "copyright protection after the author's death"} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Home: pillar cards */}
      {isHome && (
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-ink-900)] mb-8">{t(locale, "section.pillars")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <PathwayCard locale={locale} k="trademark" />
              <PathwayCard locale={locale} k="patent" />
              <PathwayCard locale={locale} k="industrial-design" />
              <PathwayCard locale={locale} k="copyright" />
              <PathwayCard locale={locale} k="geographical-indications" />
              <PathwayCard locale={locale} k="enforcement" />
            </div>
          </div>
        </section>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 prose-article">
        {!isHome && page.tldr && <TldrBlock locale={locale} text={page.tldr} />}
        {page.blocks.map((b, i) => (
          <BlockView key={i} block={b} locale={locale} page={page} />
        ))}
        {!isHome && !isContact && !isGlossary && !isFaq && page.blocks.length >= 6 && (
          <RelatedTopics locale={locale} category={page.pillarFamily} />
        )}

        {/* Contact special */}
        {isContact && (
          <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-6">
            <ContactForm locale={locale} />
            <ContactSidebar locale={locale} />
          </div>
        )}

        {/* Glossary special */}
        {isGlossary && (
          <dl className="mt-8 divide-y divide-[var(--color-ink-200)]">
            {(locale === "mk" ? GLOSSARY_MK : GLOSSARY_EN).map((g) => (
              <div key={g.term} className="py-4">
                <dt className="font-semibold text-[var(--color-ink-900)]">
                  <dfn>{g.term}</dfn>
                </dt>
                <dd className="mt-1 text-sm text-[var(--color-ink-700)]">
                  {g.definition}{" "}
                  {g.link && <Link to={g.link} className="text-[var(--color-action)] hover:underline">→</Link>}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* FAQ special */}
        {isFaq && (
          <div className="mt-8 space-y-10">
            {(locale === "mk" ? FAQ_MK : FAQ_EN).map((group) => (
              <section key={group.heading}>
                <h2 className="text-xl font-bold text-[var(--color-ink-900)] mb-2">{group.heading}</h2>
                <div>
                  {group.items.map((it, i) => <FAQItem key={i} q={it.q} a={it.a} />)}
                </div>
              </section>
            ))}
            <ContactBox locale={locale} />
          </div>
        )}
      </article>

      <div className="pb-16" />
    </PageShell>
  );
}

// Build head meta tags + JSON-LD scripts for a given page.
export function buildHead(locale: Locale, routeKey: RouteKey) {
  const page = CONTENT[locale][routeKey];
  if (!page) return { meta: [], links: [], scripts: [] };
  const canonical = `${SITE_URL}${pathFor(routeKey, locale)}`;
  const altOther = `${SITE_URL}${alternateOf(routeKey, locale)}`;
  const altDefault = `${SITE_URL}${pathFor(routeKey, "en")}`;
  const baseTitle = page.seoTitle ?? page.title;
  const title = /·\s*Nexa$/.test(baseTitle) ? baseTitle : `${baseTitle} · Nexa`;
  const ogLocale = locale === "mk" ? "mk_MK" : "en_US";
  const ogLocaleAlt = locale === "mk" ? "en_US" : "mk_MK";
  const ogImage = `${SITE_URL}/nexa-logo-navbar.png`;
  const authorName = locale === "mk" ? AUTHOR_NAME_MK : AUTHOR_NAME_EN;

  const isHome = routeKey === "home";
  const isFaq = routeKey === "faq";
  const isContact = routeKey === "contact";
  const isPillarOrSub = !isHome && !isFaq && !isContact && routeKey !== "glossary" && routeKey !== "sources"
    && routeKey !== "privacy" && routeKey !== "terms" && routeKey !== "disclaimer" && routeKey !== "about";

  const scripts: Array<{ type: string; children: string }> = [];

  // BreadcrumbList on every non-home page
  if (!isHome) {
    const items: Array<{ name: string; item: string }> = [
      { name: t(locale, "nav.home"), item: `${SITE_URL}${pathFor("home", locale)}` },
    ];
    if (page.pillarFamily && page.pillarFamily !== routeKey) {
      items.push({
        name: t(locale, `nav.${page.pillarFamily}`),
        item: `${SITE_URL}${pathFor(page.pillarFamily as RouteKey, locale)}`,
      });
    }
    items.push({ name: page.title, item: canonical });
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.item,
        })),
      }),
    });
  }

  if (isHome) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "iplaw.nexa.mk — Intellectual Property Guide",
        url: canonical,
        inLanguage: locale,
        areaServed: { "@type": "Country", name: "North Macedonia" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Skopje",
          addressCountry: "MK",
        },
        publisher: { "@type": "Organization", name: "Nexa", url: "https://nexa.mk" },
        knowsAbout: [
          "Trademark law",
          "Patent law",
          "Industrial design",
          "Copyright",
          "Geographical indications",
          "IP enforcement",
        ],
      }),
    });
  }

  if (isPillarOrSub) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.title,
        description: page.seoDescription,
        inLanguage: locale,
        image: ogImage,
        author: { "@type": "Person", name: authorName, url: AUTHOR_URL },
        publisher: {
          "@type": "Organization",
          name: "Nexa",
          url: "https://nexa.mk",
          logo: { "@type": "ImageObject", url: ogImage },
        },
        datePublished: page.lastReviewed ?? "2026-05-16",
        dateModified: page.lastReviewed ?? "2026-05-16",
        mainEntityOfPage: canonical,
      }),
    });
  }

  if (isFaq) {
    const groups = locale === "mk" ? FAQ_MK : FAQ_EN;
    const qa = groups.flatMap((g) =>
      g.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    );
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: qa,
      }),
    });
  }

  if (isContact) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: canonical,
        inLanguage: locale,
        publisher: { "@type": "Organization", name: "Nexa", url: "https://nexa.mk" },
      }),
    });
  }

  // hreflang link tags for all alternate locales of this route
  const links = [
    { rel: "canonical", href: canonical },
    { rel: "alternate", hrefLang: locale, href: canonical },
    { rel: "alternate", hrefLang: locale === "mk" ? "en" : "mk", href: altOther },
    { rel: "alternate", hrefLang: "x-default", href: altDefault },
  ];
  // Touch ROUTES so it's used (kept for future expansion to other locales)
  void ROUTES;

  return {
    meta: [
      { title },
      { name: "description", content: page.seoDescription },
      { name: "keywords", content: (page.keywords ?? []).join(", ") },
      { property: "og:title", content: title },
      { property: "og:description", content: page.seoDescription },
      { property: "og:type", content: isPillarOrSub ? "article" : "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "IP Law — part of the Nexa ecosystem" },
      { property: "og:locale", content: ogLocale },
      { property: "og:locale:alternate", content: ogLocaleAlt },
      { property: "og:site_name", content: "IP Law · Nexa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: page.seoDescription },
      { name: "twitter:image", content: ogImage },
    ],
    links,
    scripts,
  };
}
