"use client";

import { certificates } from "@/lib/certificates";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

export default function CertificatesPage() {
  const { lang } = useLanguage();

  return (
    <div className="fade-in space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline">
          {lang === "pt" ? "Certificados" : "Certificates"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {lang === "pt"
            ? "Visualize seus certificados direto no site."
            : "View your certificates directly on the website."}
        </p>
      </header>

      <p className="text-xs text-muted-foreground">
        {lang === "pt"
          ? "Sem botao de download na interface."
          : "No download button in the interface."}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((certificate) => {
          const missingFile = certificate.pdfUrl === "#";

          return (
            <Card key={certificate.id} className="bg-card/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-headline text-lg">{t(certificate.title, lang)}</CardTitle>
                  <Badge>{certificate.issuer}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full"
                      variant="outline"
                      disabled={missingFile}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {lang === "pt" ? "Ver certificado" : "View certificate"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 overflow-hidden">
                    <DialogHeader className="p-4 border-b">
                      <DialogTitle>{t(certificate.title, lang)}</DialogTitle>
                    </DialogHeader>
                    <iframe
                      src={`${certificate.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                      className="h-[75vh] w-full"
                      title={t(certificate.title, lang)}
                    />
                  </DialogContent>
                </Dialog>

                {missingFile && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {lang === "pt"
                      ? "Arquivo ainda nao configurado."
                      : "File not configured yet."}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
