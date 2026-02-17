"use client";

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
    <div className="fade-in space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline">{lang === "pt" ? "Sobre mim" : "About me"}</h1>
        <p className="text-muted-foreground mt-2">
          {lang === "pt" ? "O desenvolvedor por tras da tela." : "The developer behind the screen."}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">
              {lang === "pt" ? "Lucca - Desenvolvedor aspirante" : "Lucca - Aspiring developer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              {lang === "pt"
                ? "Ola! Sou Lucca, um entusiasta da programacao com paixao por construir aplicacoes web limpas, eficientes e visualmente atraentes. Este site, EstudosLSO, e um projeto pessoal que criei para organizar meus materiais de estudo de cursos online."
                : "Hi! I'm Lucca, a programming enthusiast passionate about building clean, efficient, and visually attractive web applications. This website, EstudosLSO, is a personal project I created to organize my study resources from online courses."}
            </p>
            <p>
              {lang === "pt"
                ? "Minha jornada na programacao comecou com a curiosidade de como as coisas funcionam e, desde entao, tornou-se uma paixao total pelo desenvolvimento web. Gosto de enfrentar desafios, aprender novas tecnologias e dar vida a ideias atraves do codigo. Este projeto e uma prova disso, construido com algumas das minhas ferramentas favoritas."
                : "My programming journey started with curiosity about how things work and has since become a full passion for web development. I enjoy facing challenges, learning new technologies, and bringing ideas to life through code. This project is proof of that, built with some of my favorite tools."}
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">
              {lang === "pt" ? "Habilidades e tecnologias" : "Skills and technologies"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline">{lang === "pt" ? "Uma olhada no codigo" : "A look at the code"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background/50 p-4 rounded-lg">
            <pre className="font-code text-sm text-accent overflow-x-auto">
              <code>{fakeCode.trim()}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
