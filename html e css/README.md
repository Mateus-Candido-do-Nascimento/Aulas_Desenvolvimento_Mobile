# HABIT – Exercício de Interfaces (HTML/CSS)

Este projeto reconstrói telas estáticas a partir de imagens, focando em semântica, responsividade e acessibilidade.

## Telas implementadas
- `index.html` (Início)
- `categoria-techno.html` (Categoria)
- `destaques.html` (Destaques)
- `assinar.html` (Assinar newsletter)
- `login.html` (Entrar)
- `criar-conta.html` (Criar conta)
- `buscar-resultados.html` (Resultados de busca)
- `perfil.html` (Perfil do usuário)
- `admin-categorias.html`
- `admin-criar-post.html`
- `admin-escolhas.html`
- `admin-fila-revisao.html`
- `admin-comentarios.html`
- `admin-usuarios.html`

## Decisões de layout
- CSS único em `css/styles.css` com variáveis no `:root` para cores, tipografia, espaçamentos, bordas e sombras.
- Componentes reutilizáveis: `panel`, `admin-layout`, `stats`/`stat-card`, `cards-grid`, `card-vertical`, `post-card`, `form-control`, `table`, helpers de botões (`btn--success`, `btn--danger`, `btn--outline`).
- Layout com Grid/Flex: grids para cartões, colunas do admin e listas; flex em cartões horizontais.

## Breakpoints
- 1024px, 768px, 480px (cobrem desktop, tablets e celulares). Implementação atual usa media queries com `max-width`.

## Acessibilidade
- Semântica com `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- Títulos hierárquicos consistentes.
- Formulários com `label` associado via `for/id` nos campos.
- Foco visível consistente com `:focus-visible` (outline 2px e offset).
- Contraste: paleta atende WCAG AA.
- Placeholders decorativos; ao usar `<img>`, incluir `alt` descritivo.

## Estrutura de pastas
```
.
├─ css/
│  └─ styles.css
├─ assets/
│  └─ .gitkeep (placeholder para imagens futuras)
├─ *.html
└─ README.md
```

## Como visualizar
Abra qualquer arquivo `.html` no navegador.

## Observações
- Projeto de design estático (sem navegação funcional).
- Fácil migrar para mobile-first trocando media queries para `@media (min-width: ...)`.
