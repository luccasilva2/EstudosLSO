import type { LocalizedText } from "./i18n";
import { courses } from "./data";

export interface Certificate {
  id: string;
  title: LocalizedText;
  issuer: "IFC" | "MEC";
  pdfUrl: string;
}

const certificatePdfUrls: Record<string, string> = {
  // Exemplo:
  // "ifc-admin-bd-2026a": "/certificates/ifc-admin-bd-2026a.pdf",
};

export const certificates: Certificate[] = courses.map((course) => ({
  id: course.id,
  title: course.title,
  issuer: course.source,
  pdfUrl: certificatePdfUrls[course.id] ?? "#",
}));
