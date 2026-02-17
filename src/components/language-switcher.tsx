"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-md border border-border p-1">
      <Button
        variant={lang === "pt" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-2"
        onClick={() => setLang("pt")}
      >
        PT
      </Button>
      <Button
        variant={lang === "en" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-2"
        onClick={() => setLang("en")}
      >
        EN
      </Button>
    </div>
  );
}
