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
  FAQItem,
  Pill,
} from "./SiteUI";
import { type Locale, type RouteKey, pathFor, alternateOf, SITE_URL } from "@/lib/routes";
import { t } from "@/lib/i18n";
import {
  CONTENT,
  GLOSSARY_MK,
  GLOSSARY_EN,
  FAQ_MK,
  FAQ_EN,
} from "@/lib/content";

export function PageShell({ locale, currentKey, children }: { locale: Locale; currentKey?: RouteKey; children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">{t(locale, "skip.toContent")}</a>
      <Header locale={locale} currentKey={currentKey} />
      <main id="main">{children}</main>
      <Footer locale={locale} />
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
          {page.lastReviewed && !isHome && (
            <div className="mt-5"><Pill tone="neutral">{t(locale, "pill.lastReviewed", { date: page.lastReviewed })}</Pill></div>
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
        {page.blocks.map((b, i) => (
          <BlockView key={i} block={b} locale={locale} page={page} />
        ))}

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
                <dt className="font-semibold text-[var(--color-ink-900)]">{g.term}</dt>
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

// Build head meta tags for a given page.
export function buildHead(locale: Locale, routeKey: RouteKey) {
  const page = CONTENT[locale][routeKey];
  if (!page) return { meta: [], links: [] };
  const canonical = `${SITE_URL}${pathFor(routeKey, locale)}`;
  const altOther = `${SITE_URL}${alternateOf(routeKey, locale)}`;
  const altDefault = `${SITE_URL}${pathFor(routeKey, "mk")}`;
  const title = page.seoTitle ?? `${page.title} | iplaw.nexa.mk`;
  return {
    meta: [
      { title },
      { name: "description", content: page.seoDescription },
      { name: "keywords", content: (page.keywords ?? []).join(", ") },
      { property: "og:title", content: title },
      { property: "og:description", content: page.seoDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:locale", content: locale === "mk" ? "mk_MK" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: locale, href: canonical },
      { rel: "alternate", hrefLang: locale === "mk" ? "en" : "mk", href: altOther },
      { rel: "alternate", hrefLang: "x-default", href: altDefault },
    ],
  };
}
