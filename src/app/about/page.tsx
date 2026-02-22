"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Firebase",
  "Vercel",
];

const fakeCode = `
function getMotivation() {
  const COFFEE_MUGS = 5;
  let motivationLevel = 0;

  for (let i = 0; i < COFFEE_MUGS; i++) {
    motivationLevel += 20;
  }

  if (motivationLevel === 100) {
    return "Ready to code!";
  } else {
    return "Need more coffee...";
  }
}

console.log(getMotivation());
// Expected output: "Ready to code!"
`;

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-12">
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-gradient">{lang === "pt" ? "Sobre" : "About"}</span>{" "}
          {lang === "pt" ? "mim" : "me"}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {lang === "pt" ? "O desenvolvedor por trás da tela." : "The developer behind the screen."}
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <Card className="border-primary/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                {lang === "pt" ? "Lucca - Desenvolvedor aspirante" : "Lucca - Aspiring developer"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                {lang === "pt"
                  ? "Olá! Sou Lucca, um entusiasta da programação com paixão por construir aplicações web limpas, eficientes e visualmente atraentes. Este site, EstudosLSO, é um projeto pessoal criado para organizar meus materiais de estudo de cursos online."
                  : "Hi! I'm Lucca, a programming enthusiast passionate about building clean, efficient, and visually attractive web applications. This website, EstudosLSO, is a personal project I created to organize my study resources from online courses."}
              </p>
              <p>
                {lang === "pt"
                  ? "Minha jornada na programação começou com a curiosidade de como as coisas funcionam e se tornou paixão total por desenvolvimento web. Gosto de enfrentar desafios, aprender novas tecnologias e transformar ideias em produto através do código."
                  : "My programming journey started with curiosity about how things work and has become a full passion for web development. I enjoy facing challenges, learning new technologies, and turning ideas into products through code."}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Card className="h-full border-primary/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                {lang === "pt" ? "Habilidades e tecnologias" : "Skills and technologies"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <Card className="border-primary/20 bg-card/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              {lang === "pt" ? "Uma olhada no código" : "A look at the code"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-primary/20 bg-background/60 p-4">
              <pre className="font-code text-sm text-accent">
                <code>{fakeCode.trim()}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
