import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageRenderer, buildHead } from "@/components/site/PageRenderer";
import { ALL_ROUTE_KEYS, ROUTES } from "@/lib/routes";

function lookup(splat: string) {
  const slug = (splat ?? "").replace(/\/$/, "");
  for (const key of ALL_ROUTE_KEYS) {
    if (ROUTES[key].en === slug) return key;
  }
  return null;
}

export const Route = createFileRoute("/en/$")({
  beforeLoad: ({ params }) => {
    const key = lookup((params as { _splat: string })._splat);
    if (!key) throw notFound();
    return { key };
  },
  head: ({ params }) => {
    const key = lookup((params as { _splat: string })._splat);
    return key ? buildHead("en", key) : { meta: [] };
  },
  component: function EnSplat() {
    const { _splat } = Route.useParams() as { _splat: string };
    const key = lookup(_splat);
    if (!key) return null;
    return <PageRenderer locale="en" routeKey={key} />;
  },
});
