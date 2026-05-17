// Structured content registry. Pages are described as data; the <PageRenderer>
// turns them into MK/EN routes with consistent SEO + components.
import type { Locale, RouteKey } from "./routes";

export type Block =
  | { kind: "h2"; id?: string; text: string }
  | { kind: "h3"; id?: string; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "callout"; tone: "info" | "warning" | "note" | "tip"; title?: string; text: string }
  | {
      kind: "checklist";
      items: { label: string; required: boolean; note?: string }[];
    }
  | {
      kind: "fees";
      title?: string;
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | { kind: "keyfacts"; items: string[] }
  | { kind: "link"; href: string; label: string }
  | { kind: "whenPro"; items: string[] }
  | { kind: "contactBox" }
  | { kind: "siblings" }; // renders pillar siblings

export type PageContent = {
  routeKey: RouteKey;
  title: string;
  seoTitle?: string;
  seoDescription: string;
  keywords?: string[];
  h1: string;
  eyebrow?: string;
  lede?: string;
  breadcrumbs?: { label: string; key?: RouteKey }[];
  hero?: "home" | "pillar" | "default";
  // pillarFamily — for sibling navigator + breadcrumbs at the bottom of sub-pages
  pillarFamily?: "trademark" | "patent" | "industrial-design" | "copyright";
  blocks: Block[];
  tldr?: string;
  lastReviewed?: string;
};

const LAST_REVIEWED = "2026-05-16";

// ─────────────────────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────────────────────

const homeMk: PageContent = {
  routeKey: "home",
  title: "Интелектуална сопственост во Македонија — водич",
  seoTitle: "Интелектуална сопственост во Македонија | iplaw.nexa.mk",
  seoDescription:
    "Практичен двојазичен водич за заштита на трговска марка, патент, индустриски дизајн и авторско право во Македонија. Постапки, такси, рокови и контакт.",
  keywords: [
    "интелектуална сопственост",
    "трговска марка",
    "патент",
    "индустриски дизајн",
    "авторско право",
    "ДЗИС",
    "Македонија",
  ],
  eyebrow: "ВОДИЧ ПО ИНТЕЛЕКТУАЛНА СОПСТВЕНОСТ",
  h1: "Заштитете го она што го создавате — јасно, чекор по чекор.",
  lede:
    "Бесплатен двојазичен водич за заштита на трговска марка, патент, индустриски дизајн и авторско право во Република Северна Македонија. Содржини базирани на актуелниот Закон за индустриска сопственост и Законот за авторското право и сродните права.",
  hero: "home",
  blocks: [
    { kind: "h2", text: "Како функционира заштитата на интелектуалната сопственост" },
    {
      kind: "p",
      text:
        "Правата од индустриска сопственост — патент, индустриски дизајн, трговска марка, ознака на потеклото и географска ознака — се стекнуваат пред Државниот завод за индустриска сопственост (ДЗИС). Авторското право се стекнува без формална регистрација, во моментот кога делото е создадено и фиксирано во опиплива форма.",
    },
    {
      kind: "p",
      text:
        "Сите четири основни области имаат свои постапки, такси и рокови. Овој водич ги опишува сите чекори: што се пријавува, кои документи се потребни, колку чини, колку трае постапката, и кои се најчестите грешки.",
    },
    {
      kind: "p",
      text:
        "На крајот од секоја страница ќе најдете контакт-форма. Вашата порака стигнува до тимот на Nexa на info@nexa.mk, кој потоа ве упатува до соодветен стручен.",
    },
    { kind: "h2", text: "Зошто овој водич" },
    {
      kind: "ul",
      items: [
        "Базирано на закон. Секоја страница цитира конкретен член од Законот за индустриска сопственост или Законот за авторското право.",
        "Двојазично. Целата содржина постои на македонски и англиски јазик — корисно за домашни и странски подносители.",
        "Без агенда. Ова е јавен ресурс. Кога ви треба професионалец, контактирајте нé преку формата подолу — ќе ве упатиме до соодветен стручен.",
      ],
    },
    { kind: "contactBox" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const homeEn: PageContent = {
  routeKey: "home",
  title: "Intellectual Property in Macedonia — a guide",
  seoTitle: "Intellectual Property in Macedonia | iplaw.nexa.mk",
  seoDescription:
    "Practical bilingual guide to trademark, patent, industrial design, and copyright protection in North Macedonia. Procedures, fees, timelines, and contact.",
  keywords: [
    "intellectual property",
    "trademark",
    "patent",
    "industrial design",
    "copyright",
    "IPPO",
    "North Macedonia",
  ],
  eyebrow: "A GUIDE TO INTELLECTUAL PROPERTY",
  h1: "Protect what you create — clearly, step by step.",
  lede:
    "A free bilingual guide to trademark, patent, industrial design, and copyright protection in the Republic of North Macedonia. Content grounded in the Law on Industrial Property and the Law on Copyright and Related Rights.",
  hero: "home",
  blocks: [
    { kind: "h2", text: "How IP protection works" },
    {
      kind: "p",
      text:
        "Industrial property rights — patent, industrial design, trademark, designation of origin, and geographical indication — are obtained from the State Office of Industrial Property (IPPO, ДЗИС). Copyright is acquired without formal registration, the moment the work is created and fixed in a tangible form.",
    },
    {
      kind: "p",
      text:
        "All four core areas have their own procedures, fees, and timelines. This guide explains every step: what is registered, what documents are required, how much it costs, how long it takes, and which mistakes to avoid.",
    },
    {
      kind: "p",
      text:
        "At the end of each page you will find a contact form. Your message reaches the Nexa team at info@nexa.mk, who will refer you to the appropriate expert.",
    },
    { kind: "h2", text: "Why this guide" },
    {
      kind: "ul",
      items: [
        "Grounded in statute. Every page cites the relevant article of the Law on Industrial Property or the Law on Copyright and Related Rights.",
        "Bilingual. All content exists in Macedonian and English — useful for domestic and foreign applicants.",
        "No agenda. This is a public resource. If you need a professional, write through the contact form below and we will refer you to the right expert.",
      ],
    },
    { kind: "contactBox" },
  ],
  lastReviewed: LAST_REVIEWED,
};

// ─────────────────────────────────────────────────────────────────────────────
// WHAT IS IP
// ─────────────────────────────────────────────────────────────────────────────

const whatIsIpMk: PageContent = {
  routeKey: "what-is-ip",
  title: "Што е интелектуална сопственост во Македонија",
  seoTitle: "Што е интелектуална сопственост | iplaw.nexa.mk",
  seoDescription:
    "Кратко објаснување на индустриската сопственост и авторското право во Македонија — кој ги издава правата, кои закони важат и кога треба да започнете.",
  h1: "Што е интелектуална сопственост во Македонија",
  lede:
    "Интелектуалната сопственост (ИС) ги опфаќа сите права кои штитат интелектуални творби и трговски знаци. Во Република Северна Македонија, овие права се регулирани главно со Законот за индустриска сопственост и Законот за авторското право и сродните права.",
  hero: "default",
  blocks: [
    { kind: "h2", text: "Два главни столба на интелектуалната сопственост" },
    {
      kind: "ul",
      items: [
        "Индустриска сопственост: патент, индустриски дизајн, трговска марка, географска ознака и ознака на потекло (чл. 2 од Законот за индустриска сопственост).",
        "Авторско право и сродни права: уметнички, литературни, музички, аудиовизуелни, компјутерски, фотографски и научни дела (чл. 1 и чл. 12 од Законот за авторското право).",
      ],
    },
    { kind: "h2", text: "Кој ги издава правата" },
    {
      kind: "ul",
      items: [
        "Државен завод за индустриска сопственост (ДЗИС / IPPO). Надлежен за патент, индустриски дизајн, трговска марка, географска ознака и ознака на потекло, како и за топографии на интегрални кола.",
        "Министерство за култура. Има политика и надзор над авторското право, но регистрација не е потребна — заштитата настанува со создавањето на делото.",
        "Царинска управа, Државен пазарен инспекторат и Министерство за внатрешни работи. Спроведуваат заштита и санкции при повреди.",
      ],
    },
    { kind: "h2", text: "Како е поврзана македонската заштита со меѓународната" },
    { kind: "p", text: "Македонија е членка на повеќе клучни договори:" },
    {
      kind: "ul",
      items: [
        "Парискa конвенција за заштита на индустриската сопственост (1883, со измени).",
        "Договор за соработка во областа на патентите (PCT).",
        "Мадридски договор и Мадридски протокол за меѓународно регистрирање на трговските марки.",
        "Договор за проширување на европските патенти со Европскиот патентен завод.",
        "Хашки договор за меѓународно пријавување на индустриски дизајн.",
        "Бернска конвенција за заштита на литературните и уметничките дела.",
        "ТРИПС спогодба на Светската трговска организација.",
      ],
    },
    { kind: "h2", text: "Кога треба да започнете" },
    {
      kind: "p",
      text:
        "Колку порано, толку подобро. Особено за трговските марки и индустриските дизајни — кој прв пододнесе пријава, прв стекнува право (принцип на првенство, чл. 178 од Законот за индустриска сопственост за трговските марки). Кај патент, претходно јавно обелоденување може да ја уништи новоста.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Совет",
      text:
        "Пред да поднесете пријава за трговска марка, проверете го јавниот регистар на ДЗИС и Madrid Monitor. Сличноста со порано пријавена или регистрирана марка е најчеста причина за одбивање.",
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Интелектуалната сопственост (ИС) во Македонија опфаќа индустриска сопственост (трговски марки, патенти, дизајн, географски ознаки) и авторско право. Регистрацијата ја води ДЗИС (ippo.gov.mk); авторското право е автоматско.",
  lastReviewed: LAST_REVIEWED,
};

const whatIsIpEn: PageContent = {
  routeKey: "what-is-ip",
  title: "What is intellectual property in Macedonia",
  seoTitle: "What is intellectual property | iplaw.nexa.mk",
  seoDescription:
    "A short overview of industrial property and copyright in Macedonia — who grants the rights, which laws apply, and when to start.",
  h1: "What is intellectual property in Macedonia",
  lede:
    "Intellectual property (IP) covers all rights that protect intellectual creations and commercial signs. In the Republic of North Macedonia, these rights are governed primarily by the Law on Industrial Property and the Law on Copyright and Related Rights.",
  hero: "default",
  blocks: [
    { kind: "h2", text: "Two main pillars of IP" },
    {
      kind: "ul",
      items: [
        "Industrial property: patent, industrial design, trademark, geographical indication, and designation of origin (Art. 2, Law on Industrial Property).",
        "Copyright and related rights: literary, artistic, musical, audiovisual, software, photographic, and scientific works (Arts. 1 and 12, Law on Copyright and Related Rights).",
      ],
    },
    { kind: "h2", text: "Who grants these rights" },
    {
      kind: "ul",
      items: [
        "State Office of Industrial Property (IPPO, ДЗИС). Competent for patents, industrial design, trademarks, geographical indications, and topographies of integrated circuits.",
        "Ministry of Culture. Has policy oversight of copyright, but no registration is required — protection arises on creation.",
        "Customs Administration, State Market Inspectorate, and Ministry of Interior. Handle enforcement and sanctions for infringement.",
      ],
    },
    { kind: "h2", text: "How Macedonian protection connects to international protection" },
    { kind: "p", text: "Macedonia is a party to several key treaties:" },
    {
      kind: "ul",
      items: [
        "Paris Convention for the Protection of Industrial Property (1883, as amended).",
        "Patent Cooperation Treaty (PCT).",
        "Madrid Agreement and Madrid Protocol on the international registration of trademarks.",
        "Extension Agreement with the European Patent Organisation (EPO).",
        "Hague Agreement on the international deposit of industrial designs.",
        "Berne Convention for the Protection of Literary and Artistic Works.",
        "TRIPS Agreement of the World Trade Organization.",
      ],
    },
    { kind: "h2", text: "When to start" },
    {
      kind: "p",
      text:
        "The sooner the better. Especially for trademarks and industrial designs — the first to file is the first to acquire the right (priority principle, Art. 178, Law on Industrial Property, for trademarks). For patents, prior public disclosure can destroy novelty.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Tip",
      text:
        "Before filing a trademark application, check the IPPO public register and Madrid Monitor. Similarity to a prior application or registration is the most common ground for refusal.",
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Intellectual property (IP) in North Macedonia covers industrial property (trademarks, patents, designs, geographical indications) and copyright. Registration is handled by IPPO (ippo.gov.mk); copyright arises automatically.",
  lastReviewed: LAST_REVIEWED,
};

// ─────────────────────────────────────────────────────────────────────────────
// TRADEMARK pillar + sub-pages
// ─────────────────────────────────────────────────────────────────────────────

const tmMk: PageContent = {
  routeKey: "trademark",
  pillarFamily: "trademark",
  title: "Трговска марка во Македонија — постапка, такси и заштита",
  seoTitle: "Трговска марка во Македонија | iplaw.nexa.mk",
  seoDescription:
    "Како се регистрира трговска марка во Македонија. Постапка, документи, такси, рокови, обновување и меѓународна заштита преку Мадридскиот систем.",
  h1: "Трговска марка во Македонија — постапка, такси и заштита",
  hero: "pillar",
  lede:
    "Трговската марка е знак што го разликува вашите стоки или услуги од оние на конкурентите. Во Македонија се регистрира пред Државниот завод за индустриска сопственост (ДЗИС), важи десет години и може да се обновува неограничено. Оваа страница ги опишува сите чекори, такси, рокови и најчести грешки, во согласност со Законот за индустриска сопственост.",
  blocks: [
    { kind: "keyfacts", items: ["Важност 10 години", "Опозиција 3 месеци", "Такси ~19.400 МКД"] },
    { kind: "h2", text: "Што може да се заштити" },
    {
      kind: "p",
      text:
        "Со трговска марка се штити секој знак што може графички да се прикаже и што е подобен за разликување на стоките или услугите на еден учесник во прометот од стоките или услугите на друг учесник (чл. 175 од Законот за индустриска сопственост).",
    },
    { kind: "p", text: "Знакот може да биде:" },
    {
      kind: "ul",
      items: [
        "збор или комбинација на зборови;",
        "букви и бројки;",
        "слика, цртеж или лого;",
        "комбинации на бои;",
        "тродимензионални форми, вклучително форми на стоките или нивните пакувања;",
        "комбинации на сите наведени.",
      ],
    },
    {
      kind: "p",
      text:
        "Зборовите и буквите може да се напишат на кој било јазик и со кое било писмо (чл. 175 ст. 3).",
    },
    { kind: "h2", text: "Кој може да поднесе пријава" },
    {
      kind: "p",
      text:
        "Постапката за стекнување на право на трговска марка може да ја поведе правно и физичко лице (чл. 179 од Законот). Странски подносители задолжително поднесуваат преку овластен застапник за индустриска сопственост запишан во регистарот на ДЗИС.",
    },
    { kind: "h2", text: "Што содржи пријавата" },
    {
      kind: "checklist",
      items: [
        { label: "Барање за признавање на правото на трговска марка (образец TM-1)", required: true },
        { label: "Податоци за подносителот", required: true },
        { label: "Графички приказ на знакот", required: true },
        { label: "Список на стоки и услуги според Ничанската класификација", required: true },
        { label: "Полномошно ако пријавата ја поднесува застапник", required: true, note: "во тој случај" },
        { label: "Доказ за платена такса за пријавување", required: true },
      ],
    },
    { kind: "h2", text: "Постапката чекор по чекор" },
    {
      kind: "ol",
      items: [
        "Поднесување на пријавата. Подносителот или застапникот ја поднесува до ДЗИС.",
        "Формално испитување. ДЗИС проверува дали пријавата е комплетна. Ако е во ред, се впишува во регистарот на пријавите со датум на поднесување.",
        "Суштинско испитување. ДЗИС проверува постоење на апсолутни причини за одбивање (чл. 177).",
        "Објавување во Гласник. Пријавата се објавува во службеното гласило на ДЗИС. Од денот на објавувањето тече рок од 3 месеци за приговор од трети лица (чл. 142 ст. 1 тт. 1–6).",
        "Регистрација и издавање на исправа. Доколку нема приговор или приговорот биде отфрлен, по плаќање на пропишаните такси ДЗИС донесува решение за признавање на правото и издава исправа за трговската марка во рок до 6 месеци.",
      ],
    },
    {
      kind: "fees",
      title: "Постапка во временска линија",
      headers: ["Фаза", "Просечно времетраење"],
      rows: [
        ["Формално испитување", "1–3 месеци"],
        ["Суштинско испитување", "4–9 месеци"],
        ["Објавување во Гласник", "По завршеното испитување"],
        ["Опозициски рок", "3 месеци"],
        ["Регистрација и издавање на исправа", "до 6 месеци"],
        ["Вкупно, без приговор", "12–18 месеци"],
      ],
    },
    {
      kind: "fees",
      title: "Такси и трошоци",
      caption: "Износи од тарифата на ДЗИС; цели за информативна намена.",
      headers: ["Чекор", "Износ"],
      rows: [
        ["Такса за поднесување пријава", "480 МКД"],
        ["Такса за стекнување и одржување на трговска марка", "16.000 МКД"],
        ["Такса за објавување на регистрираната марка", "2.920 МКД"],
        ["Вкупно такси кон ДЗИС", "~19.400 МКД"],
        ["Хонорар на застапник (просечно за стандардна марка)", "400–600 EUR"],
        ["Вкупна пазарна цена (со застапник)", "750–900 EUR"],
      ],
    },
    { kind: "h2", text: "Апсолутни причини за одбивање" },
    {
      kind: "p",
      text:
        "Според чл. 177 од Законот, со трговска марка не може да се заштити знак кој, меѓу другото, е спротивен на јавниот поредок или моралот; не може графички да се прикаже; не е дистинктивен; означува само вид, намена или географско потекло; станал вообичаен во говорот; може да го доведе во заблуда просечниот потрошувач; содржи државни или религиозни симболи без дозвола.",
    },
    {
      kind: "p",
      text:
        "Знаците што не се дистинктивни може да станат регистрирани доколку подносителот докаже стекната дистинктивност преку долгогодишна употреба (чл. 177 ст. 2).",
    },
    { kind: "h2", text: "Релативни причини за одбивање" },
    {
      kind: "ul",
      items: [
        "идентичен со порано пријавена или регистрирана марка за исти стоки;",
        "идентичен или сличен со порано пријавена или регистрирана марка за исти или слични стоки и таа сличност може да создаде забуна;",
        "повредува право на лице чие име, презиме или лик е идентичен или сличен со пријавениот знак;",
        "идентичен или сличен со порано регистрирана марка со репутација во Македонија;",
        "повредува авторско право на трето лице.",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Совет",
      text: "Пред пријавување, направете преглед во јавните регистри: ippo.gov.mk, TMView и Madrid Monitor.",
    },
    { kind: "h2", text: "Важност и обновување" },
    {
      kind: "p",
      text:
        "Трговската марка важи 10 години од денот на поднесување на пријавата (чл. 211 ст. 1). Важноста може да се продолжува неограничен број пати, секогаш за период од по 10 години, под услов барањето за обновување да се поднесе во последната година од важноста, или најдоцна 9 месеци по истекот со плаќање на дополнителни такси.",
    },
    { kind: "link", href: "/mk/trgovska-marka/obnovuvanje", label: "Детална страница: Обновување" },
    { kind: "h2", text: "Меѓународна заштита — Мадридски систем" },
    {
      kind: "p",
      text:
        "Македонија е членка и на Мадридскиот договор и на Мадридскиот протокол. Со една пријава, преку ДЗИС до WIPO, може да се означат над 100 држави. Услов: постоечка национална пријава или регистрација во Македонија. Пет години постои зависност од националната марка („централен напад“).",
    },
    { kind: "link", href: "/mk/trgovska-marka/megunarodna-zashtita-madrid", label: "Детална страница: Мадридски систем" },
    {
      kind: "whenPro",
      items: [
        "Имате повеќе слични кандидати за марка и не сте сигурни кој е најдистинктивен.",
        "Веќе сте добиле решение за одбивање и треба да поднесете приговор или жалба.",
        "Треба да поднесете меѓународна пријава преку Мадридскиот систем.",
        "Имате повреда на марка и размислувате за царинска или судска заштита.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Трговска марка во Македонија се регистрира во ДЗИС, важи 10 години и се обновува неограничено. Постапката трае обично 8–14 месеци; основна такса започнува околу неколку илјади денари за една класа.",
  lastReviewed: LAST_REVIEWED,
};

const tmEn: PageContent = {
  routeKey: "trademark",
  pillarFamily: "trademark",
  title: "Trademark in Macedonia — procedure, fees, and protection",
  seoTitle: "Trademark in Macedonia | iplaw.nexa.mk",
  seoDescription:
    "How to register a trademark in Macedonia. Procedure, documents, fees, timelines, renewal, and international protection via the Madrid System.",
  h1: "Trademark in Macedonia — procedure, fees, and protection",
  hero: "pillar",
  lede:
    "A trademark is a sign that distinguishes your goods or services from those of competitors. In Macedonia, it is registered with the State Office of Industrial Property (IPPO), is valid for ten years, and can be renewed indefinitely. This page covers every step, fee, timeline, and common mistake, under the Law on Industrial Property.",
  blocks: [
    { kind: "keyfacts", items: ["Valid 10 years", "Opposition window 3 months", "Fees ~19,400 MKD"] },
    { kind: "h2", text: "What can be protected" },
    {
      kind: "p",
      text:
        "A trademark protects any sign that can be represented graphically and that is capable of distinguishing the goods or services of one undertaking from those of another (Art. 175, Law on Industrial Property).",
    },
    { kind: "p", text: "A sign may be:" },
    {
      kind: "ul",
      items: [
        "a word or combination of words;",
        "letters and numerals;",
        "an image, drawing, or logo;",
        "combinations of colors;",
        "three-dimensional forms, including the shape of goods or their packaging;",
        "combinations of the above.",
      ],
    },
    { kind: "p", text: "Words and letters may be written in any language and any script (Art. 175(3))." },
    { kind: "h2", text: "Who may file" },
    {
      kind: "p",
      text:
        "Any natural or legal person may file an application (Art. 179). Foreign applicants must file through an industrial property representative entered in the IPPO register.",
    },
    { kind: "h2", text: "What the application contains" },
    {
      kind: "checklist",
      items: [
        { label: "Request for recognition of trademark right (form TM-1)", required: true },
        { label: "Applicant details", required: true },
        { label: "Graphical representation of the sign", required: true },
        { label: "List of goods and services per the Nice Classification", required: true },
        { label: "Power of attorney, if filed via representative", required: true, note: "in that case" },
        { label: "Proof of payment of the filing fee", required: true },
      ],
    },
    { kind: "h2", text: "Procedure step by step" },
    {
      kind: "ol",
      items: [
        "Filing. The applicant or representative files with IPPO.",
        "Formal examination. IPPO checks completeness; if OK, the application is entered in the trademark applications register with the filing date.",
        "Substantive examination. IPPO examines absolute grounds for refusal (Art. 177).",
        "Publication in the Official Bulletin. From the publication date, a 3-month opposition window opens (Art. 142(1)(1–6)).",
        "Registration and certificate. If no opposition is filed or the opposition is rejected, IPPO issues the registration decision and the certificate within 6 months, upon payment of fees.",
      ],
    },
    {
      kind: "fees",
      title: "Procedure timeline",
      headers: ["Phase", "Average duration"],
      rows: [
        ["Formal examination", "1–3 months"],
        ["Substantive examination", "4–9 months"],
        ["Publication in Bulletin", "After examination"],
        ["Opposition window", "3 months"],
        ["Registration and certificate", "up to 6 months"],
        ["Total, no opposition", "12–18 months"],
      ],
    },
    {
      kind: "fees",
      title: "Fees and costs",
      caption: "Amounts from the IPPO tariff; for information only.",
      headers: ["Step", "Amount"],
      rows: [
        ["Filing fee", "480 MKD"],
        ["Acquisition and maintenance fee", "16,000 MKD"],
        ["Publication fee", "2,920 MKD"],
        ["Total IPPO fees", "~19,400 MKD"],
        ["Representative service fee (typical, standard mark)", "400–600 EUR"],
        ["Total market price (with representative)", "750–900 EUR"],
      ],
    },
    { kind: "h2", text: "Absolute grounds for refusal" },
    {
      kind: "p",
      text:
        "Under Art. 177, a trademark cannot protect a sign that, among other things, is contrary to public order or morality; cannot be represented graphically; is not distinctive; designates only the kind, purpose, or geographical origin of goods; has become customary in trade; is likely to deceive the average consumer; or contains state or religious symbols without authorization.",
    },
    {
      kind: "p",
      text:
        "Non-distinctive signs may still be registered if the applicant proves acquired distinctiveness through long-term use (Art. 177(2)).",
    },
    { kind: "h2", text: "Relative grounds for refusal" },
    {
      kind: "ul",
      items: [
        "identical to an earlier filed or registered mark for the same goods;",
        "identical or similar to an earlier filed or registered mark for identical or similar goods and that similarity is likely to confuse;",
        "infringes the rights of a person whose name, surname, or image is identical or similar to the applied sign;",
        "identical or similar to an earlier registered mark having reputation in Macedonia;",
        "infringes copyright of a third party.",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Tip",
      text: "Before filing, search the public registers: ippo.gov.mk, TMView, and Madrid Monitor.",
    },
    { kind: "h2", text: "Validity and renewal" },
    {
      kind: "p",
      text:
        "A trademark is valid for 10 years from the filing date (Art. 211(1)). Validity can be renewed an unlimited number of times, each time for a further 10 years, provided the renewal request is filed during the last year of validity, or no later than 9 months after expiration with payment of additional fees.",
    },
    { kind: "link", href: "/en/trademark/renewal", label: "Detailed page: Renewal" },
    { kind: "h2", text: "International protection — Madrid System" },
    {
      kind: "p",
      text:
        "Macedonia is party to both the Madrid Agreement and the Madrid Protocol. With one application filed through IPPO to WIPO, you can designate 100+ countries. Requirement: an existing national application or registration in Macedonia. For 5 years, the international mark depends on the national base (\"central attack\").",
    },
    { kind: "link", href: "/en/trademark/madrid-international-protection", label: "Detailed page: Madrid System" },
    {
      kind: "whenPro",
      items: [
        "You have several candidate marks and aren't sure which is most distinctive.",
        "You received a refusal decision and need to file an opposition response or appeal.",
        "You want to file an international application via Madrid.",
        "You face infringement and are considering customs or court action.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "A trademark in North Macedonia is registered at IPPO, lasts 10 years and is renewable indefinitely. The procedure typically takes 8–14 months; basic fees start at a few thousand denars for one class.",
  lastReviewed: LAST_REVIEWED,
};

// Helper: build a generic sub-page from beats (lighter copy, per spec allowance)
function subPage(
  key: RouteKey,
  family: PageContent["pillarFamily"],
  mk: { title: string; h1: string; lede: string; sections: { h: string; ps?: string[]; ul?: string[]; ol?: string[] }[] },
  en: { title: string; h1: string; lede: string; sections: { h: string; ps?: string[]; ul?: string[]; ol?: string[] }[] },
  fees?: { headers: string[]; rows: string[][] }
): [PageContent, PageContent] {
  const toBlocks = (s: typeof mk.sections): Block[] => {
    const out: Block[] = [];
    for (const sec of s) {
      out.push({ kind: "h2", text: sec.h });
      sec.ps?.forEach((p) => out.push({ kind: "p", text: p }));
      if (sec.ul) out.push({ kind: "ul", items: sec.ul });
      if (sec.ol) out.push({ kind: "ol", items: sec.ol });
    }
    if (fees) out.push({ kind: "fees", headers: fees.headers, rows: fees.rows });
    out.push({ kind: "siblings" });
    out.push({ kind: "contactBox" });
    return out;
  };
  return [
    {
      routeKey: key,
      pillarFamily: family,
      title: mk.title,
      seoTitle: `${mk.title} | iplaw.nexa.mk`,
      seoDescription: mk.lede.slice(0, 158),
      h1: mk.h1,
      lede: mk.lede,
      blocks: toBlocks(mk.sections),
      lastReviewed: LAST_REVIEWED,
    },
    {
      routeKey: key,
      pillarFamily: family,
      title: en.title,
      seoTitle: `${en.title} | iplaw.nexa.mk`,
      seoDescription: en.lede.slice(0, 158),
      h1: en.h1,
      lede: en.lede,
      blocks: toBlocks(en.sections),
      lastReviewed: LAST_REVIEWED,
    },
  ];
}

const [tmProcMk, tmProcEn] = subPage(
  "trademark/procedure",
  "trademark",
  {
    title: "Постапка за регистрација на трговска марка",
    h1: "Постапка за регистрација на трговска марка — детален водич",
    lede: "Деталeн преглед на петтe фази од постапката пред ДЗИС: образец TM-1, рокови за одговор на Office Action, Ничанска класификација и одговор на приговор.",
    sections: [
      {
        h: "Образец TM-1 и датум на поднесување",
        ps: [
          "Пријавата се поднесува на образец TM-1. Датумот на поднесување се одредува кога ДЗИС го прими комплетниот сет од минимални елементи: барање, податоци за подносителот, графички приказ и список на стоки/услуги.",
          "Приоритет од Парискa конвенција може да се повикува во рок од 6 месеци од прва пријава во член-земја.",
        ],
      },
      {
        h: "Ничанска класификација",
        ps: [
          "Стоките и услугите се групираат во класи 1–34 (стоки) и 35–45 (услуги). Совет: не „ловете“ класи. Опишете прецизно што правите — поширок список значи поголема такса и поголема изложеност на приговор.",
        ],
      },
      {
        h: "Графички приказ на знакот",
        ps: [
          "Прифатлив формат: PNG минимум 300 dpi, без сенки и без позадина. За марка во боја — назначете ги боите со Pantone или RGB.",
        ],
      },
      {
        h: "Одговор на барање за уредување (Office Action)",
        ps: [
          "ДЗИС може да побара уредување или дополнување. Рокот за одговор е обично 60 дена, со можност за продолжување под услови во Правилникот.",
        ],
      },
      {
        h: "Одговор на приговор",
        ps: [
          "Доколку трето лице поднесе приговор по објавувањето, подносителот добива рок од 60 дена за писмен одговор со докази (употреба, дистинктивност, отсуство на сличност).",
        ],
      },
    ],
  },
  {
    title: "Trademark registration procedure",
    h1: "Trademark registration procedure — full walkthrough",
    lede: "A detailed look at the five phases of the IPPO procedure: form TM-1, Office Action response deadlines, Nice Classification, and oppositions.",
    sections: [
      {
        h: "Form TM-1 and filing date",
        ps: [
          "The application is filed on form TM-1. The filing date is set when IPPO receives the minimum elements: the request, applicant details, a graphical representation, and a list of goods/services.",
          "Paris Convention priority can be claimed within 6 months of a first filing in a member country.",
        ],
      },
      {
        h: "Nice Classification",
        ps: [
          "Goods and services are grouped in classes 1–34 (goods) and 35–45 (services). Tip: don't \"hunt\" classes. Describe precisely what you do — a broader list means higher fees and more exposure to opposition.",
        ],
      },
      {
        h: "Graphical representation of the sign",
        ps: [
          "Accepted format: PNG at minimum 300 dpi, no shadows, no background. For color marks, designate the colors using Pantone or RGB references.",
        ],
      },
      {
        h: "Office Action response",
        ps: [
          "IPPO may request amendments or clarifications. The typical response deadline is 60 days, with possible extensions under the Rulebook.",
        ],
      },
      {
        h: "Opposition response",
        ps: [
          "If a third party files an opposition after publication, the applicant has 60 days to respond in writing with evidence (use, distinctiveness, lack of similarity).",
        ],
      },
    ],
  }
);

const [tmFeesMk, tmFeesEn] = subPage(
  "trademark/fees",
  "trademark",
  {
    title: "Такси и трошоци за трговска марка",
    h1: "Такси и трошоци за трговска марка",
    lede: "Преглед на националните такси на ДЗИС, надоместоци на застапник и таксите за меѓународна заштита преку Мадридскиот систем.",
    sections: [
      {
        h: "Национални такси (ДЗИС)",
        ps: ["Износите подолу се водечки; точната такса зависи од конкретниот случај. Проверете ја тарифата на ДЗИС."],
      },
      {
        h: "Хонорар на застапник",
        ps: [
          "Хонорарите се посебни за пребарување, за пријавување, за приговор, и за обновување. Просечен распон за стандардна марка: 400–600 EUR.",
        ],
      },
      {
        h: "Мадридски такси (WIPO)",
        ps: [
          "Основна такса (црно-бел знак): 653 CHF. Знак во боја: 903 CHF. Дополнителни такси по класа над 3: 100 CHF по класа. Дополнителни такси за секоја определена држава: 100 CHF (или индивидуална за држави со индивидуални такси).",
        ],
      },
    ],
  },
  {
    title: "Trademark fees and costs",
    h1: "Trademark fees and costs",
    lede: "Overview of IPPO national fees, representative fees, and Madrid System international fees.",
    sections: [
      {
        h: "National fees (IPPO)",
        ps: ["Amounts below are indicative; the exact fee depends on the case. Check the IPPO tariff."],
      },
      {
        h: "Representative fees",
        ps: [
          "Separate fees apply for search, filing, opposition, and renewal. Typical range for a standard mark: 400–600 EUR.",
        ],
      },
      {
        h: "Madrid fees (WIPO)",
        ps: [
          "Basic fee (B&W mark): 653 CHF. Color mark: 903 CHF. Supplementary fee per class above 3: 100 CHF. Designation fee per country: 100 CHF (or individual fee for countries with individual fees).",
        ],
      },
    ],
  },
  {
    headers: ["Чекор / Step", "МКД / MKD", "EUR (информативно / approx.)"],
    rows: [
      ["Поднесување пријава / Filing", "480", "~8"],
      ["Стекнување и одржување / Acquisition & maintenance", "16.000", "~260"],
      ["Објавување / Publication", "2.920", "~48"],
      ["Секоја дополнителна класа / Each additional class", "~4.000", "~65"],
      ["Обновување за 10 години / 10-year renewal", "~15.000", "~245"],
      ["Грациски период (6 месеци) / Grace period (6 months)", "~7.500", "~120"],
    ],
  }
);

const [tmRenewMk, tmRenewEn] = subPage(
  "trademark/renewal",
  "trademark",
  {
    title: "Обновување на трговска марка",
    h1: "Обновување на трговска марка",
    lede: "Како и кога се обновува регистрираната трговска марка во Македонија — рокови, грациски период, такси и совети за работа со портфолио.",
    sections: [
      {
        h: "Кога се обновува",
        ps: [
          "Барањето за обновување се поднесува во последната година од важноста. Дополнителен грациски рок од 9 месеци по истекот е дозволен со плаќање дополнителни такси (чл. 211 ст. 2).",
        ],
      },
      { h: "Колку чини обновувањето", ps: ["Стандардна такса ~15.000 МКД; грациска такса дополнителни ~7.500 МКД."] },
      { h: "Како се обновува", ps: ["Образец TM-3, потврда за плаќање, и за странски подносители — преку овластен застапник."] },
      {
        h: "Што се случува ако пропуштите рок",
        ps: ["Ако не поднесете во грацискиот период, марката се брише од регистарот и треба нова пријава со нов датум на првенство."],
      },
      {
        h: "Совети за управување со портфолио",
        ul: [
          "Внесете го датумот за обновување во CRM или подсетник.",
          "Обновете 3–6 месеци пред истекот.",
          "Користете го моментот за подобрување на спецификацијата (Ничанска класификација).",
        ],
      },
    ],
  },
  {
    title: "Trademark renewal",
    h1: "Trademark renewal",
    lede: "How and when to renew a registered Macedonian trademark — deadlines, grace period, fees, and portfolio tips.",
    sections: [
      {
        h: "When to renew",
        ps: [
          "The renewal request is filed during the last year of validity. An additional 9-month grace period after expiration is allowed with payment of additional fees (Art. 211(2)).",
        ],
      },
      { h: "How much it costs", ps: ["Standard fee ~15,000 MKD; grace fee ~7,500 MKD on top."] },
      { h: "How to renew", ps: ["Form TM-3, proof of payment; foreign applicants file through a registered representative."] },
      {
        h: "What happens if you miss the deadline",
        ps: ["If you miss the grace period the mark is removed from the register and you must file a new application with a new priority date."],
      },
      {
        h: "Portfolio management tips",
        ul: [
          "Set the renewal date in a CRM or reminder system.",
          "Renew 3–6 months ahead of expiration.",
          "Use the renewal to clean up the Nice Classification specification.",
        ],
      },
    ],
  }
);

const [tmOpMk, tmOpEn] = subPage(
  "trademark/opposition",
  "trademark",
  {
    title: "Приговор против трговска марка",
    h1: "Приговор против пријава за трговска марка",
    lede: "Кој може да поднесе приговор, во кој рок, што содржи и како тече постапката пред ДЗИС, со жалба пред Управниот суд.",
    sections: [
      {
        h: "Кој може да поднесе приговор",
        ul: [
          "Носители на порано регистрирана идентична или слична марка.",
          "Лица со порано стекнати права (фирма, име, авторско право).",
          "Носители на добропозната марка во смисла на чл. 6bis од Парискa конвенција.",
        ],
      },
      { h: "Рок", ps: ["3 месеци од објавувањето во Гласник (чл. 142 ст. 1)."] },
      {
        h: "Што содржи приговорот",
        ul: ["Идентификација на подносителот.", "Основ за приговор со цитати на одредбите.", "Докази (потврди, регистрации, употреба).", "Доказ за платена такса."],
      },
      {
        h: "Постапка по приговор",
        ol: [
          "ДЗИС го прифаќа приговорот и го испраќа на подносителот на пријавата.",
          "Подносителот доставува одговор во рок од 60 дена.",
          "Можна реплика и противреплика.",
          "ДЗИС донесува одлука: уважен, делумно уважен или отфрлен.",
        ],
      },
      { h: "Жалба", ps: ["Против одлуката се поднесува жалба пред Управниот суд во рок од 30 дена."] },
      {
        h: "Совети",
        ul: ["Документирајте употреба и репутација.", "Подгответе јасна споредба на знаците и стоките/услугите.", "Барајте претходна стручна анализа на сличноста."],
      },
    ],
  },
  {
    title: "Opposition to a trademark",
    h1: "Opposition to a trademark application",
    lede: "Who can oppose, by when, what the opposition contains, and how the procedure runs at IPPO, with appeal to the Administrative Court.",
    sections: [
      {
        h: "Who may oppose",
        ul: [
          "Owners of an earlier registered identical or similar mark.",
          "Holders of earlier acquired rights (company name, personal name, copyright).",
          "Owners of well-known marks under Art. 6bis of the Paris Convention.",
        ],
      },
      { h: "Deadline", ps: ["3 months from publication in the Bulletin (Art. 142(1))."] },
      {
        h: "What the opposition contains",
        ul: ["Opponent identification.", "Grounds with citations.", "Evidence (registrations, use).", "Proof of fee payment."],
      },
      {
        h: "Opposition procedure",
        ol: [
          "IPPO admits the opposition and serves it on the applicant.",
          "Applicant submits a response within 60 days.",
          "Optional reply and rejoinder.",
          "IPPO decides: upheld, partially upheld, or rejected.",
        ],
      },
      { h: "Appeal", ps: ["An appeal to the Administrative Court must be filed within 30 days."] },
      {
        h: "Tips",
        ul: ["Document use and reputation.", "Prepare a clear sign-by-sign and goods-by-goods comparison.", "Get a professional similarity analysis early."],
      },
    ],
  }
);

const [tmMadridMk, tmMadridEn] = subPage(
  "trademark/madrid",
  "trademark",
  {
    title: "Меѓународна заштита — Мадридски систем",
    h1: "Мадридски систем — меѓународна заштита на трговска марка",
    lede: "Со една пријава преку ДЗИС до WIPO се заштитува марката во над 100 држави. Услови, такси, „централен напад“ и кога Мадрид е вистинскиот избор.",
    sections: [
      {
        h: "Што е Мадридскиот систем",
        ps: ["Единствен меѓународен систем под управа на WIPO. Македонија е членка и на Договорот и на Протоколот."],
      },
      { h: "Услов: базна национална марка", ps: ["Потребна е постоечка национална пријава или регистрација во Македонија."] },
      {
        h: "Документи и образец",
        ul: ["Образец MTM-4 преку ДЗИС.", "Список на определени држави.", "Превод (англиски, француски или шпански).", "Доказ за платени такси кон WIPO и ДЗИС."],
      },
      {
        h: "Како се пресметуваат таксите",
        ps: ["Основна такса + дополнителни такси по класа над 3 + такса по определена држава (или индивидуална такса за држави како SAD, Јапонија)."],
      },
      {
        h: "„Централен напад“ — зависност 5 години",
        ps: ["Доколку националната база падне во првите 5 години, паѓа и меѓународната регистрација. По истекот од 5 години — независност."],
      },
      {
        h: "Кога Мадрид е добар избор",
        ul: ["За 3+ држави често е поевтино од директни национални пријави.", "За 1–2 држави, директно е честопати поедноставно и поевтино."],
      },
    ],
  },
  {
    title: "International protection — Madrid System",
    h1: "Madrid System — international trademark protection",
    lede: "One application through IPPO to WIPO protects the mark in 100+ countries. Conditions, fees, central attack, and when Madrid is the right choice.",
    sections: [
      { h: "What the Madrid System is", ps: ["A single WIPO-administered system. Macedonia is party to both the Agreement and the Protocol."] },
      { h: "Requirement: base national mark", ps: ["An existing national application or registration in Macedonia is required."] },
      {
        h: "Documents and form",
        ul: ["Form MTM-4 via IPPO.", "List of designated countries.", "Translation (English, French, or Spanish).", "Proof of paid WIPO and IPPO fees."],
      },
      {
        h: "How fees are calculated",
        ps: ["Basic fee + supplementary per class above 3 + per-country designation fee (or individual fee for countries like the US, Japan)."],
      },
      {
        h: "Central attack — 5-year dependency",
        ps: ["If the national base falls in the first 5 years, the international registration falls too. After 5 years, independence."],
      },
      {
        h: "When Madrid is a good choice",
        ul: ["For 3+ countries it's often cheaper than direct national filings.", "For 1–2 countries, direct national filings are often simpler and cheaper."],
      },
    ],
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// PATENT pillar + sub-pages
// ─────────────────────────────────────────────────────────────────────────────

const patentMk: PageContent = {
  routeKey: "patent",
  pillarFamily: "patent",
  title: "Патент во Македонија — постапка, такси и заштита",
  seoTitle: "Патент во Македонија | iplaw.nexa.mk",
  seoDescription:
    "Како се регистрира патент во Македонија: национална пријава, PCT, проширување на европски патент, обновување и трошоци. Базирано на Законот за индустриска сопственост.",
  h1: "Патент во Македонија — постапка, такси и заштита",
  hero: "pillar",
  lede:
    "Со патент се штити пронајдок — техничко решение на технички проблем, кое е ново, инвентивно и индустриски применливо. Во Македонија, патентот се стекнува пред ДЗИС, а може да се добие и преку PCT или преку проширување на европски патент. Важноста е 20 години од денот на поднесување на пријавата (чл. 74 ст. 1 од Законот за индустриска сопственост).",
  blocks: [
    { kind: "keyfacts", items: ["Важност 20 години", "Три начини на стекнување", "Годишни такси за одржување"] },
    { kind: "h2", text: "Што може да се патентира" },
    {
      kind: "p",
      text:
        "Пронајдок е решение на технички проблем што се однесува на производ, постапка или материја која е резултат на одредена постапка (чл. 3 од Законот). За да се патентира, мора да исполнува три услови:",
    },
    {
      kind: "ul",
      items: [
        "Новост — нема исто или слично решение во состојбата на техниката.",
        "Инвентивен чекор — не произлегува на очигледен начин за стручно лице.",
        "Индустриска применливост — може да се произведе или употреби во индустријата.",
      ],
    },
    { kind: "h2", text: "Што не може да се патентира" },
    {
      kind: "ul",
      items: [
        "Откритија, научни теории и математички методи.",
        "Естетски творби.",
        "Шеми, правила и методи за вршење ментални активности, играње игри или вршење бизнис.",
        "Компјутерски програми сами по себе (го штити авторското право).",
        "Презентирање на информации.",
        "Пронајдоци чијашто комерцијална употреба би била спротивна на јавниот поредок или моралот.",
        "Постапки за лекување, операции или дијагностицирање на луѓе и животни.",
        "Растителни и животински видови и чисто биолошки постапки.",
      ],
    },
    { kind: "h2", text: "Три начина да се добие патент во Македонија" },
    {
      kind: "ol",
      items: [
        "Национална пријава пред ДЗИС.",
        "PCT (Договор за соработка во областа на патентите) — една меѓународна пријава преку WIPO, потоа национална фаза во Македонија во рок од 31 месец.",
        "Проширување на европски патент — доколку имате европски патент (EPO), можете да го проширите неговото дејство на Македонија по Договорот за проширување.",
      ],
    },
    { kind: "h2", text: "Што содржи националната пријава" },
    {
      kind: "checklist",
      items: [
        { label: "Барање за признавање на патент (образец P-1), А4, во три примероци", required: true },
        { label: "Опис на пронајдокот", required: true },
        { label: "Едно или повеќе патентни барања", required: true },
        { label: "Апстракт", required: true },
        { label: "Цртежи (доколку се потребни)", required: false },
        { label: "Превод на македонски ако пријавата е во странски јазик", required: true },
        { label: "Доказ за платена такса", required: true },
        { label: "Полномошно (ако се поднесува преку застапник)", required: true, note: "во тој случај" },
        { label: "Документ за приоритет (ако се повикувате на Париска конвенција)", required: false },
      ],
    },
    { kind: "h2", text: "Постапка чекор по чекор" },
    {
      kind: "ol",
      items: [
        "Поднесување. Електронски преку e-prijava.ippo.gov.mk или хартиено.",
        "Формално испитување. Проверка на комплетност на документите.",
        "Објавување. Пријавата се објавува по истекот на 18 месеци од денот на најраното првенство.",
        "Барање за суштинско испитување. Подносителот треба да го поднесе барањето во определен рок (обично 6 години од поднесувањето).",
        "Суштинско испитување. ДЗИС испитува дали се исполнети условите за патентирање.",
        "Одлука. Признавање или одбивање. По признавањето — такса за издавање исправа и почеток на годишните такси за одржување.",
      ],
    },
    { kind: "h2", text: "Важност и одржување" },
    {
      kind: "ul",
      items: [
        "20 години од денот на поднесување на пријавата (чл. 74 ст. 1).",
        "Продолжување до 5 години за медицински производи или производи за заштита на растенија преку Сертификат за дополнителна заштита (чл. 75).",
        "За патенти признаени врз основа на скратената постапка (чл. 60) — 10 години.",
        "Годишни такси за одржување (чл. 84). Неплаќање доведува до престанок на патентот.",
      ],
    },
    {
      kind: "fees",
      title: "Такси и трошоци",
      caption: "Информативно — точните износи се од тарифата на ДЗИС.",
      headers: ["Чекор", "МКД (приближно)"],
      rows: [
        ["Такса за поднесување пријава", "1.500–3.000"],
        ["Такса за објавување", "3.000–5.000"],
        ["Такса за суштинско испитување", "8.000–15.000"],
        ["Такса за издавање исправа", "3.000"],
        ["Годишна такса (1–5 година)", "1.500–3.000 годишно"],
        ["Годишна такса (6–10 година)", "4.000–8.000 годишно"],
        ["Годишна такса (11–20 година)", "10.000+ годишно"],
        ["Хонорар на застапник", "1.000–3.000 EUR"],
      ],
    },
    {
      kind: "whenPro",
      items: [
        "Имате пронајдок и не сте сигурни дали е патентибилен.",
        "Треба да напишете патентни барања — неспретно напишано барање може да не штити ништо.",
        "Имате европски патент и сакате да го валидирате во Македонија.",
        "Имате повреда на патент.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Патентот штити технички пронајдок 20 години од денот на пријавата. Се регистрира во ДЗИС; за меѓународна заштита се користат PCT и Европската патентна конвенција (EPC).",
  lastReviewed: LAST_REVIEWED,
};

const patentEn: PageContent = {
  routeKey: "patent",
  pillarFamily: "patent",
  title: "Patent in Macedonia — procedure, fees, and protection",
  seoTitle: "Patent in Macedonia | iplaw.nexa.mk",
  seoDescription:
    "How to obtain a patent in Macedonia: national application, PCT, European patent extension, maintenance, and costs. Grounded in the Law on Industrial Property.",
  h1: "Patent in Macedonia — procedure, fees, and protection",
  hero: "pillar",
  lede:
    "A patent protects an invention — a technical solution to a technical problem that is new, involves an inventive step, and is industrially applicable. In Macedonia, a patent is acquired through IPPO, and can also be obtained via PCT or by extending a European patent. Term: 20 years from the filing date (Art. 74(1), Law on Industrial Property).",
  blocks: [
    { kind: "keyfacts", items: ["20-year term", "Three filing routes", "Annual maintenance fees"] },
    { kind: "h2", text: "What can be patented" },
    {
      kind: "p",
      text:
        "An invention is a solution to a technical problem relating to a product, a process, or a substance produced by a process (Art. 3). To be patentable, it must meet three conditions:",
    },
    {
      kind: "ul",
      items: [
        "Novelty — no identical or similar solution exists in the state of the art.",
        "Inventive step — not obvious to a person skilled in the art.",
        "Industrial applicability — can be produced or used in industry.",
      ],
    },
    { kind: "h2", text: "What cannot be patented" },
    {
      kind: "ul",
      items: [
        "Discoveries, scientific theories, mathematical methods.",
        "Aesthetic creations.",
        "Schemes, rules, and methods for mental acts, games, or business.",
        "Computer programs as such (protected by copyright).",
        "Presentations of information.",
        "Inventions whose commercial exploitation would be contrary to public order or morality.",
        "Methods for treatment, surgery, or diagnosis of humans or animals.",
        "Plant and animal varieties and essentially biological processes.",
      ],
    },
    { kind: "h2", text: "Three ways to get a Macedonian patent" },
    {
      kind: "ol",
      items: [
        "National application before IPPO.",
        "PCT — one international application via WIPO, then national-phase entry in Macedonia within 31 months.",
        "European patent extension — if you have a granted European patent, extend it to Macedonia under the Extension Agreement.",
      ],
    },
    { kind: "h2", text: "What a national application contains" },
    {
      kind: "checklist",
      items: [
        { label: "Request for grant of patent (form P-1), A4, in three copies", required: true },
        { label: "Description of the invention", required: true },
        { label: "One or more patent claims", required: true },
        { label: "Abstract", required: true },
        { label: "Drawings (where needed)", required: false },
        { label: "Macedonian translation if the application is in a foreign language", required: true },
        { label: "Proof of payment of fees", required: true },
        { label: "Power of attorney (if filed through a representative)", required: true, note: "in that case" },
        { label: "Priority document (if claiming Paris Convention priority)", required: false },
      ],
    },
    { kind: "h2", text: "Procedure step by step" },
    {
      kind: "ol",
      items: [
        "Filing — electronic via e-prijava.ippo.gov.mk or paper.",
        "Formal examination — completeness check.",
        "Publication — 18 months from earliest priority.",
        "Request for substantive examination — must be filed within the prescribed time (typically 6 years from filing).",
        "Substantive examination — IPPO examines patentability conditions.",
        "Decision — grant or refusal. Upon grant, certificate issuance fee and annual maintenance fees begin.",
      ],
    },
    { kind: "h2", text: "Term and maintenance" },
    {
      kind: "ul",
      items: [
        "20 years from filing date (Art. 74(1)).",
        "Up to 5 years extension for medicinal products or plant protection products via a Supplementary Protection Certificate (Art. 75).",
        "Patents granted under the short procedure (Art. 60) have a 10-year term.",
        "Annual maintenance fees (Art. 84). Non-payment causes lapse.",
      ],
    },
    {
      kind: "fees",
      title: "Fees and costs",
      caption: "Indicative — exact amounts are in the IPPO tariff.",
      headers: ["Step", "MKD (approx.)"],
      rows: [
        ["Filing fee", "1,500–3,000"],
        ["Publication fee", "3,000–5,000"],
        ["Substantive examination fee", "8,000–15,000"],
        ["Certificate issuance fee", "3,000"],
        ["Annual fee (years 1–5)", "1,500–3,000 per year"],
        ["Annual fee (years 6–10)", "4,000–8,000 per year"],
        ["Annual fee (years 11–20)", "10,000+ per year"],
        ["Representative fee", "1,000–3,000 EUR"],
      ],
    },
    {
      kind: "whenPro",
      items: [
        "You have an invention and aren't sure whether it's patentable.",
        "You need to draft patent claims — poorly drafted claims may protect nothing.",
        "You have a European patent and want to validate it in Macedonia.",
        "You face a patent infringement.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "A patent protects a technical invention for 20 years from the filing date. It is registered at IPPO; international protection is sought via PCT and the European Patent Convention (EPC).",
  lastReviewed: LAST_REVIEWED,
};

const [patentProcMk, patentProcEn] = subPage(
  "patent/procedure",
  "patent",
  {
    title: "Постапка за регистрација на патент",
    h1: "Постапка за регистрација на патент — детален водич",
    lede: "Деталeн преглед на постапката пред ДЗИС: образец P-1, рокови за барање на суштинско испитување, одговор на Office Action, амандмани на барањата.",
    sections: [
      { h: "Поднесување и формално испитување", ps: ["Електронско или хартиено поднесување; ДЗИС проверува комплетност и доделува датум на поднесување."] },
      { h: "Објавување по 18 месеци", ps: ["Пријавата автоматски се објавува по 18 месеци од најраното првенство, освен ако е повлечена пред тоа."] },
      { h: "Барање за суштинско испитување", ps: ["Подносителот мора да поднесе посебно барање во определен рок (обично до 6 години). Без барање — пријавата паѓа."] },
      {
        h: "Office Action и амандмани",
        ps: ["ДЗИС може да побара уредување на описот или барањата. Амандманите не смеат да воведуваат нова материја надвор од првобитната пријава."],
      },
      { h: "Одлука и објавување на патентот", ps: ["По признавањето, се плаќа такса за издавање исправа и започнуваат годишните такси."] },
    ],
  },
  {
    title: "Patent registration procedure",
    h1: "Patent registration procedure — full walkthrough",
    lede: "A detailed look at the IPPO procedure: form P-1, examination-request deadlines, Office Action handling, and claim amendments.",
    sections: [
      { h: "Filing and formal examination", ps: ["Electronic or paper filing; IPPO checks completeness and assigns the filing date."] },
      { h: "Publication at 18 months", ps: ["The application is automatically published 18 months from the earliest priority, unless withdrawn earlier."] },
      { h: "Request for substantive examination", ps: ["The applicant must file a separate request within the prescribed time (typically 6 years). No request — the application lapses."] },
      {
        h: "Office Actions and amendments",
        ps: ["IPPO may request amendments to the description or claims. Amendments must not introduce new matter beyond the original disclosure."],
      },
      { h: "Decision and grant publication", ps: ["On grant, the certificate issuance fee is paid and the annual maintenance fees begin."] },
    ],
  }
);

const [pctMk, pctEn] = subPage(
  "patent/pct",
  "patent",
  {
    title: "PCT — Договор за соработка во областа на патентите",
    h1: "PCT — патент во Македонија преку меѓународна пријава",
    lede: "Како се користи PCT за заштита во Македонија: меѓународна фаза (ISA, IPRP) и национална фаза во рок од 31 месец од најраното првенство.",
    sections: [
      { h: "Што е PCT", ps: ["PCT (Patent Cooperation Treaty) е меѓународен договор управуван од WIPO кој дозволува една пријава да се користи како основа за заштита во 150+ држави."] },
      { h: "Меѓународна фаза", ps: ["Меѓународно пребарување (ISA) и опционо меѓународно прелиминарно испитување (IPER). Резултатите: ISR и IPRP."] },
      { h: "Национална фаза во Македонија", ps: ["Влез најдоцна 31 месец од најраното првенство. Превод на македонски и плаќање такси."] },
      { h: "Кога PCT е добар избор", ul: ["Кога планирате заштита во повеќе држави.", "За одложување на одлуката за конкретни држави до 30 месеци."] },
    ],
  },
  {
    title: "PCT — Patent Cooperation Treaty",
    h1: "PCT — patent protection in Macedonia via international filing",
    lede: "How to use PCT to obtain protection in Macedonia: international phase (ISA, IPRP) and national-phase entry within 31 months from earliest priority.",
    sections: [
      { h: "What PCT is", ps: ["PCT is a WIPO-administered international treaty allowing one application to serve as a basis for protection in 150+ countries."] },
      { h: "International phase", ps: ["International search (ISA) and optional international preliminary examination (IPER). Outputs: ISR and IPRP."] },
      { h: "National phase in Macedonia", ps: ["Entry no later than 31 months from earliest priority. Macedonian translation and fees required."] },
      { h: "When PCT is a good choice", ul: ["When you plan protection in several countries.", "To defer the country-specific decision up to 30 months."] },
    ],
  }
);

const [epMk, epEn] = subPage(
  "patent/european-patent",
  "patent",
  {
    title: "Проширување на европски патент",
    h1: "Проширување на европски патент во Македонија",
    lede: "Македонија прима проширување на дејството на европски патент признаен од Европскиот патентен завод (EPO) по Договорот за проширување.",
    sections: [
      { h: "Кој може да поднесе", ps: ["Носител на европска патентна пријава или признаен европски патент."] },
      { h: "Рокови", ps: ["Барање за проширување мора да се поднесе во рок од 6 месеци од објавувањето на споменот за признавањето на европскиот патент."] },
      { h: "Превод и валидација", ps: ["Превод на македонски на патентните барања (и описот по правилата) и плаќање на таксите за валидација пред ДЗИС."] },
      { h: "Дејство", ps: ["Проширениот европски патент има исто дејство како национален македонски патент од денот на објавувањето."] },
    ],
  },
  {
    title: "European patent extension",
    h1: "Extension of a European patent to Macedonia",
    lede: "Macedonia accepts the extension of a European patent granted by the European Patent Office (EPO) under the Extension Agreement.",
    sections: [
      { h: "Who may file", ps: ["Holder of a European patent application or granted European patent."] },
      { h: "Deadlines", ps: ["The extension request must be filed within 6 months of publication of the mention of grant of the European patent."] },
      { h: "Translation and validation", ps: ["Macedonian translation of the claims (and description per the rules) and payment of validation fees at IPPO."] },
      { h: "Effect", ps: ["The extended European patent has the same effect as a national Macedonian patent from the publication date."] },
    ],
  }
);

const [spcMk, spcEn] = subPage(
  "patent/spc",
  "patent",
  {
    title: "Сертификат за дополнителна заштита (СДЗ)",
    h1: "Сертификат за дополнителна заштита (СДЗ) — продолжување на патентот",
    lede: "СДЗ продолжува заштитата на основниот патент до 5 години за медицински производи и производи за заштита на растенија, кога е потребна административна постапка за одобрување (чл. 75 ЗИС).",
    sections: [
      { h: "Кога важи", ul: ["Само за медицински производи и производи за заштита на растенија.", "Само кога е потребно административно одобрение пред пуштање во промет."] },
      { h: "Како се пресметува дополнителното времетраење", ps: ["Период еднаков на времето меѓу датумот на пријавата за основниот патент и првото одобрение за пуштање во промет, минус 5 години, до максимум 5 години."] },
      { h: "Образец и постапка", ps: ["Барање на образец P-6 во рок од 6 месеци од денот на издавање на првото одобрение."] },
    ],
  },
  {
    title: "Supplementary Protection Certificate (SPC)",
    h1: "Supplementary Protection Certificate (SPC) — extending a patent",
    lede: "An SPC extends the base patent by up to 5 years for medicinal and plant-protection products where pre-marketing administrative approval is required (Art. 75, Law on Industrial Property).",
    sections: [
      { h: "When it applies", ul: ["Only for medicinal and plant-protection products.", "Only where administrative approval is required before marketing."] },
      { h: "How additional duration is calculated", ps: ["Period equal to the time between the filing date of the base patent and the date of first marketing authorization, minus 5 years, up to a maximum of 5 years."] },
      { h: "Form and procedure", ps: ["File form P-6 within 6 months of the first marketing authorization."] },
    ],
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRIAL DESIGN pillar + sub-pages
// ─────────────────────────────────────────────────────────────────────────────

const designMk: PageContent = {
  routeKey: "industrial-design",
  pillarFamily: "industrial-design",
  title: "Индустриски дизајн во Македонија — постапка и заштита",
  seoTitle: "Индустриски дизајн во Македонија | iplaw.nexa.mk",
  seoDescription:
    "Како се заштитува индустриски дизајн во Македонија. Постапка пред ДЗИС, документи, важност 5 + до 25 години, и Хашки систем за меѓународна заштита.",
  h1: "Индустриски дизајн во Македонија — постапка, такси и заштита",
  hero: "pillar",
  lede:
    "Индустрискиот дизајн го штити надворешниот изглед на производот — линиите, контурите, боите, обликот, текстурата и материјалите, или нивната орнаментација (чл. 3 од Законот за индустриска сопственост). Заштитата важи 5 години од денот на поднесување на пријавата и може да се продолжува за периоди од по 5 години, но не повеќе од 25 години вкупно (чл. 172).",
  blocks: [
    { kind: "keyfacts", items: ["Почетна важност 5 години", "До 25 години со обновувања", "Хашки систем за меѓународна заштита"] },
    { kind: "h2", text: "Што се штити" },
    {
      kind: "p",
      text:
        "Со индустриски дизајн се штити нова форма на тело, слика, цртеж, контура, композиција на бои или нивна комбинација — дизајн (чл. 2 ст. 3). Производот мора да биде:",
    },
    {
      kind: "ul",
      items: [
        "Нов — да не е достапен на јавноста идентичен или сличен дизајн пред денот на поднесување (или приоритет).",
        "Индивидуален — да остава различен вкупен впечаток врз информираниот корисник во споредба со порано познати дизајни.",
      ],
    },
    { kind: "h2", text: "Кој може да поднесе" },
    { kind: "p", text: "Правни и физички лица. Странски подносители — преку овластен застапник." },
    { kind: "h2", text: "Што содржи пријавата" },
    {
      kind: "checklist",
      items: [
        { label: "Барање за признавање на индустриски дизајн (образец DI-1)", required: true },
        { label: "Податоци за подносителот", required: true },
        { label: "Приказ на дизајнот (фотографии или цртежи, до 7 погледи на ист дизајн)", required: true },
        { label: "Опис (доколку е потребен за разјаснување)", required: false },
        { label: "Полномошно (доколку се поднесува преку застапник)", required: true, note: "во тој случај" },
        { label: "Доказ за платена такса", required: true },
      ],
    },
    { kind: "h2", text: "Постапка" },
    {
      kind: "ol",
      items: ["Поднесување.", "Формално испитување.", "Објавување во Гласник.", "Опозициски рок.", "Регистрација и издавање исправа."],
    },
    { kind: "p", text: "Целата постапка обично трае 6–12 месеци." },
    { kind: "h2", text: "Важност и обновување" },
    {
      kind: "ul",
      items: [
        "Почетна важност 5 години од денот на пријавата (чл. 172 ст. 1).",
        "Може да се продолжува за периоди од по 5 години, но не повеќе од 25 години вкупно (чл. 172 ст. 2).",
        "Барање за продолжување се поднесува во последната година од важноста; може и во рок од 6 месеци по истекот, со плаќање дополнителна такса.",
      ],
    },
    { kind: "h2", text: "Меѓународна заштита — Хашки систем" },
    {
      kind: "p",
      text:
        "Една пријава преку WIPO за заштита во голем број држави. Македонија е членка на Хашкиот договор.",
    },
    { kind: "link", href: "/mk/industriski-dizajn/haski-sistem", label: "Детална страница: Хашки систем" },
    {
      kind: "whenPro",
      items: [
        "Имате производ и не сте сигурни дали изгледот е „нов“ во смисла на законот.",
        "Дизајнот веќе е јавно прикажан; имате ли уште можност за заштита.",
        "Меѓународна заштита преку Хашкиот систем.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Индустрискиот дизајн го штити надворешниот изглед на производот. Заштитата трае 5 години и се обновува до 25 години; меѓународна заштита преку Хашкиот систем.",
  lastReviewed: LAST_REVIEWED,
};

const designEn: PageContent = {
  routeKey: "industrial-design",
  pillarFamily: "industrial-design",
  title: "Industrial design in Macedonia — procedure and protection",
  seoTitle: "Industrial design in Macedonia | iplaw.nexa.mk",
  seoDescription:
    "How to protect industrial design in Macedonia. IPPO procedure, documents, 5-year initial term up to 25 years, and Hague System for international protection.",
  h1: "Industrial design in Macedonia — procedure, fees, and protection",
  hero: "pillar",
  lede:
    "Industrial design protects the external appearance of a product — lines, contours, colors, shape, texture, and materials, or their ornamentation (Art. 3, Law on Industrial Property). Protection is valid for 5 years from the filing date and may be renewed in 5-year increments up to a maximum of 25 years total (Art. 172).",
  blocks: [
    { kind: "keyfacts", items: ["Initial 5-year term", "Up to 25 years with renewals", "Hague System for international protection"] },
    { kind: "h2", text: "What is protected" },
    {
      kind: "p",
      text:
        "Industrial design protects a new shape of a body, image, drawing, contour, color composition or their combination (Art. 2(3)). The product must be:",
    },
    {
      kind: "ul",
      items: [
        "New — no identical or similar design has been made available to the public before the filing date (or priority date).",
        "Individual character — produces a different overall impression on the informed user compared to prior known designs.",
      ],
    },
    { kind: "h2", text: "Who may file" },
    { kind: "p", text: "Natural and legal persons. Foreign applicants — through a registered representative." },
    { kind: "h2", text: "What the application contains" },
    {
      kind: "checklist",
      items: [
        { label: "Request for grant of industrial design (form DI-1)", required: true },
        { label: "Applicant details", required: true },
        { label: "Representation of the design (photos or drawings, up to 7 views of the same design)", required: true },
        { label: "Description (if needed for clarity)", required: false },
        { label: "Power of attorney (if filed via representative)", required: true, note: "in that case" },
        { label: "Proof of fee payment", required: true },
      ],
    },
    { kind: "h2", text: "Procedure" },
    { kind: "ol", items: ["Filing.", "Formal examination.", "Publication in the Bulletin.", "Opposition window.", "Registration and certificate."] },
    { kind: "p", text: "The full procedure usually takes 6–12 months." },
    { kind: "h2", text: "Term and renewal" },
    {
      kind: "ul",
      items: [
        "Initial 5 years from filing date (Art. 172(1)).",
        "Renewable in 5-year increments, up to 25 years total (Art. 172(2)).",
        "Renewal request filed in the last year of validity; possible within 6 months after expiration with additional fee.",
      ],
    },
    { kind: "h2", text: "International protection — Hague System" },
    {
      kind: "p",
      text:
        "One WIPO application for protection in many countries. Macedonia is party to the Hague Agreement.",
    },
    { kind: "link", href: "/en/industrial-design/hague-system", label: "Detailed page: Hague System" },
    {
      kind: "whenPro",
      items: [
        "You have a product and aren't sure if the appearance is \"new\" under the statute.",
        "The design has already been publicly disclosed; ask whether protection is still possible.",
        "International protection via the Hague System.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "An industrial design protects the external appearance of a product. Protection lasts 5 years, renewable up to 25 years; international protection via the Hague System.",
  lastReviewed: LAST_REVIEWED,
};

const [dProcMk, dProcEn] = subPage(
  "industrial-design/procedure",
  "industrial-design",
  {
    title: "Постапка за индустриски дизајн",
    h1: "Постапка за индустриски дизајн — детален водич",
    lede: "Образец DI-1, приказ на дизајнот (до 7 погледи), формално и суштинско испитување, и објавување во Гласник.",
    sections: [
      { h: "Образец DI-1 и приказ", ps: ["Прикажете до 7 погледи на ист дизајн — изометриски, преден, заден, страничен, горен, долен и детаљ."] },
      { h: "Формално и суштинско испитување", ps: ["ДЗИС проверува дали приказот ги исполнува условите за јасна заштита и дали постои новост/индивидуален карактер."] },
      { h: "Повеќе дизајни во една пријава", ps: ["Дозволено е поднесување повеќе дизајни во една пријава кога припаѓаат во иста класа од Локарнската класификација."] },
    ],
  },
  {
    title: "Industrial design procedure",
    h1: "Industrial design procedure — full walkthrough",
    lede: "Form DI-1, representation of the design (up to 7 views), formal and substantive examination, and publication in the Bulletin.",
    sections: [
      { h: "Form DI-1 and representation", ps: ["Show up to 7 views of the same design — isometric, front, back, side, top, bottom, and detail."] },
      { h: "Formal and substantive examination", ps: ["IPPO checks whether the representation meets clarity requirements and whether novelty/individual character is present."] },
      { h: "Multiple designs in one application", ps: ["Multiple designs may be filed in one application when they belong to the same Locarno class."] },
    ],
  }
);

const [dRenMk, dRenEn] = subPage(
  "industrial-design/renewal",
  "industrial-design",
  {
    title: "Обновување на индустриски дизајн",
    h1: "Обновување на индустриски дизајн",
    lede: "Дизајнот се обновува за периоди од по 5 години, до максимум 25 години. Грациски период од 6 месеци по истекот.",
    sections: [
      { h: "Кога се обновува", ps: ["Во последната година од важноста, или најдоцна 6 месеци по истекот со плаќање дополнителна такса."] },
      { h: "Како се обновува", ps: ["Образец DI-2 со потврда за плаќање. За странски подносители — преку овластен застапник."] },
      { h: "Што се случува по 25 години", ps: ["Заштитата престанува конечно. Производот може слободно да го репродуцира секој."] },
    ],
  },
  {
    title: "Industrial design renewal",
    h1: "Industrial design renewal",
    lede: "Industrial design is renewed in 5-year increments up to a 25-year maximum. 6-month grace period after expiration.",
    sections: [
      { h: "When to renew", ps: ["In the last year of validity, or within 6 months after expiration with an additional fee."] },
      { h: "How to renew", ps: ["Form DI-2 with proof of payment. Foreign applicants file through a registered representative."] },
      { h: "What happens after 25 years", ps: ["Protection ends definitively. The product may be freely reproduced by anyone."] },
    ],
  }
);

const [dHagueMk, dHagueEn] = subPage(
  "industrial-design/hague",
  "industrial-design",
  {
    title: "Хашки систем за индустриски дизајн",
    h1: "Хашки систем — меѓународна заштита на индустриски дизајн",
    lede: "Една пријава преку WIPO за заштита на дизајн во голем број држави членки. Македонија е членка на Хашкиот договор.",
    sections: [
      { h: "Како работи", ps: ["Поднесете една пријава DM/1 директно до WIPO или преку ДЗИС, означувајќи ги саканите држави членки."] },
      { h: "Времетраење", ps: ["Почетна заштита 5 години, со обновувања до максимум определен од националното право на секоја држава."] },
      { h: "Предности", ul: ["Една пријава, еден јазик, еден сет такси.", "Подоцнежно проширување на нови држави без нова пријава."] },
    ],
  },
  {
    title: "Hague System for industrial design",
    h1: "Hague System — international industrial design protection",
    lede: "A single WIPO application protects a design in many member states. Macedonia is party to the Hague Agreement.",
    sections: [
      { h: "How it works", ps: ["File one DM/1 application directly with WIPO or through IPPO, designating the desired member states."] },
      { h: "Duration", ps: ["Initial 5-year protection, renewable up to the maximum allowed by each member state's national law."] },
      { h: "Advantages", ul: ["One application, one language, one set of fees.", "Later subsequent designations possible without a new application."] },
    ],
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// COPYRIGHT pillar + sub-pages
// ─────────────────────────────────────────────────────────────────────────────

const copyMk: PageContent = {
  routeKey: "copyright",
  pillarFamily: "copyright",
  title: "Авторско право и сродни права во Македонија",
  seoTitle: "Авторско право во Македонија | iplaw.nexa.mk",
  seoDescription:
    "Како се штити авторско право во Македонија. Без регистрација, заштита за животот на авторот + 70 години. Сродни права, лиценцирање, и компјутерски програми.",
  h1: "Авторско право и сродни права во Македонија",
  hero: "pillar",
  lede:
    "Авторското право ги штити оригиналните литературни, научни, уметнички, музички, аудиовизуелни, фотографски и компјутерски дела. Заштитата настанува автоматски — со создавањето и фиксирањето на делото — без потреба од регистрација (чл. 12 од Законот за авторското право и сродните права). Материјалните права траат за време на животот на авторот и 70 години по неговата смрт (чл. 55 ст. 1).",
  blocks: [
    { kind: "keyfacts", items: ["Без регистрација", "Заштита: живот + 70 години", "Покрива и компјутерски програми"] },
    { kind: "h2", text: "Што е авторско дело" },
    {
      kind: "p",
      text:
        "Авторско дело е оригинална индивидуална и интелектуална творба од областа на книжевноста, науката и уметноста (чл. 12 ст. 1). Примери (чл. 12 ст. 2):",
    },
    {
      kind: "ul",
      items: [
        "Пишано дело (книга, статија, прирачник, брошура).",
        "Компјутерска програма, како пишано дело.",
        "Говорно дело (предавање, говор).",
        "Музичко дело, со или без текст.",
        "Драмско, драмско-музичко, кореографско и пантомимичарско дело.",
        "Фотографско дело и дело создадено во постапка слична на фотографската.",
        "Аудиовизуелно дело (кинематографско и друго дело со подвижни слики).",
        "Дела на ликовната уметност (слика, цртеж, графика, скулптура).",
        "Дела од архитектурата.",
        "Дела од применетата уметност и дизајнот.",
        "Картографски дела, планови, скици, технички цртежи, проекти, табели, пластични дела.",
      ],
    },
    { kind: "p", text: "Базите на податоци и преработките се исто така авторски дела ако исполнуваат услови на оригиналност (чл. 14, 15)." },
    { kind: "h2", text: "Кои права има авторот" },
    {
      kind: "ul",
      items: [
        "Морални права — право на признавање на авторство, право на интегритет на делото, право да го одлучи првото објавување.",
        "Материјални (имотни) права — право на репродукција, дистрибуција, преработка, јавно изведување, јавна комуникација и друго користење. Траат за животот на авторот + 70 години.",
      ],
    },
    { kind: "h2", text: "Колку трае авторското право" },
    {
      kind: "ul",
      items: [
        "Материјални права: животот на авторот + 70 години по смртта (чл. 55).",
        "Коавторство: 70 години од смртта на последниот соавтор кој починал (чл. 56).",
        "Анонимни и псевдонимни дела: 70 години по законско објавување (чл. 57).",
        "Аудиовизуелни дела: 70 години од смртта на последното живо лице меѓу — главниот режисер, авторот на сценариото, авторот на дијалозите, и композиторот на музиката (чл. 56 ст. 2).",
        "Роковите започнуваат на 1 јануари од годината по настанот основа (чл. 60).",
      ],
    },
    { kind: "h2", text: "Сродни права" },
    {
      kind: "ul",
      items: [
        "Уметници-изведувачи (актери, музичари, диригенти).",
        "Произведувачи на фонограми.",
        "Произведувачи на видеограми (филмски продуценти).",
        "Радио-телевизиски организации.",
        "Издавачи.",
        "Изготвувачи на бази на податоци.",
      ],
    },
    { kind: "p", text: "Се штитат за пократки рокови — обично 50 години — и со различни права." },
    { kind: "h2", text: "Компјутерски програми" },
    {
      kind: "p",
      text:
        "Компјутерската програма се штити како пишано дело (чл. 12 ст. 2 т. 2). Авторот има исклучиви права на репродукција, дистрибуција, преработка и продажба. Постојат ограничувања за резервна копија и за интероперабилност.",
    },
    { kind: "link", href: "/mk/avtorsko-pravo/kompjuterski-programi", label: "Детална страница: Софтвер" },
    { kind: "h2", text: "Лиценци и пренос на правата" },
    {
      kind: "p",
      text:
        "Материјалните права можат да се пренесуваат со договор. Постојат три типа договори: издавачки, лиценцен (исклучив или неисклучив), и за нарачано дело. Авторот секогаш ги задржува моралните права. Договорот мора да наведе точно: дела, права, територија, времетраење, надомест.",
    },
    { kind: "link", href: "/mk/avtorsko-pravo/sopstvenost-i-licenci", label: "Детална страница: Сопственост и лиценци" },
    {
      kind: "whenPro",
      items: [
        "Имате договор за уредување, лиценцирање или продажба на авторски права.",
        "Делото ви е користено без дозвола (повреда).",
        "Имате прашања околу колективното остварување.",
        "Сакате да го заштитите кодот или базата на податоци.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Авторското право во Македонија настанува автоматски при создавањето на делото — без регистрација. Трае целиот живот на авторот и 70 години по неговата смрт.",
  lastReviewed: LAST_REVIEWED,
};

const copyEn: PageContent = {
  routeKey: "copyright",
  pillarFamily: "copyright",
  title: "Copyright and related rights in Macedonia",
  seoTitle: "Copyright in Macedonia | iplaw.nexa.mk",
  seoDescription:
    "How copyright works in Macedonia. No registration required; protection for life + 70 years. Related rights, licensing, and software.",
  h1: "Copyright and related rights in Macedonia",
  hero: "pillar",
  lede:
    "Copyright protects original literary, scientific, artistic, musical, audiovisual, photographic, and software works. Protection arises automatically — on creation and fixation of the work — without registration (Art. 12, Law on Copyright and Related Rights). Economic rights last for the author's lifetime plus 70 years after death (Art. 55(1)).",
  blocks: [
    { kind: "keyfacts", items: ["No registration required", "Life + 70 years", "Covers software too"] },
    { kind: "h2", text: "What is a copyrightable work" },
    {
      kind: "p",
      text:
        "A work is an original individual intellectual creation in the field of literature, science, and art (Art. 12(1)). Examples (Art. 12(2)):",
    },
    {
      kind: "ul",
      items: [
        "Written work (book, article, manual, brochure).",
        "Computer program, as a written work.",
        "Spoken work (lecture, speech).",
        "Musical work, with or without text.",
        "Dramatic, dramatic-musical, choreographic, and pantomime work.",
        "Photographic work and work made in a process similar to photography.",
        "Audiovisual work (cinematographic and other works expressed in moving images).",
        "Works of fine art (painting, drawing, graphics, sculpture).",
        "Works of architecture.",
        "Works of applied art and design.",
        "Cartographic works, plans, sketches, technical drawings, projects, tables, plastic works.",
      ],
    },
    { kind: "p", text: "Databases and adaptations are also copyrightable if they meet originality conditions (Arts. 14, 15)." },
    { kind: "h2", text: "What rights the author has" },
    {
      kind: "ul",
      items: [
        "Moral rights — right of authorship, right to integrity of the work, right to decide on first publication.",
        "Economic rights — reproduction, distribution, adaptation, public performance, communication to the public. Last for life + 70 years.",
      ],
    },
    { kind: "h2", text: "How long copyright lasts" },
    {
      kind: "ul",
      items: [
        "Economic rights: life of the author + 70 years after death (Art. 55).",
        "Joint authorship: 70 years from the death of the last surviving co-author (Art. 56).",
        "Anonymous and pseudonymous works: 70 years after lawful publication (Art. 57).",
        "Audiovisual works: 70 years from the death of the last surviving among — principal director, screenwriter, dialogue author, and composer specifically created for the work (Art. 56(2)).",
        "Terms run from January 1 of the year following the event (Art. 60).",
      ],
    },
    { kind: "h2", text: "Related rights" },
    {
      kind: "ul",
      items: [
        "Performing artists (actors, musicians, conductors).",
        "Producers of phonograms.",
        "Producers of videograms (film producers).",
        "Broadcasting organizations.",
        "Publishers.",
        "Database makers.",
      ],
    },
    { kind: "p", text: "Protected for shorter terms — typically 50 years — and with different rights." },
    { kind: "h2", text: "Computer programs" },
    {
      kind: "p",
      text:
        "A computer program is protected as a written work (Art. 12(2)(2)). The author has exclusive rights of reproduction, distribution, adaptation, and sale. Statutory limits exist for backup copies and interoperability.",
    },
    { kind: "link", href: "/en/copyright/software", label: "Detailed page: Software" },
    { kind: "h2", text: "Licensing and transfer of rights" },
    {
      kind: "p",
      text:
        "Economic rights can be transferred by contract. Three contract types: publishing, license (exclusive or non-exclusive), and commissioned-work. The author always retains moral rights. The contract must specify works, rights, territory, term, and compensation.",
    },
    { kind: "link", href: "/en/copyright/ownership-and-licensing", label: "Detailed page: Ownership & licensing" },
    {
      kind: "whenPro",
      items: [
        "You have a publishing, licensing, or sale contract for copyright works.",
        "Your work is used without permission (infringement).",
        "You have questions about collective management.",
        "You want to protect code or a database.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Copyright in North Macedonia arises automatically upon creation of the work — no registration required. It lasts for the author life plus 70 years.",
  lastReviewed: LAST_REVIEWED,
};

const [durMk, durEn] = subPage(
  "copyright/duration",
  "copyright",
  {
    title: "Траење на авторското право",
    h1: "Траење на авторското право и сродните права",
    lede: "Детален преглед на роковите според Законот за авторското право и сродните права, со посебни правила за коавторство, аудиовизуелни и анонимни дела.",
    sections: [
      { h: "Општо правило", ps: ["Материјалните права траат за животот на авторот + 70 години по смртта (чл. 55 ст. 1)."] },
      { h: "Коавторство", ps: ["70 години од смртта на последниот соавтор (чл. 56)."] },
      { h: "Анонимни и псевдонимни дела", ps: ["70 години по законско објавување (чл. 57)."] },
      { h: "Аудиовизуелни дела", ps: ["70 години од смртта на последното живо лице меѓу — главниот режисер, авторот на сценариото, авторот на дијалозите, и композиторот на музиката (чл. 56 ст. 2)."] },
      { h: "Сродни права", ps: ["Обично 50 години од настанот основа (изведба, фонограм, видеограм, емитување)."] },
      { h: "Кога почнуваат роковите", ps: ["1 јануари од годината по настанот основа (чл. 60)."] },
    ],
  },
  {
    title: "Duration of copyright",
    h1: "Duration of copyright and related rights",
    lede: "Full overview of the terms under the Law on Copyright and Related Rights, with special rules for joint authorship, audiovisual works, and anonymous works.",
    sections: [
      { h: "General rule", ps: ["Economic rights last for life + 70 years after the author's death (Art. 55(1))."] },
      { h: "Joint authorship", ps: ["70 years from the death of the last surviving co-author (Art. 56)."] },
      { h: "Anonymous and pseudonymous works", ps: ["70 years after lawful publication (Art. 57)."] },
      { h: "Audiovisual works", ps: ["70 years from the death of the last surviving among — principal director, screenwriter, dialogue author, and composer (Art. 56(2))."] },
      { h: "Related rights", ps: ["Typically 50 years from the underlying event (performance, phonogram, videogram, broadcast)."] },
      { h: "When terms start", ps: ["January 1 of the year following the triggering event (Art. 60)."] },
    ],
  }
);

const [ownMk, ownEn] = subPage(
  "copyright/ownership-and-licensing",
  "copyright",
  {
    title: "Сопственост и лиценцирање на авторски права",
    h1: "Сопственост и лиценцирање на авторски права",
    lede: "Како се пренесуваат материјалните права, што мора да содржи договорот, и зошто моралните права не можат да се пренесат.",
    sections: [
      { h: "Што може да се пренесе", ps: ["Само материјалните права. Моралните права (авторство, интегритет, право на прво објавување) се неотуѓиви."] },
      { h: "Видови договори", ul: ["Издавачки договор.", "Лиценцен договор — исклучив или неисклучив.", "Договор за нарачано дело."] },
      { h: "Минимални елементи на договорот", ul: ["Идентификација на делата.", "Кои права се пренесуваат.", "Територија.", "Времетраење.", "Висина и начин на надомест.", "Право на под-лиценцирање — изречно."] },
      { h: "Работа во работен однос", ps: ["Доколку делото е создадено во рамки на работна обврска, материјалните права обично му припаѓаат на работодавачот според условите на договорот за вработување."] },
    ],
  },
  {
    title: "Ownership and licensing of copyright",
    h1: "Ownership and licensing of copyright",
    lede: "How economic rights are transferred, what the contract must contain, and why moral rights cannot be assigned.",
    sections: [
      { h: "What can be transferred", ps: ["Only economic rights. Moral rights (authorship, integrity, right of first publication) are inalienable."] },
      { h: "Contract types", ul: ["Publishing contract.", "License contract — exclusive or non-exclusive.", "Commissioned-work contract."] },
      { h: "Minimum contract elements", ul: ["Identification of the works.", "Which rights are transferred.", "Territory.", "Term.", "Amount and method of compensation.", "Sub-licensing right — explicitly."] },
      { h: "Works made in employment", ps: ["Where a work is created as part of an employment duty, economic rights usually accrue to the employer per the employment contract."] },
    ],
  }
);

const [swMk, swEn] = subPage(
  "copyright/software",
  "copyright",
  {
    title: "Авторско право врз компјутерски програми",
    h1: "Авторско право врз компјутерски програми (софтвер)",
    lede: "Кодот е заштитен како пишано дело. Кои се исклучивите права на авторот, што е дозволено за резервна копија и интероперабилност.",
    sections: [
      { h: "Кодот е пишано дело", ps: ["Изворниот код и објектниот код се штитат како пишано дело (чл. 12 ст. 2 т. 2). Заштитата не се однесува на идеи, алгоритми или интерфејси сами по себе."] },
      { h: "Исклучиви права на авторот", ul: ["Репродукција.", "Преработка и адаптација.", "Дистрибуција.", "Изнајмување."] },
      { h: "Дозволени ограничувања", ul: ["Резервна копија за лична употреба.", "Декомпилација во ограничен опсег за интероперабилност со други програми."] },
      { h: "Open-source лиценци", ps: ["GPL, MIT, Apache, BSD итн. — се пренесуваат како лиценцни договори со условите на лиценцата."] },
    ],
  },
  {
    title: "Copyright in computer programs",
    h1: "Copyright in computer programs (software)",
    lede: "Code is protected as a written work. Author's exclusive rights, allowed backup copies, and interoperability.",
    sections: [
      { h: "Code as a written work", ps: ["Source and object code are protected as written works (Art. 12(2)(2)). Protection does not extend to ideas, algorithms, or interfaces as such."] },
      { h: "Author's exclusive rights", ul: ["Reproduction.", "Adaptation.", "Distribution.", "Rental."] },
      { h: "Allowed limits", ul: ["Backup copy for personal use.", "Limited decompilation for interoperability with other programs."] },
      { h: "Open-source licenses", ps: ["GPL, MIT, Apache, BSD, etc. — operate as license contracts under their stated terms."] },
    ],
  }
);

const [relMk, relEn] = subPage(
  "copyright/related-rights",
  "copyright",
  {
    title: "Сродни права",
    h1: "Сродни права — изведувачи, продуценти, RTV-организации, издавачи, бази на податоци",
    lede: "Што се сродни права, кои лица ги уживаат, и колку време траат во споредба со авторското право.",
    sections: [
      { h: "Изведувачи", ps: ["Актери, музичари, диригенти. Заштита за изведбата 50 години од денот на изведбата."] },
      { h: "Продуценти на фонограми", ps: ["50 години од снимката или нејзиното објавување."] },
      { h: "Продуценти на видеограми", ps: ["50 години од снимката или објавувањето на видеограмот."] },
      { h: "RTV-организации", ps: ["50 години од емитувањето."] },
      { h: "Изготвувачи на бази на податоци", ps: ["Sui generis право — 15 години од создавањето или од суштинско ажурирање."] },
    ],
  },
  {
    title: "Related rights",
    h1: "Related rights — performers, producers, broadcasters, publishers, database makers",
    lede: "What related rights are, who enjoys them, and how their terms compare to copyright.",
    sections: [
      { h: "Performers", ps: ["Actors, musicians, conductors. Protection 50 years from the performance date."] },
      { h: "Phonogram producers", ps: ["50 years from the recording or its publication."] },
      { h: "Videogram producers", ps: ["50 years from the recording or publication of the videogram."] },
      { h: "Broadcasters", ps: ["50 years from the broadcast."] },
      { h: "Database makers", ps: ["Sui generis right — 15 years from creation or substantial update."] },
    ],
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// GEOGRAPHICAL INDICATIONS + ENFORCEMENT
// ─────────────────────────────────────────────────────────────────────────────

const giMk: PageContent = {
  routeKey: "geographical-indications",
  title: "Географски ознаки и ознаки на потеклото",
  seoTitle: "Географски ознаки во Македонија | iplaw.nexa.mk",
  seoDescription:
    "Како се штитат географски ознаки и ознаки на потеклото пред ДЗИС. Разлики, услови, документи и постапка.",
  h1: "Географски ознаки и ознаки на потеклото",
  hero: "default",
  lede:
    "Со географска ознака се штити географскиот назив со кој се обележува дека производот потекнува од одредено подрачје и има квалитет, репутација или други својства поврзани со тоа подрачје. Заштитата ја признава ДЗИС според Законот за индустриска сопственост.",
  blocks: [
    { kind: "h2", text: "Разлика меѓу географска ознака и ознака на потеклото" },
    {
      kind: "ul",
      items: [
        "Географска ознака: производот има репутација или специфични својства поврзани со географското подрачје, но не сите фази на производство мораат да се одвиваат таму.",
        "Ознака на потеклото: сите фази на производство (производство, преработка, подготовка) се одвиваат во определеното подрачје и квалитетот зависи од природната и човечката средина.",
      ],
    },
    { kind: "h2", text: "Кој може да поднесе пријава" },
    {
      kind: "p",
      text: "Здружение на производители, единици на локалната самоуправа, надлежни органи или физичко/правно лице кое произведува определен производ на подрачјето.",
    },
    { kind: "h2", text: "Што содржи пријавата" },
    {
      kind: "checklist",
      items: [
        { label: "Образец GN-1 — барање за заштита на географскиот назив", required: true },
        { label: "Спецификација на производот (карактеристики, методи, географско подрачје)", required: true },
        { label: "Доказ за врска меѓу својствата на производот и подрачјето", required: true },
        { label: "Доказ за платена такса", required: true },
      ],
    },
    { kind: "h2", text: "Регистрирани географски ознаки во Македонија" },
    { kind: "p", text: "ДЗИС води јавен регистар. Примери: Охридски бисер, тиквешко вино (регион), и други." },
    {
      kind: "whenPro",
      items: [
        "Имате производ со јасна врска со подрачје и сакате да го заштитите.",
        "Барате пристап до колективната заштита.",
        "Имате повреда — производ од друг регион е етикетиран со ваше име.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Географските ознаки штитат назив поврзан со подрачје (вино, сирење, рачни изработки) и не можат да станат сопственост на едно лице — се користат од сите производители од подрачјето.",
  lastReviewed: LAST_REVIEWED,
};

const giEn: PageContent = {
  routeKey: "geographical-indications",
  title: "Geographical indications and designations of origin",
  seoTitle: "Geographical indications in Macedonia | iplaw.nexa.mk",
  seoDescription:
    "How geographical indications and designations of origin are protected at IPPO. Differences, conditions, documents, and procedure.",
  h1: "Geographical indications and designations of origin",
  hero: "default",
  lede:
    "A geographical indication protects the name that identifies a product as originating from a specific area and having quality, reputation, or other properties linked to that area. Protection is granted by IPPO under the Law on Industrial Property.",
  blocks: [
    { kind: "h2", text: "Difference between GI and designation of origin" },
    {
      kind: "ul",
      items: [
        "Geographical indication (GI): product has reputation or specific properties linked to the area, but not all production stages must occur there.",
        "Designation of origin: all production stages (production, processing, preparation) occur in the defined area and quality depends on the natural and human environment.",
      ],
    },
    { kind: "h2", text: "Who may file" },
    {
      kind: "p",
      text: "An association of producers, units of local self-government, competent authorities, or a natural/legal person producing a specific product in the area.",
    },
    { kind: "h2", text: "What the application contains" },
    {
      kind: "checklist",
      items: [
        { label: "Form GN-1 — request to protect the geographical name", required: true },
        { label: "Product specification (characteristics, methods, geographical area)", required: true },
        { label: "Proof of link between the product's properties and the area", required: true },
        { label: "Proof of fee payment", required: true },
      ],
    },
    { kind: "h2", text: "Registered GIs in Macedonia" },
    { kind: "p", text: "IPPO keeps a public register. Examples: Ohrid pearl, Tikveš wine (region), and others." },
    {
      kind: "whenPro",
      items: [
        "You have a product with a clear link to an area and want to protect it.",
        "You seek collective protection.",
        "You face infringement — a product from another region is labeled with your name.",
      ],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "Geographical indications protect a name linked to a specific area (wine, cheese, crafts) and cannot become any single person property — they are used by all producers from that area.",
  lastReviewed: LAST_REVIEWED,
};

const enfMk: PageContent = {
  routeKey: "enforcement",
  title: "Заштита на правата од ИС — судска, прекршочна и царинска",
  seoTitle: "Заштита и царина | iplaw.nexa.mk",
  seoDescription:
    "Опции за заштита кога вашите права од интелектуална сопственост се повредуваат: царина, пазарен инспекторат, прекршочна и судска постапка, привремени мерки.",
  h1: "Заштита на правата од интелектуална сопственост — судска, прекршочна и царинска",
  hero: "default",
  lede:
    "Кога правата ви се повредуваат — некој користи ваша марка, дизајн или дело без дозвола — постојат повеќе патишта на заштита: преку царина, преку Државниот пазарен инспекторат, преку прекршочна постапка и преку суд.",
  blocks: [
    { kind: "h2", text: "Царинска заштита" },
    {
      kind: "p",
      text:
        "Со примена на Законот за царински мерки за заштита на права од интелектуална сопственост, носителот може да поднесе барање до Царинската управа за следење и задржување на стоки за кои постои сомнение дека ги повредуваат правата. Носителот мора да докаже сопственост и да достави податоци за идентификација.",
    },
    { kind: "h2", text: "Прекршочна заштита" },
    {
      kind: "p",
      text:
        "Државниот пазарен инспекторат врши контрола; може да изрече прекршочна санкција (парична казна) и да го одземе сомнителниот товар.",
    },
    { kind: "h2", text: "Кривична заштита" },
    {
      kind: "p",
      text:
        "Министерството за внатрешни работи поведува кривична постапка во потешки случаи (организирана повреда, фалсификати).",
    },
    { kind: "h2", text: "Граѓанска судска заштита" },
    {
      kind: "p",
      text:
        "Носителот може да поведе тужба пред надлежниот суд — Управен суд за управни одлуки на ДЗИС, а за повреди (имотни и неимотни побарувања) — пред Основен граѓански суд Скопје. Можни побарувања: запирање на повредата, отстранување на стоки од пазарот, надомест на штета, пишано извинување, објавување на пресудата.",
    },
    { kind: "h2", text: "Привремени мерки" },
    {
      kind: "p",
      text: "Судот може да изрече привремени мерки (запленување, забрана на промет) уште пред крајот на постапката, доколку постои опасност од непоправлива штета.",
    },
    {
      kind: "whenPro",
      items: ["Имате повреда — секогаш. Изборот на пакет (царина, прекршочна, граѓанска) зависи од конкретниот случај."],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "При повреда на права од интелектуална сопственост можна е граѓанска тужба, царинска интервенција (запирање на стока) и казнено гонење за тешки случаи на фалсификување.",
  lastReviewed: LAST_REVIEWED,
};

const enfEn: PageContent = {
  routeKey: "enforcement",
  title: "Enforcing IP rights — judicial, administrative, and customs",
  seoTitle: "Enforcement and customs | iplaw.nexa.mk",
  seoDescription:
    "Options when your IP rights are infringed: customs, the State Market Inspectorate, administrative penalties, court action, and interim measures.",
  h1: "Enforcing IP rights — judicial, administrative, and customs",
  hero: "default",
  lede:
    "When your rights are infringed — someone uses your mark, design, or work without permission — multiple enforcement routes exist: customs, the State Market Inspectorate, administrative penalties, and the courts.",
  blocks: [
    { kind: "h2", text: "Customs enforcement" },
    {
      kind: "p",
      text:
        "Under the Law on Customs Measures for the Protection of IP Rights, the rights-holder may apply to the Customs Administration to monitor and detain suspected infringing goods. The holder must prove ownership and provide identification details.",
    },
    { kind: "h2", text: "Administrative enforcement" },
    {
      kind: "p",
      text:
        "The State Market Inspectorate carries out inspections; it may impose administrative penalties (fines) and seize suspect consignments.",
    },
    { kind: "h2", text: "Criminal enforcement" },
    {
      kind: "p",
      text: "The Ministry of Interior brings criminal proceedings in more serious cases (organized infringement, counterfeiting).",
    },
    { kind: "h2", text: "Civil court action" },
    {
      kind: "p",
      text:
        "The rights-holder may file suit before the competent court — the Administrative Court for IPPO decisions, and the Basic Civil Court of Skopje for infringement claims. Possible remedies: cessation of infringement, withdrawal of goods, damages, written apology, publication of the judgment.",
    },
    { kind: "h2", text: "Interim measures" },
    {
      kind: "p",
      text: "The court may grant interim measures (seizure, trade ban) before the procedure concludes, if there is risk of irreparable harm.",
    },
    {
      kind: "whenPro",
      items: ["You have an infringement — always. The choice of route (customs, administrative, civil) depends on the case."],
    },
    { kind: "siblings" },
    { kind: "contactBox" },
  ],
  tldr:
    "When IP rights are infringed you can pursue civil action, customs intervention (suspension of goods) and criminal prosecution for serious counterfeiting cases.",
  lastReviewed: LAST_REVIEWED,
};

// ─────────────────────────────────────────────────────────────────────────────
// GLOSSARY, FAQ, CONTACT, LEGAL, SOURCES
// ─────────────────────────────────────────────────────────────────────────────

export type GlossaryTerm = { term: string; definition: string; link?: string };

export const GLOSSARY_MK: GlossaryTerm[] = [
  { term: "Авторско право", definition: "право на авторот над оригинално интелектуално дело (чл. 1 ЗАПСП).", link: "/mk/avtorsko-pravo" },
  { term: "Гласник", definition: "службено гласило на ДЗИС, во кое се објавуваат пријави и регистрации." },
  { term: "Дизајн", definition: "надворешен изглед на производот (чл. 3 ЗИС).", link: "/mk/industriski-dizajn" },
  { term: "Дистинктивност", definition: "способност на знакот да разликува (чл. 176 ЗИС).", link: "/mk/trgovska-marka" },
  { term: "Државен завод за индустриска сопственост (ДЗИС)", definition: "државен орган за признавање и водење регистри на права од индустриска сопственост." },
  { term: "Експлоатациска лиценца", definition: "договор со кој носителот на правото го дозволува користењето на правото на трето лице." },
  { term: "Стекната дистинктивност", definition: "придобиена дистинктивност преку долгогодишна употреба (чл. 177 ст. 2 ЗИС)." },
  { term: "Знак", definition: "графички приказ способен за регистрација како трговска марка (чл. 175 ЗИС)." },
  { term: "Идентичност", definition: "потполно совпаѓање со порано пријавена или регистрирана марка." },
  { term: "Индустриска сопственост", definition: "патент, индустриски дизајн, трговска марка, географска ознака, ознака на потеклото (чл. 2 ЗИС)." },
  { term: "Инвентивен чекор", definition: "критериум за патентибилност: пронајдокот не произлегува на очигледен начин за стручен." },
  { term: "Индустриска применливост", definition: "критериум за патентибилност: пронајдокот може да се произведе или употреби." },
  { term: "Мадридски систем", definition: "меѓународен систем за регистрација на трговски марки преку WIPO.", link: "/mk/trgovska-marka/megunarodna-zashtita-madrid" },
  { term: "Морални права", definition: "лични права на авторот, неотуѓиви (чл. 17, 18, 19 ЗАПСП)." },
  { term: "Ничанска класификација", definition: "меѓународна класификација на стоки и услуги за регистрација на трговски марки." },
  { term: "Новост", definition: "критериум за патентибилност: пронајдокот не е дел од состојбата на техниката." },
  { term: "Овластен застапник", definition: "лице запишано во регистарот на ДЗИС, овластено да поднесува пријави и да го застапува подносителот." },
  { term: "Опозиција (приговор)", definition: "постапка по која трето лице ѝ се противи на објавена пријава за трговска марка (рок од 3 месеци).", link: "/mk/trgovska-marka/prigovor" },
  { term: "Ознака на потеклото", definition: "географски назив за производ чии својства зависат од подрачјето (чл. 2 ст. 5 ЗИС).", link: "/mk/geografski-oznaki" },
  { term: "Патент", definition: "право од индустриска сопственост со кое се штити пронајдок (чл. 2 ст. 2 ЗИС).", link: "/mk/patent" },
  { term: "Парискa конвенција", definition: "Парискa конвенција за заштита на индустриската сопственост (1883, со измени)." },
  { term: "PCT", definition: "Договор за соработка во областа на патентите.", link: "/mk/patent/pct" },
  { term: "Принцип на првенство", definition: "кој прв поднесе пријава, прв стекнува право (Парискa конвенција, чл. 4)." },
  { term: "Пронајдок", definition: "техничко решение на технички проблем (чл. 3 ЗИС)." },
  { term: "Сертификат за дополнителна заштита (СДЗ)", definition: "продолжување на патентот за медицински производи и производи за заштита на растенија.", link: "/mk/patent/sertifikat-za-dopolnitelna-zashtita" },
  { term: "Сродни права", definition: "права на изведувачи, продуценти, RTV-организации, издавачи (чл. 1 ЗАПСП).", link: "/mk/avtorsko-pravo/srodni-prava" },
  { term: "Состојба на техниката", definition: "сите достапни информации до денот на пријавата (чл. 26 ЗИС)." },
  { term: "Трговска марка", definition: "знак за разликување на стоки или услуги (чл. 175 ЗИС).", link: "/mk/trgovska-marka" },
  { term: "TRIPS", definition: "Спогодба за трговските аспекти на правата од интелектуална сопственост на СТО." },
];

export const GLOSSARY_EN: GlossaryTerm[] = [
  { term: "Acquired distinctiveness", definition: "distinctiveness obtained through long-term use (Art. 177(2), Law on Industrial Property)." },
  { term: "Bulletin", definition: "the IPPO Official Gazette in which applications and registrations are published." },
  { term: "Copyright", definition: "the author's right over an original intellectual work (Art. 1, Law on Copyright and Related Rights).", link: "/en/copyright" },
  { term: "Distinctiveness", definition: "the sign's capacity to distinguish (Art. 176, Law on Industrial Property).", link: "/en/trademark" },
  { term: "Geographical indication", definition: "a geographical name designating products whose properties are linked to the area.", link: "/en/geographical-indications" },
  { term: "Hague System", definition: "WIPO system for international registration of industrial designs.", link: "/en/industrial-design/hague-system" },
  { term: "Identity", definition: "complete match with an earlier filed or registered mark." },
  { term: "Industrial design", definition: "the external appearance of a product (Art. 3, Law on Industrial Property).", link: "/en/industrial-design" },
  { term: "Industrial property", definition: "patent, industrial design, trademark, geographical indication, designation of origin (Art. 2)." },
  { term: "Inventive step", definition: "patentability criterion: the invention is not obvious to a person skilled in the art." },
  { term: "Industrial applicability", definition: "patentability criterion: the invention can be produced or used." },
  { term: "IPPO (State Office of Industrial Property)", definition: "the Macedonian state office that grants and registers industrial property rights." },
  { term: "License", definition: "contract by which the rights-holder allows a third party to use the right." },
  { term: "Madrid System", definition: "WIPO system for international registration of trademarks.", link: "/en/trademark/madrid-international-protection" },
  { term: "Moral rights", definition: "the author's personal, inalienable rights (Arts. 17, 18, 19, Copyright Law)." },
  { term: "Nice Classification", definition: "international classification of goods and services for trademark registration." },
  { term: "Novelty", definition: "patentability criterion: the invention is not part of the state of the art." },
  { term: "Opposition", definition: "third-party challenge to a published trademark application (3-month deadline).", link: "/en/trademark/opposition" },
  { term: "Patent", definition: "industrial property right protecting an invention (Art. 2(2)).", link: "/en/patent" },
  { term: "Paris Convention", definition: "Paris Convention for the Protection of Industrial Property (1883, as amended)." },
  { term: "PCT", definition: "Patent Cooperation Treaty.", link: "/en/patent/pct" },
  { term: "Priority principle", definition: "the first to file is the first to acquire the right (Paris Convention, Art. 4)." },
  { term: "Registered representative", definition: "a person entered in the IPPO register, authorized to file applications and represent applicants." },
  { term: "Related rights", definition: "rights of performers, producers, broadcasters, publishers (Art. 1, Copyright Law).", link: "/en/copyright/related-rights" },
  { term: "Sign", definition: "graphical representation eligible for trademark registration (Art. 175)." },
  { term: "Software", definition: "computer program — protected as a written work under copyright.", link: "/en/copyright/software" },
  { term: "State of the art", definition: "all information available before the filing date (Art. 26)." },
  { term: "Supplementary Protection Certificate (SPC)", definition: "extends a patent for medicinal or plant-protection products.", link: "/en/patent/supplementary-protection-certificate" },
  { term: "Trademark", definition: "sign distinguishing goods or services (Art. 175).", link: "/en/trademark" },
  { term: "TRIPS", definition: "WTO Agreement on Trade-Related Aspects of IP Rights." },
];

export type FaqItem = { q: string; a: string };
export type FaqGroup = { heading: string; items: FaqItem[] };

export const FAQ_MK: FaqGroup[] = [
  {
    heading: "Трговска марка",
    items: [
      { q: "Како да проверам дали мојата марка е слободна?", a: "Со пребарување во јавните регистри: ippo.gov.mk, TMView (EUIPO), Madrid Monitor (WIPO). Препорачуваме и стручна претходна анализа." },
      { q: "Колку чини регистрација на трговска марка?", a: "Таксите кон ДЗИС се околу 19.400 МКД; со хонорар на застапник, вкупната пазарна цена е 750–900 EUR за стандардна марка." },
      { q: "Колку трае постапката?", a: "Без приговор, 12–18 месеци." },
      { q: "Можам ли да користам ® пред да биде регистрирана?", a: "Не. ® се користи само за регистрирани марки. ™ може да се користи во меѓувреме." },
      { q: "Што се случува ако пропуштам рок за обновување?", a: "Имате 9 месеци грација по истекот, со плаќање дополнителна такса. По тоа, марката се брише." },
      { q: "Дали морам да користам застапник?", a: "Не ако сте резидент. Да ако сте странски подносител." },
    ],
  },
  {
    heading: "Патент",
    items: [
      { q: "Кои пронајдоци може да се патентираат?", a: "Оние со новост, инвентивен чекор и индустриска применливост (чл. 24 ЗИС)." },
      { q: "Колку трае патентот?", a: "20 години од денот на пријавата (чл. 74 ст. 1)." },
      { q: "Можам ли да го заштитам кодот со патент?", a: "Не — компјутерската програма сама по себе не е патентибилна. Се штити со авторско право. Применувано техничко решение поврзано со софтвер може, во определени услови." },
      { q: "Што е „состојба на техниката“?", a: "Сите достапни информации (јавно достапни, на кој било јазик, во кој било облик) до денот на пријавата (чл. 26)." },
      { q: "Дали објавувањето на YouTube ја уништува новоста?", a: "Да. Секое јавно обелоденување може да ја уништи новоста. Подадете пред да објавите." },
    ],
  },
  {
    heading: "Индустриски дизајн",
    items: [
      { q: "Колку трае заштитата?", a: "Почетна 5 години, со обновувања до 25 години вкупно (чл. 172)." },
      { q: "Можам ли да заштитам само бојата?", a: "Самата боја не — но композиција на бои како дел од дизајнот, да." },
      { q: "Дали ја штити функцијата?", a: "Не. Дизајнот ја штити само формата/изгледот. Функцијата ја штити патентот." },
    ],
  },
  {
    heading: "Авторско право",
    items: [
      { q: "Мора ли да го регистрирам делото?", a: "Не. Заштитата настанува автоматски со создавањето (чл. 12)." },
      { q: "Колку трае авторското право?", a: "Животот на авторот + 70 години (чл. 55)." },
      { q: "Можам ли да го пренесам авторското право?", a: "Само материјалните права. Моралните се неотуѓиви." },
      { q: "Дали кодот е заштитен?", a: "Да — како пишано дело (чл. 12 ст. 2 т. 2)." },
      { q: "Можам ли да користам туѓо дело за образование?", a: "Постојат законски ограничувања (фер употреба за образование, цитати, пародија) — но не се применуваат на сите случаи." },
    ],
  },
  {
    heading: "Општо",
    items: [
      { q: "Дали Македонија е членка на ЕУ за интелектуална сопственост?", a: "Не. ЕУ марките и дизајните не покриваат автоматски Македонија. Потребна е посебна национална или Мадридска/Хашка пријава." },
      { q: "Кој ги издава правата?", a: "ДЗИС за индустриската сопственост. Авторското право не се регистрира." },
      { q: "Дали постои електронска пријава?", a: "Да, ДЗИС има платформа на e-prijava.ippo.gov.mk за патент." },
    ],
  },
];

export const FAQ_EN: FaqGroup[] = [
  {
    heading: "Trademark",
    items: [
      { q: "How do I check if my mark is available?", a: "Search the public registers: ippo.gov.mk, TMView (EUIPO), Madrid Monitor (WIPO). A professional clearance opinion is recommended." },
      { q: "How much does a trademark registration cost?", a: "IPPO fees are around 19,400 MKD; with representative fees, the total market price is 750–900 EUR for a standard mark." },
      { q: "How long does the procedure take?", a: "12–18 months without opposition." },
      { q: "Can I use ® before registration?", a: "No. ® is only for registered marks. ™ can be used in the meantime." },
      { q: "What if I miss the renewal deadline?", a: "You have a 9-month grace period with an extra fee. After that, the mark is removed." },
      { q: "Do I need a representative?", a: "Not if you are a resident. Yes if you are a foreign applicant." },
    ],
  },
  {
    heading: "Patent",
    items: [
      { q: "What can be patented?", a: "Inventions with novelty, inventive step, and industrial applicability (Art. 24)." },
      { q: "How long does a patent last?", a: "20 years from the filing date (Art. 74(1))." },
      { q: "Can I patent my code?", a: "No — a computer program as such is not patentable. It is protected by copyright. A technical implementation involving software may be, under certain conditions." },
      { q: "What is \"state of the art\"?", a: "All information available (publicly disclosed, in any language, any form) before the filing date (Art. 26)." },
      { q: "Does publishing on YouTube destroy novelty?", a: "Yes. Any public disclosure can destroy novelty. File before you publish." },
    ],
  },
  {
    heading: "Industrial design",
    items: [
      { q: "How long does protection last?", a: "Initial 5 years, renewable up to 25 years total (Art. 172)." },
      { q: "Can I protect just a color?", a: "Color alone, no — but a color composition as part of a design, yes." },
      { q: "Does it protect function?", a: "No. Design protects only appearance. Function is protected by patent." },
    ],
  },
  {
    heading: "Copyright",
    items: [
      { q: "Do I need to register the work?", a: "No. Protection arises automatically on creation (Art. 12)." },
      { q: "How long does copyright last?", a: "Life of the author + 70 years (Art. 55)." },
      { q: "Can I transfer copyright?", a: "Only economic rights. Moral rights are inalienable." },
      { q: "Is code protected?", a: "Yes — as a written work (Art. 12(2)(2))." },
      { q: "Can I use someone else's work for education?", a: "Statutory limitations exist (educational use, quotation, parody) — but do not cover all cases." },
    ],
  },
  {
    heading: "General",
    items: [
      { q: "Is Macedonia in the EU for IP?", a: "No. EU trademarks and designs do not automatically cover Macedonia. A separate national or Madrid/Hague application is required." },
      { q: "Who grants the rights?", a: "IPPO for industrial property. Copyright is not registered." },
      { q: "Is there an electronic filing?", a: "Yes, IPPO has a portal at e-prijava.ippo.gov.mk for patents." },
    ],
  },
];

export const CONTACT_TOPICS_MK = [
  "Трговска марка — пребарување и регистрација",
  "Трговска марка — обновување",
  "Трговска марка — приговор / жалба",
  "Трговска марка — Мадридски систем",
  "Патент — национална пријава",
  "Патент — PCT",
  "Патент — европски патент",
  "Патент — сертификат за дополнителна заштита",
  "Индустриски дизајн",
  "Индустриски дизајн — Хашки систем",
  "Авторско право — лиценцирање",
  "Авторско право — повреда",
  "Географски ознаки",
  "Заштита (царина / суд)",
  "Друго",
];

export const CONTACT_TOPICS_EN = [
  "Trademark — clearance and registration",
  "Trademark — renewal",
  "Trademark — opposition / appeal",
  "Trademark — Madrid System",
  "Patent — national application",
  "Patent — PCT",
  "Patent — European patent",
  "Patent — Supplementary Protection Certificate",
  "Industrial design",
  "Industrial design — Hague System",
  "Copyright — licensing",
  "Copyright — infringement",
  "Geographical indications",
  "Enforcement (customs / court)",
  "Other",
];

const contactMk: PageContent = {
  routeKey: "contact",
  title: "Контакт",
  seoTitle: "Контакт | iplaw.nexa.mk",
  seoDescription:
    "Имате прашање за заштита на трговска марка, патент, индустриски дизајн или авторско право во Македонија? Испратете нé порака — одговараме во рок од 24 часа.",
  h1: "Контакт",
  hero: "default",
  lede:
    "Имате конкретно прашање за заштита на трговска марка, патент, индустриски дизајн или авторско право? Испратете нé порака. Одговараме во рок од 24 часа на работни денови. Вашата порака стигнува до тимот на Nexa на info@nexa.mk; ние ве упатуваме до соодветен стручен.",
  blocks: [
    {
      kind: "callout",
      tone: "note",
      title: "Напомена",
      text:
        "Ова не е правен совет. Општа информација базирана на закон. Конкретниот случај бара професионална анализа.",
    },
  ],
  lastReviewed: LAST_REVIEWED,
};

const contactEn: PageContent = {
  routeKey: "contact",
  title: "Contact",
  seoTitle: "Contact | iplaw.nexa.mk",
  seoDescription:
    "Have a question on trademark, patent, industrial design, or copyright protection in Macedonia? Send us a message — we reply within 24 hours.",
  h1: "Contact",
  hero: "default",
  lede:
    "Have a specific question on trademark, patent, industrial design, or copyright protection? Send us a message. We reply within 24 hours on working days. Your message reaches the Nexa team at info@nexa.mk; we will refer you to the right expert.",
  blocks: [
    {
      kind: "callout",
      tone: "note",
      title: "Note",
      text:
        "This is not legal advice. General information grounded in statute. A specific case requires professional analysis.",
    },
  ],
  lastReviewed: LAST_REVIEWED,
};

const privMk: PageContent = {
  routeKey: "privacy",
  title: "Политика за приватност",
  seoTitle: "Политика за приватност | iplaw.nexa.mk",
  seoDescription: "Кои податоци ги собираме, зошто, колку време ги чуваме и кои се вашите права согласно GDPR.",
  h1: "Политика за приватност",
  hero: "default",
  blocks: [
    { kind: "h2", text: "1. Контролор на податоци" },
    { kind: "p", text: "Друштво за услуги НЕКСА АМД ДООЕЛ Скопје, Ул. Булевар Партизански Одреди бр. 102/2-14, Скопје – Карпош, Северна Македонија. Тел.: 078 534 258. Е-маил: info@nexa.mk. iplaw.nexa.mk е дел од Nexa екосистемот (https://nexa.mk)." },
    { kind: "p", text: "Офицер за заштита на лични податоци (DPO): Мартин Бошкоски — info@nexa.mk." },
    { kind: "h2", text: "2. Кои податоци ги собираме" },
    { kind: "ul", items: [
      "Податоци кои свесно ги испраќате преку формите: име, е-маил, телефон, тема и порака.",
      "Стандардни серверски логови: IP адреса, user agent, временски печат — за безбедност и заштита од злоупотреба.",
      "Google Analytics 4 (само ако дадете согласност преку банерот за колачиња): псевдонимизиран идентификатор, посетени страници, извор на сообраќај, агрегирани мерки.",
    ] },
    { kind: "h2", text: "3. Цели на обработката" },
    { kind: "ul", items: [
      "Одговор на вашите прашања.",
      "Препраќање на барања до проверени правни/професионални партнери во Nexa екосистемот соодветни на темата.",
      "Подобрување на содржината и работата на сајтот.",
    ] },
    { kind: "h2", text: "4. Правен основ" },
    { kind: "ul", items: [
      "Согласност (чл. 6 ст. 1 т. (а) GDPR) — за испраќање преку формите и за аналитички колачиња.",
      "Легитимен интерес (чл. 6 ст. 1 т. (ф) GDPR) — за серверски логови и заштита од злоупотреба.",
    ] },
    { kind: "h2", text: "5. Примачи на податоци" },
    { kind: "ul", items: [
      "Проверени партнери во Nexa екосистемот (адвокати, сметководители, консултанти) на кои се препраќа барањето.",
      "Сервис за е-маил (Resend).",
      "Хостинг провајдер (Cloudflare/Vercel).",
      "Google Analytics 4 (Google Ireland Ltd.) — само со согласност.",
    ] },
    { kind: "h2", text: "6. Период на чување" },
    { kind: "p", text: "Преписки и барања — до 24 месеци по затворање на барањето, освен ако не побарате претходно бришење. Серверски логови — 90 дена. Аналитички податоци — според стандардното задржување на GA4 (14 месеци)." },
    { kind: "h2", text: "7. Вашите права" },
    { kind: "ul", items: [
      "Право на пристап, исправка, бришење и ограничување на обработката.",
      "Право на приговор и преносливост.",
      "Право да повлечете дадена согласност во секое време.",
      "Право на жалба до Агенцијата за заштита на лични податоци на Северна Македонија.",
    ] },
    { kind: "p", text: "За остварување на правата: info@nexa.mk." },
    { kind: "h2", text: "8. Колачиња" },
    { kind: "p", text: "Користиме строго неопходни колачиња за работа на сајтот и (опционално, со ваша согласност) Google Analytics 4. Согласноста ја давате/повлекувате преку банерот." },
    { kind: "h2", text: "9. Меѓународни преноси" },
    { kind: "p", text: "Google Analytics и некои даватели на услуги се надвор од ЕЕА. Преносите се потпираат на стандардните договорни клаузули (SCCs) на Европската комисија." },
    { kind: "h2", text: "10. Ажурирање" },
    { kind: "p", text: "Политиката може да биде ажурирана. Датумот на последниот преглед е прикажан подолу." },
    { kind: "h2", text: "11. Контакт" },
    { kind: "p", text: "info@nexa.mk" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const privEn: PageContent = {
  routeKey: "privacy",
  title: "Privacy policy",
  seoTitle: "Privacy policy | iplaw.nexa.mk",
  seoDescription: "What personal data we collect, why, how long we retain it, and your rights under GDPR.",
  h1: "Privacy policy",
  hero: "default",
  blocks: [
    { kind: "h2", text: "1. Data controller" },
    { kind: "p", text: "Company for services NEKSA AMD DOOEL Skopje, Str. Bulevar Partizanski Odredi no. 102/2-14, Skopje – Karposh, North Macedonia. Phone: +389 78 534 258. Email: info@nexa.mk. iplaw.nexa.mk is part of the Nexa ecosystem (https://nexa.mk)." },
    { kind: "p", text: "Data Protection Officer (DPO): Martin Boshkoski — info@nexa.mk." },
    { kind: "h2", text: "2. Data we collect" },
    { kind: "ul", items: [
      "Data you knowingly submit via forms: name, email, phone, topic and message.",
      "Standard server logs: IP address, user agent, timestamps — for security and abuse prevention.",
      "Google Analytics 4 (only with your cookie-banner consent): pseudonymous identifier, pages viewed, traffic source, aggregate metrics.",
    ] },
    { kind: "h2", text: "3. Purposes of processing" },
    { kind: "ul", items: [
      "Answering your inquiries.",
      "Routing your request to a verified legal/professional partner within the Nexa ecosystem matching the topic.",
      "Improving the site's content and operation.",
    ] },
    { kind: "h2", text: "4. Legal basis" },
    { kind: "ul", items: [
      "Consent (Art. 6(1)(a) GDPR) — for form submissions and for analytics cookies.",
      "Legitimate interest (Art. 6(1)(f) GDPR) — for server logs and abuse prevention.",
    ] },
    { kind: "h2", text: "5. Recipients" },
    { kind: "ul", items: [
      "Verified partners within the Nexa ecosystem (lawyers, accountants, consultants) to whom requests are routed.",
      "Email service (Resend).",
      "Hosting provider (Cloudflare/Vercel).",
      "Google Analytics 4 (Google Ireland Ltd.) — with consent only.",
    ] },
    { kind: "h2", text: "6. Retention" },
    { kind: "p", text: "Correspondence and requests — up to 24 months after the inquiry is closed, unless you ask for earlier deletion. Server logs — 90 days. Analytics — GA4 default retention (14 months)." },
    { kind: "h2", text: "7. Your rights" },
    { kind: "ul", items: [
      "Access, rectification, erasure, restriction of processing.",
      "Objection and portability.",
      "Withdraw consent at any time.",
      "Lodge a complaint with the Personal Data Protection Agency of North Macedonia.",
    ] },
    { kind: "p", text: "To exercise these rights: info@nexa.mk." },
    { kind: "h2", text: "8. Cookies" },
    { kind: "p", text: "We use strictly necessary cookies for site operation and (optionally, with your consent) Google Analytics 4. You can grant or withdraw consent via the cookie banner." },
    { kind: "h2", text: "9. International transfers" },
    { kind: "p", text: "Google Analytics and some processors are located outside the EEA. Transfers rely on the European Commission's Standard Contractual Clauses (SCCs)." },
    { kind: "h2", text: "10. Updates" },
    { kind: "p", text: "This policy may be updated. The last-reviewed date is shown below." },
    { kind: "h2", text: "11. Contact" },
    { kind: "p", text: "info@nexa.mk" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const termsMk: PageContent = {
  routeKey: "terms",
  title: "Услови за користење",
  seoTitle: "Услови за користење | iplaw.nexa.mk",
  seoDescription: "Услови за користење на iplaw.nexa.mk — дел од Nexa екосистемот.",
  h1: "Услови за користење",
  hero: "default",
  blocks: [
    { kind: "h2", text: "1. Оператор" },
    { kind: "p", text: "Сајтот iplaw.nexa.mk го управува Друштво за услуги НЕКСА АМД ДООЕЛ Скопје, со седиште на Ул. Булевар Партизански Одреди бр. 102/2-14, Скопје – Карпош, Северна Македонија. Тел.: 078 534 258. Е-маил: info@nexa.mk. iplaw.nexa.mk е дел од Nexa екосистемот (https://nexa.mk)." },
    { kind: "h2", text: "2. Намена на сајтот" },
    { kind: "p", text: "Информативен и едукативен ресурс за интелектуалната сопственост во Северна Македонија, со можност за препраќање на барања до проверени професионалци. Сајтот не претставува комерцијална реклама за конкретен адвокат или фирма." },
    { kind: "h2", text: "3. Не претставува правен совет" },
    { kind: "p", text: "Содржината е општа информација и не претставува правен совет. Корисникот не воспоставува адвокатско-клиентски однос со Nexa преку прегледување на страниците. Секој однос со професионалец контактиран преку сајтот се воспоставува посебно и надвор од Nexa." },
    { kind: "h2", text: "4. Препраќање на барања (Lead routing)" },
    { kind: "p", text: "Барањата испратени преку контакт-формата можат да бидат препратени до проверен Nexa Super User (адвокат, сметководител, консултант) според темата. Партнерот може да ве контактира во врска со побараните услуги. Согласноста можете да ја повлечете во секое време на info@nexa.mk." },
    { kind: "h2", text: "5. Интелектуална сопственост" },
    { kind: "p", text: "Содржината е © Nexa освен ако не е назначено поинаку. Цитирање е дозволено со јасно навединување на изворот и линк назад. Комерцијално препубликување не е дозволено без писмена согласност." },
    { kind: "h2", text: "6. Надворешни линкови" },
    { kind: "p", text: "Сајтот линкува кон надворешни извори (закони, ДЗИС именик, владини регистри, именик на АКРСМ). Nexa не одговара за содржината на надворешни сајтови." },
    { kind: "h2", text: "7. Ограничување на одговорност" },
    { kind: "p", text: "До максимална мера дозволена со македонското законодавство, Nexa не одговара за одлуки или дејства преземени врз основа на содржината на сајтот." },
    { kind: "h2", text: "8. Измени" },
    { kind: "p", text: "Овие услови можат да бидат ажурирани. Датумот на последниот преглед е прикажан подолу." },
    { kind: "h2", text: "9. Меродавно право" },
    { kind: "p", text: "Република Северна Македонија. Надлежни се судовите во Скопје." },
    { kind: "h2", text: "10. Контакт" },
    { kind: "p", text: "info@nexa.mk" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const termsEn: PageContent = {
  routeKey: "terms",
  title: "Terms of use",
  seoTitle: "Terms of use | iplaw.nexa.mk",
  seoDescription: "Terms of use for iplaw.nexa.mk — part of the Nexa ecosystem.",
  h1: "Terms of use",
  hero: "default",
  blocks: [
    { kind: "h2", text: "1. Operator" },
    { kind: "p", text: "iplaw.nexa.mk is operated by Company for services NEKSA AMD DOOEL Skopje, registered at Str. Bulevar Partizanski Odredi no. 102/2-14, Skopje – Karposh, North Macedonia. Phone: +389 78 534 258. Email: info@nexa.mk. iplaw.nexa.mk is part of the Nexa ecosystem (https://nexa.mk)." },
    { kind: "h2", text: "2. Purpose of the site" },
    { kind: "p", text: "An informational and educational resource on intellectual property in North Macedonia, with optional lead-routing to verified professionals. The site is not commercial advertising for any specific lawyer or firm." },
    { kind: "h2", text: "3. Not legal advice" },
    { kind: "p", text: "Content is general information and does not constitute legal advice. Viewing the site does not create a lawyer-client relationship between you and Nexa. Any relationship with a professional contacted via the site is formed separately and outside Nexa." },
    { kind: "h2", text: "4. Lead routing" },
    { kind: "p", text: "Contact-form submissions may be routed to a verified Nexa Super User (lawyer, accountant, consultant) matching the topic, who may contact you regarding the requested services. You can withdraw consent at any time by emailing info@nexa.mk." },
    { kind: "h2", text: "5. Intellectual property" },
    { kind: "p", text: "Content is © Nexa unless otherwise noted. Quoting is permitted with clear attribution and a link back. Commercial republishing requires prior written consent." },
    { kind: "h2", text: "6. Third-party links" },
    { kind: "p", text: "The site links to external sources (laws, IPPO directory, government registries, MBA directory). Nexa is not responsible for external content." },
    { kind: "h2", text: "7. Limitation of liability" },
    { kind: "p", text: "To the maximum extent permitted under Macedonian law, Nexa is not liable for decisions or actions taken based on information on the site." },
    { kind: "h2", text: "8. Changes" },
    { kind: "p", text: "These terms may be updated. The last-reviewed date is shown below." },
    { kind: "h2", text: "9. Governing law" },
    { kind: "p", text: "Republic of North Macedonia. Disputes: the competent courts in Skopje." },
    { kind: "h2", text: "10. Contact" },
    { kind: "p", text: "info@nexa.mk" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const aboutMk: PageContent = {
  routeKey: "about",
  title: "За нас",
  seoTitle: "За iplaw.nexa.mk и Nexa екосистемот",
  seoDescription: "iplaw.nexa.mk е дел од Nexa екосистемот — оперативен слој за бизнисот во Македонија.",
  h1: "За нас",
  eyebrow: "Nexa екосистем",
  hero: "default",
  blocks: [
    { kind: "h2", text: "Што е Nexa" },
    { kind: "p", text: "Nexa е оперативниот слој за бизнисот во Северна Македонија — терминал за правни и сметководствени документи, AI помош, провери на усогласеност и пристап до проверени професионалци. Седиштето на Nexa е во Скопје." },
    { kind: "p", text: "Низ Nexa екосистемот, лица и компании наоѓаат разбирлива правна и регулаторна содржина на македонски и англиски јазик, поврзана со алатки и луѓе кои можат да ги придвижат работите напред." },
    { kind: "h2", text: "Зошто iplaw.nexa.mk постои" },
    { kind: "p", text: "Постојниот водич за интелектуална сопственост во Македонија е расфрлан, тежок за читање и често застарен. iplaw.nexa.mk го собира на едно место со стандардни постапки, такси, рокови и образци, ажуриран и двојазичен — за да можете да донесете информирана одлука пред да платите за совет." },
    { kind: "h2", text: "Други Nexa имоти" },
    { kind: "ul", items: [
      "Nexa (Hub & Терминал) — https://nexa.mk",
      "SamoDaPrasham — правни прашања за граѓани — https://samodaprasham.mk",
      "Имиграција во С. Македонија — https://immigration.mk",
      "Македонско државјанство — https://macedoniancitizenship.mk",
      "Регистрација на компанија — https://company.nexa.mk",
      "Topics — експертски одговори — https://topics.nexa.mk",
    ] },
    { kind: "callout", tone: "info", title: "За професионалци", text: "Адвокат, сметководител или консултант? Придружете се на Nexa мрежата и добивајте насочени барања од сајтот." },
    { kind: "link", href: "https://nexa.mk/for-professionals", label: "Дознај повеќе за Super User програмата →" },
    { kind: "h2", text: "Контакт" },
    { kind: "p", text: "Друштво за услуги НЕКСА АМД ДООЕЛ Скопје · Ул. Булевар Партизански Одреди бр. 102/2-14, Скопје – Карпош · тел. 078 534 258 · info@nexa.mk" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const aboutEn: PageContent = {
  routeKey: "about",
  title: "About",
  seoTitle: "About iplaw.nexa.mk and the Nexa ecosystem",
  seoDescription: "iplaw.nexa.mk is part of the Nexa ecosystem — the operational layer for business in North Macedonia.",
  h1: "About",
  eyebrow: "Nexa ecosystem",
  hero: "default",
  blocks: [
    { kind: "h2", text: "What is Nexa" },
    { kind: "p", text: "Nexa is the operational layer for business in North Macedonia — a terminal for legal and accounting documents, AI assistance, compliance checks and access to verified professionals. Nexa is based in Skopje." },
    { kind: "p", text: "Across the Nexa ecosystem, individuals and companies find clear legal and regulatory content in Macedonian and English, connected to the tools and people who can move things forward." },
    { kind: "h2", text: "Why this site exists" },
    { kind: "p", text: "The existing guide to intellectual property in North Macedonia is scattered, hard to read, and often out of date. iplaw.nexa.mk consolidates it in one place with the standard procedures, fees, deadlines and forms, kept up to date and bilingual — so you can make an informed decision before paying for advice." },
    { kind: "h2", text: "Other Nexa properties" },
    { kind: "ul", items: [
      "Nexa (Hub & Terminal) — https://nexa.mk",
      "SamoDaPrasham — Legal Q&A for individuals — https://samodaprasham.mk",
      "Immigration to N. Macedonia — https://immigration.mk",
      "Macedonian Citizenship — https://macedoniancitizenship.mk",
      "Company Registration — https://company.nexa.mk",
      "Topics — Expert Q&A — https://topics.nexa.mk",
    ] },
    { kind: "callout", tone: "info", title: "For professionals", text: "Lawyer, accountant or consultant? Join the Nexa network and receive routed leads from the site." },
    { kind: "link", href: "https://nexa.mk/for-professionals", label: "Learn more about the Super User programme →" },
    { kind: "h2", text: "Contact" },
    { kind: "p", text: "Company for services NEKSA AMD DOOEL Skopje · Str. Bulevar Partizanski Odredi no. 102/2-14, Skopje – Karposh · phone +389 78 534 258 · info@nexa.mk" },
  ],
  lastReviewed: LAST_REVIEWED,
};

const discMk: PageContent = {
  routeKey: "disclaimer",
  title: "Правно одрекување",
  seoTitle: "Правно одрекување | iplaw.nexa.mk",
  seoDescription: "Правно одрекување за iplaw.nexa.mk — содржината не претставува правен совет.",
  h1: "Правно одрекување",
  hero: "default",
  blocks: [
    { kind: "p", text: "Содржината на iplaw.nexa.mk претставува општи правни и информативни содржини и не претставува правен совет, понуда за услуги ниту комерцијална презентација. Прегледувањето или користењето на сајтот не создава адвокатско-клиентски однос со Nexa." },
    { kind: "p", text: "Содржината е базирана на Законот за индустриска сопственост (Сл. весник на РМ, со последователни измени) и Законот за авторското право и сродните права (Сл. весник на РМ бр. 115/10, со измени), како и на меѓународни договори (Парижа, ПЦТ, Мадрид, Хаг, Берн, TRIPS) во кои Северна Македонија е држава-членка." },
    { kind: "p", text: "За индивидуален правен совет, контактирајте лиценциран адвокат. Официјалниот именик на активни адвокати во Република Северна Македонија е достапен на mba.org.mk." },
  ],
  lastReviewed: LAST_REVIEWED,
};

const discEn: PageContent = {
  routeKey: "disclaimer",
  title: "Legal disclaimer",
  seoTitle: "Legal disclaimer | iplaw.nexa.mk",
  seoDescription: "Legal disclaimer for iplaw.nexa.mk — content does not constitute legal advice.",
  h1: "Legal disclaimer",
  hero: "default",
  blocks: [
    { kind: "p", text: "The content on iplaw.nexa.mk is general legal and informational material and does not constitute legal advice, an offer of services, or a commercial communication. Viewing or using the site does not create a lawyer-client relationship with Nexa." },
    { kind: "p", text: "Content is based on the Law on Industrial Property (Official Gazette of RM, as amended) and the Law on Copyright and Related Rights (Official Gazette of RM No. 115/10, as amended), as well as international treaties (Paris, PCT, Madrid, Hague, Berne, TRIPS) to which North Macedonia is a party." },
    { kind: "p", text: "For individual legal advice, contact a licensed attorney. The official directory of active attorneys in the Republic of North Macedonia is available at mba.org.mk." },
  ],
  lastReviewed: LAST_REVIEWED,
};

const sourcesMk: PageContent = {
  routeKey: "sources",
  title: "Извори и литература",
  seoTitle: "Извори | iplaw.nexa.mk",
  seoDescription: "Извори врз кои се базираат страниците на iplaw.nexa.mk.",
  h1: "Извори и литература",
  hero: "default",
  blocks: [
    { kind: "p", text: "Секоја страница цитира конкретен член од закон или меѓународен договор. Подолу се главните извори." },
    { kind: "h2", text: "Законски акти" },
    { kind: "ul", items: ["Закон за индустриска сопственост (консолидиран текст).", "Закон за авторското право и сродните права (Сл. весник на РМ бр. 115/10, со измени)."] },
    { kind: "h2", text: "Институции и портали" },
    {
      kind: "ul",
      items: [
        "ДЗИС (Државен завод за индустриска сопственост): ippo.gov.mk.",
        "Обрасци: ippo.gov.mk/MK/Obrasci.aspx.",
        "Пребарување трговски марки: ippo.gov.mk/Search/TrademarkSearch.aspx.",
        "Пребарување патенти: ippo.gov.mk/Search/PatentSearch.aspx.",
        "Пребарување индустриски дизајн: ippo.gov.mk/Search/IndustrialDesignSearch.aspx.",
        "Тарифа на ДЗИС: ippo.gov.mk/MK/LegislativaView.aspx?lang=MK&id=156&cat=NAT.",
        "WIPO: wipo.int (Madrid, Hague, PCT, Madrid Monitor, Hague Express, Global Brand Database).",
        "EUIPO: euipo.europa.eu (TMView, DesignView).",
        "EPO: epo.org (Espacenet, European Patent Register).",
      ],
    },
    { kind: "h2", text: "Меѓународни договори" },
    { kind: "ul", items: ["Парискa конвенција (1883).", "Бернска конвенција.", "TRIPS.", "Мадридски договор и протокол.", "PCT.", "Хашки договор."] },
  ],
  lastReviewed: LAST_REVIEWED,
};

const sourcesEn: PageContent = {
  routeKey: "sources",
  title: "Sources",
  seoTitle: "Sources | iplaw.nexa.mk",
  seoDescription: "Authoritative sources underlying the iplaw.nexa.mk pages.",
  h1: "Sources",
  hero: "default",
  blocks: [
    { kind: "p", text: "Every page cites a specific statute article or international treaty. The main sources are below." },
    { kind: "h2", text: "Statutes" },
    { kind: "ul", items: ["Law on Industrial Property (consolidated text).", "Law on Copyright and Related Rights (Official Gazette of RM No. 115/10, as amended)."] },
    { kind: "h2", text: "Institutions and portals" },
    {
      kind: "ul",
      items: [
        "IPPO (State Office of Industrial Property): ippo.gov.mk.",
        "Forms: ippo.gov.mk/MK/Obrasci.aspx.",
        "Trademark search: ippo.gov.mk/Search/TrademarkSearch.aspx.",
        "Patent search: ippo.gov.mk/Search/PatentSearch.aspx.",
        "Industrial design search: ippo.gov.mk/Search/IndustrialDesignSearch.aspx.",
        "IPPO tariff: ippo.gov.mk/MK/LegislativaView.aspx?lang=MK&id=156&cat=NAT.",
        "WIPO: wipo.int (Madrid, Hague, PCT, Madrid Monitor, Hague Express, Global Brand Database).",
        "EUIPO: euipo.europa.eu (TMView, DesignView).",
        "EPO: epo.org (Espacenet, European Patent Register).",
      ],
    },
    { kind: "h2", text: "International treaties" },
    { kind: "ul", items: ["Paris Convention (1883).", "Berne Convention.", "TRIPS.", "Madrid Agreement and Protocol.", "PCT.", "Hague Agreement."] },
  ],
  lastReviewed: LAST_REVIEWED,
};

// Glossary + FAQ + Contact rendered specially in their own pages (not via PageRenderer blocks).
// We still need page shells for SEO/meta.
const glossaryMk: PageContent = {
  routeKey: "glossary",
  title: "Поимник на интелектуалната сопственост",
  seoTitle: "Поимник | iplaw.nexa.mk",
  seoDescription: "Кратки дефиниции на најчестите термини од интелектуалната сопственост во Македонија, со цитат на одредбата.",
  h1: "Поимник на интелектуалната сопственост",
  lede: "Кратки дефиниции на најчестите термини, со цитат на одредбата каде што се користат.",
  hero: "default",
  blocks: [],
  lastReviewed: LAST_REVIEWED,
};
const glossaryEn: PageContent = {
  routeKey: "glossary",
  title: "Intellectual property glossary",
  seoTitle: "Glossary | iplaw.nexa.mk",
  seoDescription: "Concise definitions of the most common Macedonian IP terms, with statute citations.",
  h1: "Intellectual property glossary",
  lede: "Concise definitions of the most common terms, with citations.",
  hero: "default",
  blocks: [],
  lastReviewed: LAST_REVIEWED,
};
const faqMk: PageContent = {
  routeKey: "faq",
  title: "Често поставувани прашања",
  seoTitle: "ЧПП | iplaw.nexa.mk",
  seoDescription: "Најчести прашања за заштита на трговска марка, патент, индустриски дизајн и авторско право во Македонија.",
  h1: "Често поставувани прашања за интелектуалната сопственост во Македонија",
  hero: "default",
  blocks: [],
  lastReviewed: LAST_REVIEWED,
};
const faqEn: PageContent = {
  routeKey: "faq",
  title: "Frequently asked questions",
  seoTitle: "FAQ | iplaw.nexa.mk",
  seoDescription: "Common questions about trademark, patent, industrial design, and copyright protection in Macedonia.",
  h1: "Frequently asked questions about IP in Macedonia",
  hero: "default",
  blocks: [],
  lastReviewed: LAST_REVIEWED,
};

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRY
// ─────────────────────────────────────────────────────────────────────────────

export const CONTENT: Record<Locale, Record<RouteKey, PageContent>> = {
  mk: {
    "home": homeMk,
    "what-is-ip": whatIsIpMk,
    "trademark": tmMk,
    "trademark/procedure": tmProcMk,
    "trademark/fees": tmFeesMk,
    "trademark/renewal": tmRenewMk,
    "trademark/opposition": tmOpMk,
    "trademark/madrid": tmMadridMk,
    "patent": patentMk,
    "patent/procedure": patentProcMk,
    "patent/pct": pctMk,
    "patent/european-patent": epMk,
    "patent/spc": spcMk,
    "industrial-design": designMk,
    "industrial-design/procedure": dProcMk,
    "industrial-design/renewal": dRenMk,
    "industrial-design/hague": dHagueMk,
    "copyright": copyMk,
    "copyright/duration": durMk,
    "copyright/ownership-and-licensing": ownMk,
    "copyright/software": swMk,
    "copyright/related-rights": relMk,
    "geographical-indications": giMk,
    "enforcement": enfMk,
    "glossary": glossaryMk,
    "faq": faqMk,
    "contact": contactMk,
    "about": aboutMk,
    "sources": sourcesMk,
    "privacy": privMk,
    "terms": termsMk,
    "disclaimer": discMk,
  },
  en: {
    "home": homeEn,
    "what-is-ip": whatIsIpEn,
    "trademark": tmEn,
    "trademark/procedure": tmProcEn,
    "trademark/fees": tmFeesEn,
    "trademark/renewal": tmRenewEn,
    "trademark/opposition": tmOpEn,
    "trademark/madrid": tmMadridEn,
    "patent": patentEn,
    "patent/procedure": patentProcEn,
    "patent/pct": pctEn,
    "patent/european-patent": epEn,
    "patent/spc": spcEn,
    "industrial-design": designEn,
    "industrial-design/procedure": dProcEn,
    "industrial-design/renewal": dRenEn,
    "industrial-design/hague": dHagueEn,
    "copyright": copyEn,
    "copyright/duration": durEn,
    "copyright/ownership-and-licensing": ownEn,
    "copyright/software": swEn,
    "copyright/related-rights": relEn,
    "geographical-indications": giEn,
    "enforcement": enfEn,
    "glossary": glossaryEn,
    "faq": faqEn,
    "contact": contactEn,
    "about": aboutEn,
    "sources": sourcesEn,
    "privacy": privEn,
    "terms": termsEn,
    "disclaimer": discEn,
  },
};
