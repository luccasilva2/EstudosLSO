"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { courses } from "@/lib/data";
import type { CourseFile, Course } from "@/lib/types";
import { FileIcon } from "./file-icon";

interface SearchResult {
  file: CourseFile;
  course: Course;
}

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const performSearch = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lowerCaseQuery = searchTerm.toLowerCase();
    const allFiles: SearchResult[] = [];

    courses.forEach((course) => {
      course.files.forEach((file) => {
        if (file.name.toLowerCase().includes(lowerCaseQuery)) {
          allFiles.push({ file, course });
        }
      });
    });

    setResults(allFiles);
    setIsOpen(allFiles.length > 0);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [query, performSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search files..."
            className="w-full pl-9"
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-4 text-sm font-medium border-b">
          Found {results.length} {results.length === 1 ? 'result' : 'results'}.
        </div>
        <div className="max-h-80 overflow-y-auto">
          {results.map(({ file, course }, index) => (
            <div key={`${course.id}-${file.name}-${index}`} className="p-4 border-b last:border-none">
              <div className="flex items-center gap-3">
                <FileIcon type={file.type} className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{course.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
