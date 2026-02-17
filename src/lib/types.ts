import type { LocalizedText } from "./i18n";

export type FileType = "pdf" | "video" | "link" | "notes" | "docx";

export interface CourseFile {
  name: string;
  type: FileType;
  url: string;
}

export interface Course {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  source: "IFC" | "MEC";
  files: CourseFile[];
}
