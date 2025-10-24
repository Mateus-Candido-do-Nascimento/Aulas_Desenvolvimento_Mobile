# HABIT - React

Este projeto é uma migração do projeto HTML/CSS para React, mantendo o mesmo visual e funcionalidades.

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── AdminCategorias.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Funcionalidades

- ✅ Página inicial com hero section, categorias populares e posts em destaque
- ✅ Página de login com formulário
- ✅ Página de administração de categorias
- ✅ Navegação entre páginas com React Router
- ✅ Estilos CSS migrados mantendo o mesmo visual
- ✅ Responsividade para mobile, tablet e desktop
- ✅ Acessibilidade com ARIA labels e semântica

## Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm run dev
```

3. Acesse no navegador: `http://localhost:5173`

## Páginas disponíveis

### Páginas Públicas
- `/` - Página inicial
- `/login` - Página de login
- `/criar-conta` - Página de criação de conta
- `/destaques` - Página de destaques
- `/assinar` - Página para assinar newsletter
- `/perfil` - Página de perfil do usuário
- `/buscar` - Página de resultados de busca
- `/categoria/techno` - Página da categoria Techno

### Páginas de Administração
- `/admin/categorias` - Administração de categorias
- `/admin/criar-post` - Criar novo post
- `/admin/escolhas` - Escolhas do editor
- `/admin/usuarios` - Administração de usuários
- `/admin/fila-revisao` - Fila de revisão de posts
- `/admin/comentarios` - Fila de comentários

## Tecnologias utilizadas

- React 18
- React Router DOM
- Vite
- CSS com variáveis customizadas
- Design responsivo
