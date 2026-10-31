import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  component: function Terms() {
    return <LegalPage kind="terms" />;
  },
});
