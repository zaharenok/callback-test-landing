import { legal } from "@/lib/legal";
import { useLang } from "@/lib/lang";
import { SiteFooter, SiteHeader } from "@/components/site-frame";

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const [lang, setLang] = useLang();
  const t = legal[lang];
  const blocks = kind === "privacy" ? t.privacy : t.terms;
  const title = kind === "privacy" ? t.privacyTitle : t.termsTitle;

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader lang={lang} setLang={setLang} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 md:px-8">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">{t.updated}</p>
        <div className="mt-8 space-y-4">
          {blocks.map((block) => (
            <section key={block.h} className="hard bg-card p-5">
              <h2 className="text-xl font-bold">{block.h}</h2>
              {block.p.map((paragraph) => (
                <p key={paragraph} className="mt-2 text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
