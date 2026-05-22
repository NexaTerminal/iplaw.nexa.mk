import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const DEFAULT_TITLE = "IP Law — Intellectual Property in North Macedonia · Nexa";
const DEFAULT_DESCRIPTION =
  "Bilingual guide to trademarks, patents, industrial designs, copyright and geographical indications in North Macedonia. Part of the Nexa ecosystem.";
// TODO: replace with a real 1200x630 social card (currently uses the navbar logo).
const DEFAULT_OG_IMAGE = "https://iplaw.nexa.mk/nexa-logo-navbar.png";
const SITE_URL = "https://iplaw.nexa.mk";

const ORGANIZATION_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexa",
  legalName: "NEKSA AMD DOOEL",
  url: "https://nexa.mk",
  logo: "https://nexa.mk/nexa-logo-navbar.png",
  email: "info@nexa.mk",
  telephone: "+389-78-534-258",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bul. Partizanski Odredi 102/2-14",
    addressLocality: "Skopje",
    addressCountry: "MK",
  },
  sameAs: [
    "https://samodaprasham.mk",
    "https://immigration.mk",
    "https://macedoniancitizenship.mk",
    "https://company.nexa.mk",
    "https://iplaw.nexa.mk",
    "https://topics.nexa.mk",
  ],
});

const WEBSITE_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IP Law",
  url: `${SITE_URL}/en`,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Nexa", legalName: "NEKSA AMD DOOEL" },
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/en"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/en"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "Nexa" },
      { name: "publisher", content: "Nexa" },
      { name: "geo.region", content: "MK" },
      { name: "geo.placename", content: "Skopje, North Macedonia" },
      { name: "geo.position", content: "41.9981;21.4254" },
      { name: "ICBM", content: "41.9981, 21.4254" },
      { property: "og:site_name", content: "IP Law · Nexa" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "IP Law — part of the Nexa ecosystem" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "mk_MK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/nexa-logo-navbar.png", type: "image/png" },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-GXFMQC848F",
      },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','default',{analytics_storage:'denied'});gtag('config','G-GXFMQC848F',{anonymize_ip:true});",
      },
      {
        type: "application/ld+json",
        children: ORGANIZATION_JSONLD,
      },
      {
        type: "application/ld+json",
        children: WEBSITE_JSONLD,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = pathname.startsWith("/mk") ? "mk" : "en";
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
