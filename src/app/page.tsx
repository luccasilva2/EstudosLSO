"use client";

import { courses } from "@/lib/data";
import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { lang } = useLanguage();
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="fade-in space-y-16">
      <section className="text-center py-16 md:py-24">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          <span className="bg-gradient-to-br from-primary via-orange-400 to-accent bg-clip-text text-transparent">
            EstudosLSO
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {lang === "pt"
            ? "Lucca, um desenvolvedor aspirante, organizando e documentando estudos nos cursos EAD do IFC e MEC."
            : "Lucca, an aspiring developer, organizing and documenting studies from IFC and MEC online courses."}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/courses">
            <Button>
              {lang === "pt" ? "Explorar cursos" : "Explore courses"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="/certificates">
            <Button variant="outline">
              {lang === "pt" ? "Ver certificados" : "View certificates"}
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">{lang === "pt" ? "Sobre mim" : "About me"}</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">
          {lang === "pt" ? "Cursos em destaque" : "Featured courses"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
