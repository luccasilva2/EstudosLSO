"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center fade-in">
      <Terminal className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-4xl font-headline font-bold mb-2">404 - Code Not Found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        Oops! Looks like this page has a syntax error or doesn't exist. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Link href="/">
          <Button variant="outline">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
