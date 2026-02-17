# Arquivos DOCX dos cursos

Coloque aqui os arquivos `.docx` de cada curso.

Sugestao de organizacao:

- `public/docs/<id-do-curso>/arquivo.docx`

Depois, no `src/lib/data.ts`, atualize o campo `url` do arquivo para:

- `/docs/<id-do-curso>/arquivo.docx`

Exemplo:

- `{ name: "Resumo.docx", type: "docx", url: "/docs/ifc-web-dev/resumo.docx" }`
