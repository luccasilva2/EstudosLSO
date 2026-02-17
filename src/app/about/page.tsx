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
        <h1 className="text-4xl font-bold font-headline">About Me</h1>
        <p className="text-muted-foreground mt-2">The developer behind the screen.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">Lucca - Aspiring Developer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Lucca, a programming enthusiast with a passion for building clean, efficient, and visually appealing web applications. This website, StudyForge, is a personal project I created to organize my study materials from online courses.
            </p>
            <p>
              My journey into programming started with a curiosity for how things work, and it has since grown into a full-fledged passion for web development. I enjoy tackling challenges, learning new technologies, and bringing ideas to life through code. This project is a testament to that, built with some of my favorite tools.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">Skills & Tech</CardTitle>
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
          <CardTitle className="font-headline">A Glimpse into the Code</CardTitle>
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
