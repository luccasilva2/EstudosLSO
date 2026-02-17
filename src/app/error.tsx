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
      <h1 className="text-4xl font-headline font-bold mb-2">404 - Código Não Encontrado</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        Opa! Parece que esta página tem um erro de sintaxe ou não existe. Vamos te colocar de volta nos trilhos.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Tentar Novamente</Button>
        <Link href="/">
          <Button variant="outline">Ir para o Início</Button>
        </Link>
      </div>
    </div>
  );
}
