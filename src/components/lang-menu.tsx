import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { languages, type Lang } from "@/lib/copy";

export function LangMenu({ lang, onPick }: { lang: Lang; onPick: (lang: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const current = languages.find((item) => item.id === lang) ?? languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        className="hard-sm flex items-center gap-2 bg-card px-3 py-1.5 text-sm font-bold"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        {current.label}
        <ChevronDown className={`size-4 ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <ul className="hard absolute right-0 z-50 mt-2 min-w-40 bg-card py-1" role="listbox">
          {languages.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                role="option"
                aria-selected={item.id === lang}
                className={`block w-full px-3 py-2 text-left text-sm font-bold ${item.id === lang ? "bg-sun" : "hover:bg-paper"}`}
                onClick={() => {
                  onPick(item.id);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
