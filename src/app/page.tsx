"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

import { courses } from "@/lib/data";
import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { lang } = useLanguage();
  const featuredCourses = courses.slice(0, 3);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    timeline
      .fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3 })
      .fromTo(subtitleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.7")
      .fromTo(ctaRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.75");
  }, []);

  return (
    <div className="space-y-20 md:space-y-24">
      <section className="relative overflow-hidden py-20 text-center md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h1
            ref={titleRef}
            className="font-headline text-5xl font-extrabold tracking-tighter opacity-0 md:text-7xl"
          >
            <span className="text-gradient">EstudosLSO</span>
          </h1>
          <p
            ref={subtitleRef}
            className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground opacity-0 md:text-xl"
          >
            {lang === "pt"
              ? "Lucca, um desenvolvedor aspirante, organizando e documentando estudos em cursos EAD de alto valor e certificados."
              : "Lucca, an aspiring developer, organizing and documenting studies from high-value certified online courses."}
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap justify-center gap-3 opacity-0">
            <Button asChild className="hero-glow">
              <Link href="/courses">
                {lang === "pt" ? "Explorar cursos" : "Explore courses"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/certificates">{lang === "pt" ? "Ver certificados" : "View certificates"}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">{lang === "pt" ? "Sobre mim" : "About me"}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-gradient">{lang === "pt" ? "Cursos" : "Featured"}</span>{" "}
            {lang === "pt" ? "em destaque" : "courses"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {lang === "pt"
              ? "Uma seleção dos conteúdos mais relevantes para estudo contínuo e evolução técnica."
              : "A selection of the most relevant content for continuous study and technical growth."}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
