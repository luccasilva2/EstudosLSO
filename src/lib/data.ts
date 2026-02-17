import type { Course } from "./types";

type Source = "IFC" | "MEC";

function makeCourse(
  id: string,
  ptTitle: string,
  enTitle: string,
  source: Source,
  ptCategory: string,
  enCategory: string,
  progress?: number
): Course {
  const hasProgress = typeof progress === "number";

  return {
    id,
    title: {
      pt: ptTitle,
      en: enTitle,
    },
    source,
    description: {
      pt: hasProgress
        ? `Categoria: ${ptCategory}. Progresso: ${progress}%.`
        : `Categoria: ${ptCategory}.`,
      en: hasProgress
        ? `Category: ${enCategory}. Progress: ${progress}%.`
        : `Category: ${enCategory}.`,
    },
    files: [
      { name: "Plano-de-estudos.docx", type: "docx", url: "#" },
      { name: "Material de referencia.pdf", type: "pdf", url: "#" },
    ],
  };
}

export const courses: Course[] = [
  makeCourse(
    "ifc-admin-bd-2026a",
    "Administrador de Banco de Dados - Turma 2026A",
    "Database Administrator - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-automacao-sistemas-2026a",
    "Automacao de Sistemas - Turma 2026A",
    "Systems Automation - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-bd-fundamentos-2026a",
    "Banco de Dados 1: fundamentos - Turma 2026A",
    "Database 1: Fundamentals - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-oracle-plsql-2026a",
    "Banco de Dados: Oracle PL/SQL - Turma 2026A",
    "Database: Oracle PL/SQL - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-bibliotecas-graficas-jogos-2026a",
    "Bibliotecas Graficas no contexto dos Jogos Digitais - Turma 2026A",
    "Graphics Libraries in the Context of Digital Games - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-css3-estilo-2026a",
    "CSS3: Estilizando Paginas Web com Estilo - Turma 2026A",
    "CSS3: Styling Web Pages - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-php-poo-2026a",
    "Desenvolvimento Backend com PHP: POO e MVC - Turma 2026A",
    "Backend Development with PHP: OOP and MVC - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-logica-multiplos-valores-2026a",
    "Logica de Programacao: multiplos valores e decisoes - Turma 2026A",
    "Programming Logic: Multiple Values and Decisions - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-marketing-conceitos-2026a",
    "Marketing: conceitos e estrategias - Turma 2026A",
    "Marketing: Concepts and Strategies - Class 2026A",
    "IFC",
    "Gestao e Negocios",
    "Business and Management"
  ),
  makeCourse(
    "ifc-programador-web-2026a",
    "Programador Web - Turma 2026A",
    "Web Developer - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-raspberry-basico-iot-2026a",
    "Raspberry PI Basico para IoT - Turma 2026A",
    "Raspberry PI Basics for IoT - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "ifc-raspberry-aplicacoes-2026a",
    "Raspberry PI e Aplicacoes - Turma 2026A",
    "Raspberry PI and Applications - Class 2026A",
    "IFC",
    "Informatica",
    "IT"
  ),
  makeCourse(
    "mec-arte-falar-publico-2026a",
    "A arte de falar em publico - Turma 2026A",
    "The Art of Public Speaking - Class 2026A",
    "MEC",
    "Producao Cultural e Design",
    "Cultural Production and Design",
    100
  ),
  makeCourse(
    "mec-desenvolvimento-pessoal-interpessoal-2026a",
    "Desenvolvimento Pessoal e Interpessoal - Turma 2026A",
    "Personal and Interpersonal Development - Class 2026A",
    "MEC",
    "Gestao e Negocios",
    "Business and Management",
    0
  ),
  makeCourse(
    "mec-gestao-marketing-2026a",
    "Gestao de Marketing - Turma 2026A",
    "Marketing Management - Class 2026A",
    "MEC",
    "Gestao e Negocios",
    "Business and Management",
    0
  ),
  makeCourse(
    "mec-marketing-digital-redes-2026a",
    "Marketing Digital e Redes Sociais - Turma 2026A",
    "Digital Marketing and Social Media - Class 2026A",
    "MEC",
    "Gestao e Negocios",
    "Business and Management",
    0
  ),
  makeCourse(
    "mec-marketing-eventos-2026a",
    "Marketing em Eventos - Turma 2026A",
    "Event Marketing - Class 2026A",
    "MEC",
    "Turismo, Hospitalidade e Lazer",
    "Tourism, Hospitality and Leisure",
    0
  ),
  makeCourse(
    "mec-marketing-empresarial-pessoal-2026a",
    "Marketing Empresarial e Pessoal - Turma 2026A",
    "Business and Personal Marketing - Class 2026A",
    "MEC",
    "Gestao e Negocios",
    "Business and Management",
    0
  ),
  makeCourse(
    "mec-marketing-pessoal-2026a",
    "Marketing Pessoal - Turma 2026A",
    "Personal Marketing - Class 2026A",
    "MEC",
    "Gestao e Negocios",
    "Business and Management",
    0
  ),
  makeCourse(
    "mec-softwares-seguranca-info-2026a",
    "Softwares de Seguranca da Informacao - Turma 2026A",
    "Information Security Software - Class 2026A",
    "MEC",
    "Informacao e Comunicacao",
    "Information and Communication",
    0
  ),
];
