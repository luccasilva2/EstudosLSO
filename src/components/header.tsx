"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "@/components/search";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: lang === "pt" ? "Inicio" : "Home" },
    { href: "/courses", label: lang === "pt" ? "Cursos" : "Courses" },
    { href: "/certificates", label: lang === "pt" ? "Certificados" : "Certificates" },
    { href: "/about", label: lang === "pt" ? "Sobre" : "About" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="mr-4 hidden items-center md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="hidden font-headline text-lg font-extrabold sm:inline-block">
              EstudosLSO
            </span>
          </Link>
          <nav className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{lang === "pt" ? "Alternar menu" : "Toggle menu"}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-border/60 bg-background/90 pr-0 backdrop-blur-md">
              <Link href="/" className="mr-6 flex items-center space-x-2 px-6">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">EstudosLSO</span>
              </Link>
              <div className="flex flex-col space-y-3 px-4 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-md p-2 text-lg transition-colors hover:text-primary",
                      pathname === link.href ? "bg-muted text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
