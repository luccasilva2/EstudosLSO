# Certificados (PDF)

Coloque seus certificados PDF nesta pasta.

Exemplo de caminho:

- `public/certificates/ifc-admin-bd-2026a.pdf`

No arquivo `src/lib/certificates.ts`, atualize o campo `pdfUrl`:

- adicione no objeto `certificatePdfUrls`:
- `"ifc-admin-bd-2026a": "/certificates/ifc-admin-bd-2026a.pdf"`

Observacao:

- O site abre o PDF incorporado para visualizacao.
- Nao existe botao de download no site, mas navegadores ainda podem permitir salvar/imprimir.
