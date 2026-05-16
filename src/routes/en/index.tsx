import { createFileRoute } from "@tanstack/react-router";
import { PageRenderer, buildHead } from "@/components/site/PageRenderer";

export const Route = createFileRoute("/en/")({
  head: () => buildHead("en", "home"),
  component: () => <PageRenderer locale="en" routeKey="home" />,
});
