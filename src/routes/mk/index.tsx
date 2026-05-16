import { createFileRoute } from "@tanstack/react-router";
import { PageRenderer, buildHead } from "@/components/site/PageRenderer";

export const Route = createFileRoute("/mk/")({
  head: () => buildHead("mk", "home"),
  component: () => <PageRenderer locale="mk" routeKey="home" />,
});
