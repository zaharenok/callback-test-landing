import { useEffect, useState } from "react";
import type { Lang } from "@/lib/copy";

const KEY = "callback-lang";

function readLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(KEY);
  return saved === "de" || saved === "ru" ? saved : "en";
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const next = readLang();
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(KEY, next);
    document.documentElement.lang = next;
  }

  return [lang, setLang] as const;
}
