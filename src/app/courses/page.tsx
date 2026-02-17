"use client";

import { useState } from "react";
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

  return (
    <div className="fade-in space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline">
          {lang === "pt" ? "Catalogo de cursos" : "Course catalog"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {lang === "pt"
            ? "Todos os meus materiais de estudo em um so lugar."
            : "All my study resources in one place."}
        </p>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ifc">{lang === "pt" ? "Cursos IFC" : "IFC Courses"}</TabsTrigger>
          <TabsTrigger value="mec">{lang === "pt" ? "Cursos MEC" : "MEC Courses"}</TabsTrigger>
        </TabsList>
        <TabsContent value="ifc">
          <div className="space-y-4 mt-4">
            {ifcCourses.map((course) => (
              <Card key={course.id} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline">{t(course.title, lang)}</CardTitle>
                  <CardDescription>{t(course.description, lang)}</CardDescription>
                </CardHeader>
                <Accordion type="single" collapsible className="w-full px-6 pb-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{lang === "pt" ? "Ver materiais" : "View resources"}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {course.files.map((file, index) => (
                          <li key={index}>
                            <Link href={file.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors group">
                              <FileIcon type={file.type} className="h-5 w-5 text-primary" />
                              <span className="flex-1 group-hover:text-primary transition-colors">{file.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="mec">
          <div className="space-y-4 mt-4">
            {mecCourses.map((course) => (
               <Card key={course.id} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline">{t(course.title, lang)}</CardTitle>
                  <CardDescription>{t(course.description, lang)}</CardDescription>
                </CardHeader>
                <Accordion type="single" collapsible className="w-full px-6 pb-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{lang === "pt" ? "Ver materiais" : "View resources"}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {course.files.map((file, index) => (
                          <li key={index}>
                            <Link href={file.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors group">
                              <FileIcon type={file.type} className="h-5 w-5 text-primary" />
                              <span className="flex-1 group-hover:text-primary transition-colors">{file.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
