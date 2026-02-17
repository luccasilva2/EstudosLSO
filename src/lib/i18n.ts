export type Language = "pt" | "en";

export type LocalizedText = {
  pt: string;
  en: string;
};

export function t(text: LocalizedText, lang: Language): string {
  return text[lang] ?? text.pt;
}
