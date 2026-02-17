import type { Course } from './types';

export const courses: Course[] = [
  {
    id: 'ifc-web-dev',
    title: 'Desenvolvimento Web Básico',
    source: 'IFC',
    description: 'Curso introdutório de desenvolvimento web com HTML, CSS e JavaScript.',
    files: [
      { name: 'Apostila Completa.pdf', type: 'pdf', url: '#' },
      { name: 'Aula 1 - Introdução', type: 'video', url: '#' },
      { name: 'Links Úteis', type: 'link', url: 'https://developer.mozilla.org/' },
    ],
  },
  {
    id: 'mec-data-science',
    title: 'Fundamentos de Ciência de Dados',
    source: 'MEC',
    description: 'Aprenda os conceitos essenciais de ciência de dados, estatística e Python.',
    files: [
      { name: 'Guia de Python para Dados.pdf', type: 'pdf', url: '#' },
      { name: 'Minhas Anotações', type: 'notes', url: '#' },
      { name: 'Dataset de Exemplo', type: 'link', url: '#' },
    ],
  },
  {
    id: 'ifc-logic',
    title: 'Lógica de Programação',
    source: 'IFC',
    description: 'Construa uma base sólida em lógica para resolver problemas de programação.',
    files: [
      { name: 'Exercícios Resolvidos.pdf', type: 'pdf', url: '#' },
      { name: 'Ferramenta de Fluxograma', type: 'link', url: '#' },
    ],
  },
  {
    id: 'mec-digital-literacy',
    title: 'Letramento Digital',
    source: 'MEC',
    description: 'Habilidades essenciais para o uso de tecnologias digitais no dia a dia.',
    files: [
      { name: 'Cartilha de Segurança.pdf', type: 'pdf', url: '#' },
    ],
  },
  {
    id: 'ifc-react-native',
    title: 'Introdução ao React Native',
    source: 'IFC',
    description: 'Desenvolva aplicativos móveis para Android e iOS com React Native.',
    files: [
        { name: 'Configuração de Ambiente.pdf', type: 'pdf', url: '#' },
        { name: 'Expo.io - Documentação', type: 'link', url: 'https://docs.expo.dev/' },
        { name: 'Playlist de Aulas', type: 'video', url: '#' },
    ],
  },
];
