"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/certificates";
import { useLanguage } from "@/components/language-provider";
import { t } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

export default function CertificatesPage() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-gradient">{lang === "pt" ? "Certificados" : "Certificates"}</span>
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {lang === "pt"
            ? "Visualize seus certificados diretamente no site com uma experiência mais fluida."
            : "View your certificates directly on the website with a smoother experience."}
        </p>
      </motion.header>

      <p className="text-xs text-muted-foreground">
        {lang === "pt" ? "Sem botão de download na interface." : "No download button in the interface."}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {certificates.map((certificate, index) => {
          const missingFile = certificate.pdfUrl === "#";

          return (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="shine-card h-full border-primary/20 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-headline text-lg">{t(certificate.title, lang)}</CardTitle>
                    <Badge className="border-primary/20 bg-primary/15 text-primary">{certificate.issuer}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="outline" disabled={missingFile}>
                        <Eye className="mr-2 h-4 w-4" />
                        {lang === "pt" ? "Ver certificado" : "View certificate"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl overflow-hidden border-border/70 bg-background/95 p-0 backdrop-blur-md">
                      <DialogHeader className="border-b border-border/70 p-4">
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
                      {lang === "pt" ? "Arquivo ainda não configurado." : "File not configured yet."}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
