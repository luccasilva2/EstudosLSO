export type FileType = 'pdf' | 'video' | 'link' | 'notes';

export interface CourseFile {
  name: string;
  type: FileType;
  url: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  source: 'IFC' | 'MEC';
  files: CourseFile[];
}
