"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/types";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { lang } = useLanguage();

  return (
    <Card className="shine-card flex h-full flex-col border-primary/20 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-xl mb-2">{t(course.title, lang)}</CardTitle>
          <Badge
            variant={course.source === "IFC" ? "default" : "secondary"}
            className="border-primary/30 bg-primary/20 text-primary"
          >
            {course.source}
          </Badge>
        </div>
        <CardDescription>{t(course.description, lang)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4 mr-2" />
          <span>
            {course.files.length}{" "}
            {lang === "pt"
              ? course.files.length === 1
                ? "material"
                : "materiais"
              : course.files.length === 1
                ? "resource"
                : "resources"}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/courses" className="w-full">
          <Button variant="outline" className="group w-full">
            {lang === "pt" ? "Ver curso" : "View course"}
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
