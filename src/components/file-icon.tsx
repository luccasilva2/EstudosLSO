import { FileText, Video, Link as LinkIcon, NotebookText, LucideProps } from "lucide-react";
import type { FileType } from "@/lib/types";

interface FileIconProps extends LucideProps {
  type: FileType;
}

export function FileIcon({ type, ...props }: FileIconProps) {
  switch (type) {
    case 'pdf':
      return <FileText {...props} />;
    case 'video':
      return <Video {...props} />;
    case 'link':
      return <LinkIcon {...props} />;
    case 'notes':
      return <NotebookText {...props} />;
    default:
      return <FileText {...props} />;
  }
}
