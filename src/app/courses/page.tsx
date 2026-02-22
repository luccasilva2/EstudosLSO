"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { FileIcon } from "@/components/file-icon";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

export default function CoursesPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("ifc");

  const ifcCourses = courses.filter((c) => c.source === "IFC");
  const mecCourses = courses.filter((c) => c.source === "MEC");

  const sectionTitle = lang === "pt" ? "Catálogo de cursos" : "Course catalog";

  return (
    <div className="space-y-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-gradient">{sectionTitle.split(" ")[0]}</span> {sectionTitle.split(" ").slice(1).join(" ")}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {lang === "pt"
            ? "Todos os meus materiais de estudo em um lugar único, organizados por origem e curso."
            : "All my study resources in one place, organized by source and course."}
        </p>
      </motion.header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 border border-border/70 bg-card/60 backdrop-blur">
          <TabsTrigger value="ifc">{lang === "pt" ? "Cursos IFC" : "IFC Courses"}</TabsTrigger>
          <TabsTrigger value="mec">{lang === "pt" ? "Cursos MEC" : "MEC Courses"}</TabsTrigger>
        </TabsList>

        <TabsContent value="ifc" className="mt-5">
          <div className="space-y-5">
            {ifcCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="shine-card border-primary/20 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{t(course.title, lang)}</CardTitle>
                    <CardDescription>{t(course.description, lang)}</CardDescription>
                  </CardHeader>
                  <Accordion type="single" collapsible className="w-full px-6 pb-4">
                    <AccordionItem value="resources">
                      <AccordionTrigger>{lang === "pt" ? "Ver materiais" : "View resources"}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-2">
                          {course.files.map((file, fileIndex) => (
                            <li key={fileIndex}>
                              <Link
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                              >
                                <FileIcon type={file.type} className="h-5 w-5 text-primary" />
                                <span className="flex-1 transition-colors group-hover:text-primary">{file.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mec" className="mt-5">
          <div className="space-y-5">
            {mecCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="shine-card border-primary/20 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{t(course.title, lang)}</CardTitle>
                    <CardDescription>{t(course.description, lang)}</CardDescription>
                  </CardHeader>
                  <Accordion type="single" collapsible className="w-full px-6 pb-4">
                    <AccordionItem value="resources">
                      <AccordionTrigger>{lang === "pt" ? "Ver materiais" : "View resources"}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-2">
                          {course.files.map((file, fileIndex) => (
                            <li key={fileIndex}>
                              <Link
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
                              >
                                <FileIcon type={file.type} className="h-5 w-5 text-primary" />
                                <span className="flex-1 transition-colors group-hover:text-primary">{file.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
