import { useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { LangMenu } from "@/components/lang-menu";
import { copy, type Lang } from "@/lib/copy";
import { useLang } from "@/lib/lang";

function DemoForm({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [phone, setPhone] = useState("");
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);
  const [consent, setConsent] = useState(false);
  const ready = phone.replace(/\D/g, "").length >= 8 && consent;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    setBusy(true);
    window.setTimeout(() => {
      setBusy(false);
      setOk(true);
    }, 900);
  }

  if (ok) {
    return (
      <div className="hard bg-card px-6 py-8 text-center">
        <div className="hard-sm mx-auto mb-4 flex size-14 items-center justify-center bg-sun text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold">{t.okTitle}</h3>
        <p className="mt-2 text-muted">{t.okBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="hard bg-card p-5 text-left md:p-6">
      <p className="mb-3 text-xs font-bold tracking-widest uppercase">{t.formTitle}</p>
      <label className="relative block">
        <Phone className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2" aria-hidden />
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.phonePh}
          className="hard-sm w-full bg-card py-3.5 pr-3 pl-11 text-base outline-none focus:bg-sun/30"
        />
      </label>
      <label className="mt-3 flex items-start gap-3 text-sm leading-snug text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-5 shrink-0 accent-ink"
        />
        <span>{t.consent}</span>
      </label>
      <button
        type="submit"
        disabled={!ready || busy}
        className="press hard mt-4 w-full bg-pink py-3.5 text-base font-bold disabled:cursor-not-allowed disabled:opacity-45"
      >
        {busy ? "…" : t.cta}
      </button>
      <p className="mt-3 text-center text-sm text-muted">{t.micro}</p>
    </form>
  );
}

export function Landing() {
  const [lang, setLang] = useLang();
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  const nav = useMemo(() => t.nav, [t]);

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="float-shape absolute -top-16 -left-10 size-56 rounded-[40%] border-[3px] border-ink bg-pink" />
        <div
          className="float-shape absolute top-1/3 -right-16 size-44 rounded-full border-[3px] border-ink bg-sun"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="float-shape absolute bottom-24 left-[8%] size-28 border-[3px] border-ink bg-pink"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <header className="z-40 w-full border-b-[3px] border-ink bg-paper">
        <div className="flex w-full items-center gap-4 px-4 py-3 md:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-bold">
            <span className="hard-sm flex size-9 items-center justify-center bg-pink">
              <Phone className="size-4" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-lg tracking-tight">{t.logo}</span>
              <span className="hidden text-xs font-medium text-muted sm:block">{t.tagline}</span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="px-3 py-2 text-sm font-semibold hover:bg-sun">
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <LangMenu lang={lang} onPick={setLang} />
            <a href="#demo" className="press hard-sm hidden bg-pink px-4 py-2 text-sm font-bold sm:inline-block">
              {t.try}
            </a>
            <button
              type="button"
              className="hard-sm bg-card p-2 lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
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
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="border-b border-ink/20 px-5 py-3 font-semibold"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" className="relative">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <h1 className="text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">{t.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.sub}</p>
            <ol className="mt-6 flex flex-wrap gap-2">
              {t.steps.map((step, i) => (
                <li key={step} className="hard-sm flex items-center gap-2 bg-card px-3 py-2 text-sm font-semibold">
                  <span className="hard-sm flex size-6 items-center justify-center bg-pink text-xs">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div id="demo">
            <DemoForm lang={lang} />
          </div>
        </section>

        <section id="problem" className="border-y-[3px] border-ink bg-ink text-paper">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.problemTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg text-paper/80">{t.problemBody}</p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {t.pains.map((p) => (
                <article key={p.t} className="border-[3px] border-paper bg-ink p-5">
                  <h3 className="text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-paper/75">{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.solutionTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t.solutionBody}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.services.map((s, i) => (
              <article key={s.t} className="hard bg-card p-5">
                <p className="hard-sm mb-3 inline-flex bg-sun px-2 py-0.5 text-xs font-bold">0{i + 1}</p>
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ads" className="border-y-[3px] border-ink bg-ink text-paper">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.adsTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg text-paper/80">{t.adsBody}</p>
            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {t.adsPoints.map((point) => (
                <li key={point} className="border-[3px] border-paper p-4 font-bold">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="who" className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.whoTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">{t.whoBody}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {t.niches.map((s) => (
                <article key={s.t} className="hard flex flex-col bg-card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold">{s.t}</h3>
                    <span className="hard-sm shrink-0 bg-sun px-2 py-0.5 text-xs font-bold">{s.m}</span>
                  </div>
                  <p className="mt-2 text-muted">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="border-y-[3px] border-ink bg-sun">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.proofTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg">{t.proofBody}</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {t.proofs.map((p) => (
                <div key={p.n} className="hard bg-card p-4">
                  <p className="text-3xl font-bold tracking-tight">{p.n}</p>
                  <p className="mt-1 text-sm font-medium">{p.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.storiesTitle}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.quotes.map((q) => (
              <figure key={q.n} className="hard flex flex-col bg-card p-5">
                <blockquote className="text-lg leading-snug font-medium">“{q.q}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold">{q.n}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="about" className="border-y-[3px] border-ink">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-4 text-lg text-muted">{t.aboutBody}</p>
            </div>
            <ul className="grid gap-3">
              {t.team.map((m) => (
                <li key={m.i} className="hard flex items-center gap-4 bg-card p-4">
                  <span className="hard-sm flex size-14 items-center justify-center bg-pink text-lg font-bold">
                    {m.i}
                  </span>
                  <span>
                    <span className="block font-bold">{m.n}</span>
                    <span className="text-sm text-muted">{m.r}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.priceTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{t.priceBody}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.plans.map((plan) => (
              <article key={plan.name} className={`hard flex flex-col bg-card p-5 ${plan.hot ? "bg-pink" : ""}`}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-4xl font-bold tracking-tight">
                  {plan.price}
                  <span className="text-base font-semibold">{plan.unit}</span>
                </p>
                <p className="mt-2">{plan.pitch}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a href="#cta" className="press hard-sm mt-6 bg-ink py-3 text-center font-bold text-paper">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{t.priceFoot}</p>
        </section>

        <section id="faq" className="mx-auto w-full max-w-3xl px-4 py-16 md:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.faqTitle}</h2>
          <div className="mt-8 divide-y-[3px] divide-ink border-[3px] border-ink bg-card">
            {t.faqs.map((f) => (
              <details key={f.q} className="group px-4 py-3">
                <summary className="cursor-pointer list-none py-2 font-bold marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-xl leading-none group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="pb-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="cta" className="border-y-[3px] border-ink bg-pink">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-16 md:px-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t.finalTitle}</h2>
              <p className="mt-4 text-lg">{t.finalBody}</p>
            </div>
            <DemoForm lang={lang} />
          </div>
        </section>
      </main>

      <footer className="w-full bg-ink text-paper">
        <div className="flex w-full flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="text-2xl font-bold">{t.logo}</p>
            <p className="mt-2 max-w-md text-sm text-paper/70">{t.footerNote}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="underline-offset-4 hover:underline">
                {label}
              </a>
            ))}
            <a href="#demo" className="underline-offset-4 hover:underline">
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
    </div>
  );
}
