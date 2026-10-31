import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { copy } from "@/lib/copy";
import { useLang } from "@/lib/lang";

const KEY = "callback-cookies";

export function CookieBar() {
  const [lang] = useLang();
  const [visible, setVisible] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function choose(value: "yes" | "no") {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-4 left-4 z-50 md:left-auto md:w-96">
      <div className="hard bg-card p-4">
        <p className="font-bold">{t.cookie}</p>
        <p className="mt-1 text-sm text-muted">{t.cookieBody}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button type="button" className="press hard-sm bg-card py-2 text-sm font-bold" onClick={() => choose("no")}>
            {t.cookieNo}
          </button>
          <button type="button" className="press hard-sm bg-pink py-2 text-sm font-bold" onClick={() => choose("yes")}>
            {t.cookieYes}
          </button>
        </div>
        <Link to="/privacy" className="mt-3 inline-block text-xs font-bold underline-offset-4 hover:underline">
          {t.privacy}
        </Link>
      </div>
    </div>
  );
}
