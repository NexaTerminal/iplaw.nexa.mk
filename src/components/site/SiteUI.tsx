import { Link } from "@tanstack/react-router";
import {
  Tag,
  Lightbulb,
  Shapes,
  Feather,
  MapPin,
  Shield,
  ChevronRight,
  CircleCheck,
  Circle,
  Info,
  TriangleAlert,
  Lightbulb as LightbulbTip,
  StickyNote,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { type Locale, type RouteKey, pathFor, alternateOf, SITE_EMAIL } from "@/lib/routes";
import { t } from "@/lib/i18n";
import {
  CONTACT_TOPICS_MK,
  CONTACT_TOPICS_EN,
  type PageContent,
  type Block,
} from "@/lib/content";

// ─── Header ──────────────────────────────────────────────────────────────────
const NAV_ITEMS: RouteKey[] = [
  "what-is-ip",
  "trademark",
  "patent",
  "industrial-design",
  "copyright",
  "geographical-indications",
  "glossary",
  "faq",
  "contact",
];

export function Header({ locale, currentKey }: { locale: Locale; currentKey?: RouteKey }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-[var(--color-ink-200)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="https://nexa.mk"
            aria-label={t(locale, "header.skipToNexa")}
            className="flex items-center shrink-0"
          >
            <img
              src="/nexa-logo-navbar.png"
              alt="Nexa"
              width={88}
              height={32}
              className="h-8 w-auto"
            />
          </a>
          <span aria-hidden="true" className="text-[var(--color-ink-300)]">/</span>
          <Link
            to={pathFor("home", locale)}
            aria-label={t(locale, "header.thisSiteHome")}
            className="flex items-baseline gap-1 min-w-0"
          >
            <span className="font-bold text-[var(--color-ink-900)] tracking-tight text-base sm:text-lg truncate">iplaw</span>
            <span className="text-[var(--color-ink-500)] text-xs sm:text-sm">.nexa.mk</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-1 text-sm" aria-label="Primary">
          {NAV_ITEMS.slice(0, 6).map((k) => (
            <Link
              key={k}
              to={pathFor(k, locale)}
              className={`px-3 py-2 rounded-md text-[var(--color-ink-700)] hover:text-[var(--color-brand-700)] hover:bg-[var(--color-brand-50)] transition-colors ${
                currentKey === k ? "text-[var(--color-brand-700)] font-medium" : ""
              }`}
            >
              {t(locale, `nav.${k}`)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} currentKey={currentKey} />
          <Link
            to={pathFor("contact", locale)}
            className="hidden sm:inline-flex h-10 items-center px-4 rounded-lg bg-[var(--color-brand-600)] text-white text-sm font-medium hover:bg-[var(--color-brand-700)] transition-colors"
          >
            {t(locale, "cta.contact")}
          </Link>
          <button
            className="lg:hidden p-2 rounded-md text-[var(--color-ink-700)]"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[var(--color-ink-200)] bg-white" aria-label="Mobile">
          <ul className="max-w-6xl mx-auto px-6 py-3 grid gap-1 text-sm">
            {NAV_ITEMS.map((k) => (
              <li key={k}>
                <Link
                  to={pathFor(k, locale)}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-[var(--color-ink-700)] hover:bg-[var(--color-brand-50)]"
                >
                  {t(locale, `nav.${k}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function LanguageSwitcher({ locale, currentKey }: { locale: Locale; currentKey?: RouteKey }) {
  const otherHref = currentKey ? alternateOf(currentKey, locale) : pathFor("home", locale === "mk" ? "en" : "mk");
  return (
    <div className="inline-flex rounded-md ring-1 ring-[var(--color-ink-200)] overflow-hidden text-xs font-medium" role="group" aria-label={t(locale, "lang.switch")}>
      <Link
        to={locale === "mk" ? "/mk" : otherHref}
        className={`px-2.5 py-1.5 ${locale === "mk" ? "bg-[var(--color-brand-600)] text-white" : "bg-white text-[var(--color-ink-700)]"}`}
      >
        MK
      </Link>
      <Link
        to={locale === "en" ? "/en" : otherHref}
        className={`px-2.5 py-1.5 ${locale === "en" ? "bg-[var(--color-brand-600)] text-white" : "bg-white text-[var(--color-ink-700)]"}`}
      >
        EN
      </Link>
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
const ECOSYSTEM_LINKS: { href: string; key: string }[] = [
  { href: "https://nexa.mk", key: "footer.eco.nexa" },
  { href: "https://samodaprasham.mk", key: "footer.eco.samodaprasham" },
  { href: "https://immigration.mk", key: "footer.eco.immigration" },
  { href: "https://macedoniancitizenship.mk", key: "footer.eco.citizenship" },
  { href: "https://company.nexa.mk", key: "footer.eco.company" },
  { href: "https://topics.nexa.mk", key: "footer.eco.topics" },
];

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--color-ink-200)] bg-white">
      {/* Per-page legal disclaimer (E.1) */}
      <div className="bg-[var(--color-ink-50)] border-b border-[var(--color-ink-200)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5">
          <p className="text-xs italic text-[var(--color-ink-600)] leading-relaxed">
            {t(locale, "footer.disclaimer")}{" "}
            <a
              href="https://mba.org.mk/index.php/mk/imenik-advokati/imenik-aktivni-advokati"
              target="_blank"
              rel="noopener"
              className="text-[var(--color-brand-700)] hover:underline"
            >
              {t(locale, "footer.disclaimer.linkText")}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* Col 1: About this site */}
        <div>
          <a href="https://nexa.mk" aria-label="Nexa">
            <img src="/nexa-logo-navbar.png" alt="Nexa" width={88} height={32} className="h-8 w-auto" />
          </a>
          <div className="mt-3 font-bold text-[var(--color-ink-900)] text-base">iplaw.nexa.mk</div>
          <p className="mt-2 text-[var(--color-ink-600)]">{t(locale, "footer.ecosystem.intro")}</p>
          <Link
            to={pathFor("about", locale)}
            className="mt-3 inline-block text-[var(--color-brand-700)] hover:underline"
          >
            {t(locale, "nav.about")} →
          </Link>
          <a
            href="https://nexa.mk/for-professionals"
            target="_blank"
            rel="noopener"
            className="mt-2 block text-xs text-[var(--color-ink-600)] hover:text-[var(--color-brand-700)]"
          >
            {t(locale, "professionals.cta")} →
          </a>
        </div>

        {/* Col 2: Pillars */}
        <FooterCol heading={t(locale, "footer.col.pillars")} items={[
          ["trademark", t(locale, "nav.trademark")],
          ["patent", t(locale, "nav.patent")],
          ["industrial-design", t(locale, "nav.industrial-design")],
          ["copyright", t(locale, "nav.copyright")],
          ["geographical-indications", t(locale, "nav.geographical-indications")],
          ["enforcement", t(locale, "nav.enforcement")],
        ]} locale={locale} />

        {/* Col 3: Ecosystem */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-ink-500)] font-semibold">
            {t(locale, "footer.col.ecosystem")}
          </h3>
          <ul className="mt-3 space-y-2">
            {ECOSYSTEM_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-[var(--color-ink-700)] hover:text-[var(--color-brand-700)]"
                >
                  {t(locale, l.key)} <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Legal + Contact */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-[var(--color-ink-500)] font-semibold">
            {t(locale, "footer.col.legal")}
          </h3>
          <ul className="mt-3 space-y-2">
            {(["privacy", "terms", "disclaimer", "about", "contact"] as const).map((k) => (
              <li key={k}>
                <Link to={pathFor(k as RouteKey, locale)} className="text-[var(--color-ink-700)] hover:text-[var(--color-brand-700)]">
                  {t(locale, `nav.${k}`)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://mba.org.mk/index.php/mk/imenik-advokati/imenik-aktivni-advokati"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-[var(--color-ink-700)] hover:text-[var(--color-brand-700)]"
              >
                {t(locale, "footer.mba")}
              </a>
            </li>
          </ul>
          <h3 className="mt-6 text-xs uppercase tracking-widest text-[var(--color-ink-500)] font-semibold">
            {t(locale, "footer.contact.heading")}
          </h3>
          <ul className="mt-3 space-y-1 text-[var(--color-ink-700)]">
            <li><a href="mailto:info@nexa.mk" className="hover:text-[var(--color-brand-700)]">info@nexa.mk</a></li>
            <li>{t(locale, "footer.contact.address")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-ink-200)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-ink-500)]">
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <span>{t(locale, "footer.copyright", { year })} — {t(locale, "footer.ecosystem")}.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://ippo.gov.mk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[var(--color-brand-700)]">
              {t(locale, "footer.external.ippo")} <ExternalLink size={12} />
            </a>
            <a href="https://nexa.mk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[var(--color-brand-700)]">
              {t(locale, "footer.poweredBy")} <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, items, locale }: { heading: string; items: [RouteKey, string][]; locale: Locale }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-[var(--color-ink-500)] font-semibold">{heading}</h3>
      <ul className="mt-3 space-y-2">
        {items.map(([k, label]) => (
          <li key={k}>
            <Link to={pathFor(k, locale)} className="text-[var(--color-ink-700)] hover:text-[var(--color-brand-700)]">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Pillar metadata (icons for PathwayCards) ────────────────────────────────
const PILLAR_ICON: Record<string, ReactNode> = {
  "trademark": <Tag size={22} />,
  "patent": <Lightbulb size={22} />,
  "industrial-design": <Shapes size={22} />,
  "copyright": <Feather size={22} />,
  "geographical-indications": <MapPin size={22} />,
  "enforcement": <Shield size={22} />,
};

const PILLAR_BLURB_MK: Record<string, { title: string; desc: string; badge?: string }> = {
  "trademark": { title: "Трговска марка", desc: "Заштитете го името, логото и знакот на вашиот бизнис.", badge: "10 години" },
  "patent": { title: "Патент", desc: "Заштитете технички пронајдок.", badge: "20 години" },
  "industrial-design": { title: "Индустриски дизајн", desc: "Заштитете го надворешниот изглед на производот.", badge: "до 25 години" },
  "copyright": { title: "Авторско право", desc: "Автоматска заштита — без регистрација.", badge: "живот + 70" },
  "geographical-indications": { title: "Географски ознаки", desc: "Заштитете назив поврзан со подрачје." },
  "enforcement": { title: "Заштита и царина", desc: "Што да правите кога правата ви се повредени." },
};
const PILLAR_BLURB_EN: Record<string, { title: string; desc: string; badge?: string }> = {
  "trademark": { title: "Trademark", desc: "Protect your brand name, logo, and signs.", badge: "10 years" },
  "patent": { title: "Patent", desc: "Protect a technical invention.", badge: "20 years" },
  "industrial-design": { title: "Industrial design", desc: "Protect a product's external appearance.", badge: "up to 25 years" },
  "copyright": { title: "Copyright", desc: "Automatic protection — no registration.", badge: "life + 70" },
  "geographical-indications": { title: "Geographical indications", desc: "Protect a name linked to an area." },
  "enforcement": { title: "Enforcement & customs", desc: "What to do when your rights are infringed." },
};

export function PathwayCard({
  locale,
  k,
}: {
  locale: Locale;
  k: "trademark" | "patent" | "industrial-design" | "copyright" | "geographical-indications" | "enforcement";
}) {
  const b = (locale === "mk" ? PILLAR_BLURB_MK : PILLAR_BLURB_EN)[k];
  return (
    <Link
      to={pathFor(k, locale)}
      className="group relative block bg-white rounded-xl ring-1 ring-[var(--color-ink-200)] p-6 transition-all hover:ring-[var(--color-brand-300)] hover:-translate-y-0.5"
    >
      <div className="w-11 h-11 rounded-lg bg-[var(--color-brand-50)] text-[var(--color-brand-700)] flex items-center justify-center">
        {PILLAR_ICON[k]}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink-900)]">{b.title}</h3>
      <p className="mt-1.5 text-sm text-[var(--color-ink-600)] leading-relaxed">{b.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        {b.badge && <Pill tone="brand">{b.badge}</Pill>}
        <ChevronRight size={18} className="text-[var(--color-ink-400)] group-hover:text-[var(--color-brand-600)] ml-auto" />
      </div>
    </Link>
  );
}

// ─── Small UI atoms ──────────────────────────────────────────────────────────
export function Pill({ tone = "neutral", children }: { tone?: "neutral" | "brand" | "success" | "warning"; children: ReactNode }) {
  const map = {
    neutral: "bg-[var(--color-ink-100)] text-[var(--color-ink-700)]",
    brand: "bg-[var(--color-brand-50)] text-[var(--color-brand-700)]",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
  } as const;
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${map[tone]}`}>{children}</span>;
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl ring-1 ring-[var(--color-ink-200)] p-5">
      <div className="text-3xl font-bold text-[var(--color-brand-700)]">{value}</div>
      <div className="mt-1 text-sm text-[var(--color-ink-600)] leading-snug">{label}</div>
    </div>
  );
}

export function KeyFacts({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3 my-6">
      {items.map((s, i) => (
        <div key={i} className="bg-white rounded-lg ring-1 ring-[var(--color-ink-200)] p-4 text-sm text-[var(--color-ink-700)]">{s}</div>
      ))}
    </div>
  );
}

export function Callout({
  tone,
  title,
  children,
}: {
  tone: "info" | "warning" | "note" | "tip";
  title?: string;
  children: ReactNode;
}) {
  const map = {
    info: { bg: "bg-[var(--color-brand-50)]", border: "border-[var(--color-brand-600)]", icon: <Info size={18} className="text-[var(--color-brand-700)]" /> },
    warning: { bg: "bg-amber-50", border: "border-amber-600", icon: <TriangleAlert size={18} className="text-amber-700" /> },
    note: { bg: "bg-[var(--color-ink-100)]", border: "border-[var(--color-ink-400)]", icon: <StickyNote size={18} className="text-[var(--color-ink-600)]" /> },
    tip: { bg: "bg-emerald-50", border: "border-emerald-600", icon: <LightbulbTip size={18} className="text-emerald-700" /> },
  } as const;
  const s = map[tone];
  return (
    <aside className={`${s.bg} border-l-4 ${s.border} rounded-r-md p-4 my-6 flex gap-3`}>
      <div className="shrink-0 mt-0.5">{s.icon}</div>
      <div>
        {title && <div className="font-semibold text-[var(--color-ink-900)] mb-1">{title}</div>}
        <div className="text-sm text-[var(--color-ink-700)] leading-relaxed">{children}</div>
      </div>
    </aside>
  );
}

export function DocumentChecklist({ items }: { items: { label: string; required: boolean; note?: string }[] }) {
  return (
    <ul className="my-6 grid gap-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 bg-white rounded-lg ring-1 ring-[var(--color-ink-200)] p-3.5">
          {it.required ? (
            <CircleCheck size={20} className="text-[var(--color-brand-600)] shrink-0 mt-0.5" aria-label="required" />
          ) : (
            <Circle size={20} className="text-[var(--color-ink-300)] shrink-0 mt-0.5" aria-label="optional" />
          )}
          <div className="text-sm">
            <div className="text-[var(--color-ink-900)] font-medium">{it.label}</div>
            {it.note && <div className="text-[var(--color-ink-500)] text-xs mt-0.5">{it.note}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function FeeTable({ title, caption, headers, rows }: { title?: string; caption?: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6">
      {title && <h3 className="text-lg font-semibold text-[var(--color-ink-900)] mb-1">{title}</h3>}
      {caption && <p className="text-xs text-[var(--color-ink-500)] mb-2">{caption}</p>}
      <div className="overflow-x-auto rounded-xl ring-1 ring-[var(--color-ink-200)] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[var(--color-ink-50)] text-left">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2.5 font-semibold text-[var(--color-ink-700)] text-xs uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className="border-t border-[var(--color-ink-200)] hover:bg-[var(--color-ink-50)]">
                {r.map((c, ci) => (
                  <td key={ci} className="px-4 py-2.5 text-[var(--color-ink-700)]">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── FAQ accordion ───────────────────────────────────────────────────────────
export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-ink-200)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-medium text-[var(--color-ink-900)]">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--color-ink-500)] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-5 pr-8 text-sm text-[var(--color-ink-700)] leading-relaxed">{a}</div>}
    </div>
  );
}

// ─── Contact box / Sibling cards ─────────────────────────────────────────────
export function ContactBox({ locale }: { locale: Locale }) {
  return (
    <div className="mt-10 rounded-2xl bg-[var(--color-brand-50)] ring-1 ring-[var(--color-brand-200)] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <div className="flex-1">
        <div className="font-semibold text-[var(--color-ink-900)] text-lg">{t(locale, "common.contactBox.title")}</div>
        <p className="text-sm text-[var(--color-ink-700)] mt-1">{t(locale, "common.contactBox.body")}</p>
      </div>
      <Link
        to={pathFor("contact", locale)}
        className="inline-flex h-11 items-center px-5 rounded-lg bg-[var(--color-brand-600)] text-white text-sm font-medium hover:bg-[var(--color-brand-700)]"
      >
        {t(locale, "common.contactBox.cta")} <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  );
}

export function SiblingRow({ locale, exclude }: { locale: Locale; exclude?: string }) {
  const pillars: Array<"trademark" | "patent" | "industrial-design" | "copyright" | "geographical-indications" | "enforcement"> = [
    "trademark",
    "patent",
    "industrial-design",
    "copyright",
    "geographical-indications",
    "enforcement",
  ];
  const visible = pillars.filter((p) => p !== exclude);
  return (
    <section className="mt-12 pt-10 border-t border-[var(--color-ink-200)]">
      <h2 className="text-xs uppercase tracking-widest text-[var(--color-ink-500)] font-semibold mb-4">
        {t(locale, "common.siblings")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((p) => (
          <PathwayCard key={p} locale={locale} k={p} />
        ))}
      </div>
    </section>
  );
}

// ─── Block renderer (used by PageRenderer) ───────────────────────────────────
export function BlockView({ block, locale, page }: { block: Block; locale: Locale; page: PageContent }) {
  switch (block.kind) {
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3 id={slugify(block.text)}>{block.text}</h3>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
    case "ol":
      return <ol>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ol>;
    case "callout":
      return <Callout tone={block.tone} title={block.title}>{block.text}</Callout>;
    case "checklist":
      return <DocumentChecklist items={block.items} />;
    case "fees":
      return <FeeTable title={block.title} caption={block.caption} headers={block.headers} rows={block.rows} />;
    case "keyfacts":
      return <KeyFacts items={block.items} />;
    case "link":
      return (
        <p>
          <Link to={block.href} className="inline-flex items-center gap-1 text-[var(--color-action)] hover:text-[var(--color-action-hover)]">
            {block.label} <ChevronRight size={14} />
          </Link>
        </p>
      );
    case "whenPro":
      return (
        <div className="mt-6">
          <h2>{t(locale, "common.whenPro")}</h2>
          <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
        </div>
      );
    case "contactBox":
      return <ContactBox locale={locale} />;
    case "siblings":
      return <SiblingRow locale={locale} exclude={page.pillarFamily ?? undefined} />;
  }
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\u0400-\u04ff]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

// ─── Contact form (UI only) ──────────────────────────────────────────────────
export function ContactForm({ locale }: { locale: Locale }) {
  const topics = locale === "mk" ? CONTACT_TOPICS_MK : CONTACT_TOPICS_EN;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  return (
    <form
      className="bg-white rounded-2xl shadow-md ring-1 ring-[var(--color-ink-200)] p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        if (fd.get("hp_address")) return; // honeypot
        if (!consent) {
          setError(t(locale, "form.consent.full"));
          return;
        }
        const msg = String(fd.get("message") ?? "");
        if (msg.length < 30) {
          setError(t(locale, "form.message.help"));
          return;
        }
        setError(null);
        setSent(true);
      }}
    >
      {sent ? (
        <div className="text-center py-8">
          <CircleCheck size={36} className="text-emerald-600 mx-auto" />
          <h3 className="mt-3 text-lg font-semibold text-[var(--color-ink-900)]">{t(locale, "form.success.title")}</h3>
          <p className="mt-1 text-sm text-[var(--color-ink-600)]">{t(locale, "form.success.body")}</p>
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t(locale, "form.name")} required>
              <input name="name" required minLength={2} maxLength={80} className={inputCls} />
            </Field>
            <Field label={t(locale, "form.email")} required>
              <input type="email" name="email" required className={inputCls} />
            </Field>
            <Field label={`${t(locale, "form.phone")} ${t(locale, "form.phone.optional")}`}>
              <input type="tel" name="phone" className={inputCls} />
            </Field>
            <Field label={t(locale, "form.topic")} required>
              <select name="topic" required defaultValue="" className={inputCls}>
                <option value="" disabled>{t(locale, "form.topic.placeholder")}</option>
                {topics.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>
          </div>
          <Field label={t(locale, "form.message")} required hint={t(locale, "form.message.help")}>
            <textarea name="message" required minLength={30} maxLength={4000} rows={6} className={inputCls} />
          </Field>
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-[var(--color-ink-50)] p-3 ring-1 ring-[var(--color-ink-200)]">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={consent}
              onChange={(e) => setConsent(e.currentTarget.checked)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-xs text-[var(--color-ink-700)] leading-relaxed">
              {t(locale, "form.consent.full")}{" "}
              <Link to={pathFor("privacy", locale)} className="text-[var(--color-brand-700)] hover:underline">
                {t(locale, "nav.privacy")}
              </Link>
              .
            </label>
          </div>
          {/* honeypot */}
          <input name="hp_address" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          {error && <div role="alert" className="mt-3 text-sm text-red-700">{error}</div>}
          <p className="mt-3 text-xs text-[var(--color-ink-500)]">{t(locale, "form.demo")}</p>
          <button
            type="submit"
            disabled={!consent}
            aria-disabled={!consent}
            className="mt-5 inline-flex h-11 w-full sm:w-auto items-center justify-center px-6 rounded-lg bg-[var(--color-brand-600)] text-white text-sm font-semibold hover:bg-[var(--color-brand-700)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t(locale, "form.submit")}
          </button>
        </>
      )}
    </form>
  );
}

const inputCls =
  "mt-1 block w-full rounded-lg border border-[var(--color-ink-200)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-300)] focus:border-[var(--color-brand-500)]";

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: ReactNode }) {
  return (
    <label className="block mt-4 first:mt-0">
      <span className="text-sm font-medium text-[var(--color-ink-800)]">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-[var(--color-ink-500)] mt-1 block">{hint}</span>}
    </label>
  );
}

// ─── Ecosystem ribbon (home hero CTA, B.2) ───────────────────────────────────
export function EcosystemRibbon({ locale }: { locale: Locale }) {
  return (
    <a
      href="https://nexa.mk"
      target="_blank"
      rel="noopener"
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-50)] px-4 py-2 text-sm font-medium text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-200)] hover:bg-[var(--color-brand-100)]"
    >
      <img src="/nexa-logo-navbar.png" alt="" width={20} height={20} className="h-5 w-auto" />
      {t(locale, "ecosystem.cta")} <ChevronRight size={16} />
    </a>
  );
}

// ─── Related topics block (B.3) ──────────────────────────────────────────────
export function RelatedTopics({ locale, category }: { locale: Locale; category?: string }) {
  const url = category
    ? `https://topics.nexa.mk?category=${encodeURIComponent(category)}`
    : "https://topics.nexa.mk";
  return (
    <section className="mt-10 rounded-2xl bg-[var(--color-ink-50)] ring-1 ring-[var(--color-ink-200)] p-6">
      <h2 className="text-xs uppercase tracking-widest text-[var(--color-ink-500)] font-semibold">
        {t(locale, "related.heading")}
      </h2>
      <p className="mt-2 text-sm text-[var(--color-ink-700)]">
        {locale === "mk"
          ? "Експертски кратки одговори за интелектуална сопственост, водени од професионалци во Nexa мрежата."
          : "Short expert answers on intellectual property, written by professionals in the Nexa network."}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="mt-3 inline-flex items-center gap-1 text-[var(--color-brand-700)] hover:underline text-sm font-medium"
      >
        {t(locale, "related.browse")}
      </a>
    </section>
  );
}

// ─── TL;DR block (GEO D.1) ───────────────────────────────────────────────────
export function TldrBlock({ locale, text }: { locale: Locale; text: string }) {
  return (
    <aside className="my-6 rounded-xl bg-[var(--color-brand-50)] ring-1 ring-[var(--color-brand-200)] p-5">
      <div className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-700)]">
        {t(locale, "tldr.heading")}
      </div>
      <p className="mt-2 text-base text-[var(--color-ink-800)] leading-relaxed font-medium">{text}</p>
    </aside>
  );
}

// ─── Author byline (GEO D.2) ─────────────────────────────────────────────────
const AUTHOR_MK = { name: "Мартин Бошкоски", title: "правен експерт" };
const AUTHOR_EN = { name: "Martin Boshkoski", title: "legal expert" };

export function AuthorByline({ locale, reviewed }: { locale: Locale; reviewed?: string }) {
  const a = locale === "mk" ? AUTHOR_MK : AUTHOR_EN;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--color-ink-600)]">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-[var(--color-brand-600)] text-white flex items-center justify-center text-xs font-bold">
          {a.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
        <span>
          <span className="font-medium text-[var(--color-ink-800)]">{a.name}</span>{" "}
          <span className="text-[var(--color-ink-500)]">· {a.title}</span>
        </span>
      </div>
      {reviewed && (
        <span className="text-[var(--color-ink-500)]">· {t(locale, "author.reviewed")}: {reviewed}</span>
      )}
    </div>
  );
}

// ─── Cookie consent banner (GA4 consent-mode v2) ────────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "nexa-cookie-consent";

export function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      if (stored === "granted") {
        window.gtag?.("consent", "update", { analytics_storage: "granted" });
        return;
      }
      if (stored === "denied") return;
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    window.gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-2xl ring-1 ring-[var(--color-ink-200)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex-1 text-sm text-[var(--color-ink-700)]">
          <div id="cookie-banner-title" className="font-semibold text-[var(--color-ink-900)] mb-1">
            {t(locale, "consent.banner.title")}
          </div>
          <p>
            {t(locale, "consent.banner.body")}{" "}
            <Link to={pathFor("privacy", locale)} className="text-[var(--color-brand-700)] hover:underline">
              {t(locale, "consent.banner.more")}
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => decide(false)}
            className="inline-flex h-10 items-center px-4 rounded-lg ring-1 ring-[var(--color-ink-300)] text-sm font-medium text-[var(--color-ink-700)] hover:bg-[var(--color-ink-50)]"
          >
            {t(locale, "consent.banner.reject")}
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="inline-flex h-10 items-center px-4 rounded-lg bg-[var(--color-brand-600)] text-white text-sm font-medium hover:bg-[var(--color-brand-700)]"
          >
            {t(locale, "consent.banner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactSidebar({ locale }: { locale: Locale }) {
  const isMk = locale === "mk";
  return (
    <aside className="bg-white rounded-2xl ring-1 ring-[var(--color-ink-200)] p-6 text-sm">
      <h3 className="font-semibold text-[var(--color-ink-900)] mb-3">{isMk ? "Контакт-податоци" : "Contact details"}</h3>
      <dl className="space-y-3">
        <div>
          <dt className="text-xs uppercase tracking-wider text-[var(--color-ink-500)]">{isMk ? "Е-маил" : "Email"}</dt>
          <dd><a href={`mailto:${SITE_EMAIL}`} className="text-[var(--color-action)] hover:underline">{SITE_EMAIL}</a></dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-[var(--color-ink-500)]">{isMk ? "Адреса" : "Address"}</dt>
          <dd className="text-[var(--color-ink-700)]">{isMk ? "Скопје, Северна Македонија" : "Skopje, North Macedonia"}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-[var(--color-ink-500)]">{isMk ? "Работно време" : "Hours"}</dt>
          <dd className="text-[var(--color-ink-700)]">{isMk ? "Пон–Пет, 09:00–17:00" : "Mon–Fri, 09:00–17:00"}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-[var(--color-ink-500)]">{isMk ? "Одговор" : "Response"}</dt>
          <dd className="text-[var(--color-ink-700)]">{isMk ? "Во рок од 24 часа (раб. денови)" : "Within 24 hours (working days)"}</dd>
        </div>
      </dl>
    </aside>
  );
}
