import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <div className="fade-in space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline">Sobre Mim</h1>
        <p className="text-muted-foreground mt-2">O desenvolvedor por trás da tela.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">Lucca - Desenvolvedor Aspirante</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Olá! Sou Lucca, um entusiasta da programação com paixão por construir aplicações web limpas, eficientes e visualmente atraentes. Este site, EstudosLSO, é um projeto pessoal que criei para organizar meus materiais de estudo de cursos online.
            </p>
            <p>
              Minha jornada na programação começou com a curiosidade de como as coisas funcionam e, desde então, tornou-se uma paixão total pelo desenvolvimento web. Gosto de enfrentar desafios, aprender novas tecnologias e dar vida a ideias através do código. Este projeto é uma prova disso, construído com algumas das minhas ferramentas favoritas.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">Habilidades & Tecnologias</CardTitle>
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
          <CardTitle className="font-headline">Uma Olhada no Código</CardTitle>
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
