import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  component: function Privacy() {
    return <LegalPage kind="privacy" />;
  },
});
