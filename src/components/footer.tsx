"use client";

import { Code, Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/60 backdrop-blur">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="hidden h-6 w-6 text-primary md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {lang === "pt"
              ? `Construído por um desenvolvedor aspirante. © ${year} EstudosLSO. Todos os direitos reservados.`
              : `Built by an aspiring developer. © ${year} EstudosLSO. All rights reserved.`}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/luccasilva2" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/lucca-silva-oliveira/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.instagram.com/luccaa_so/" target="_blank" rel="noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
