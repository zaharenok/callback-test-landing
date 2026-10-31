import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { LangMenu } from "@/components/lang-menu";
import { copy, type Lang } from "@/lib/copy";

export function SiteHeader({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  const nav = useMemo(() => t.nav, [t]);

  return (
    <header className="w-full border-b-[3px] border-ink bg-paper">
      <div className="flex w-full items-center gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-bold">
          <span className="hard-sm flex size-9 items-center justify-center bg-pink">
            <Phone className="size-4" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-lg tracking-tight">{t.logo}</span>
            <span className="hidden text-xs font-medium text-muted sm:block">{t.tagline}</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map(([id, label]) => (
            <a key={id} href={`/#${id}`} className="px-3 py-2 text-sm font-semibold hover:bg-sun">
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <LangMenu lang={lang} onPick={setLang} />
          <a href="/#demo" className="press hard-sm hidden bg-pink px-4 py-2 text-sm font-bold sm:inline-block">
            {t.try}
          </a>
          <button
            type="button"
            className="hard-sm bg-card p-2 lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="grid w-full border-t-[3px] border-ink bg-paper lg:hidden">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={() => setOpen(false)}
              className="border-b border-ink/20 px-5 py-3 font-semibold"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <footer className="mt-auto w-full bg-ink text-paper">
      <div className="flex w-full flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-2xl font-bold">{t.logo}</p>
          <p className="mt-2 max-w-md text-sm text-paper/70">{t.footerNote}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          {t.nav.map(([id, label]) => (
            <a key={id} href={`/#${id}`} className="underline-offset-4 hover:underline">
              {label}
            </a>
          ))}
          <a href="/#demo" className="underline-offset-4 hover:underline">
            {t.try}
          </a>
          <Link to="/privacy" className="underline-offset-4 hover:underline">
            {t.privacy}
          </Link>
          <Link to="/terms" className="underline-offset-4 hover:underline">
            {t.terms}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
