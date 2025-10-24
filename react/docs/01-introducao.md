# 📖 Capítulo 1: Introdução ao Projeto

## 🎯 O que vamos aprender?

Neste capítulo você vai entender:
- **Por que migrar** de HTML/CSS para React
- **Estrutura do projeto original** HTML/CSS
- **Benefícios** da migração para React
- **Visão geral** do que será construído

## 🔍 Análise do Projeto Original

### Estrutura HTML/CSS Original
```
html e css/
├── index.html              # Página inicial
├── login.html              # Página de login
├── destaques.html          # Página de destaques
├── assinar.html            # Newsletter
├── perfil.html             # Perfil do usuário
├── admin-categorias.html   # Admin - categorias
├── admin-criar-post.html   # Admin - criar post
├── admin-escolhas.html     # Admin - escolhas
├── admin-usuarios.html     # Admin - usuários
├── admin-fila-revisao.html # Admin - fila revisão
├── admin-comentarios.html  # Admin - comentários
├── categoria-techno.html    # Categoria específica
├── buscar-resultados.html  # Resultados de busca
├── criar-conta.html        # Cadastro
└── css/
    └── styles.css          # Estilos únicos
```

### 🎨 Características do Design Original

#### **Paleta de Cores**
```css
:root {
  --color-primary: #034732;      /* Verde escuro principal */
  --color-primary-dark: #025037; /* Verde mais escuro */
  --color-primary-light: #10b981; /* Verde claro */
  --color-secondary: #6b7280;     /* Cinza secundário */
  --color-accent: #f59e0b;       /* Laranja de destaque */
}
```

#### **Sistema de Tipografia**
```css
:root {
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
}
```

#### **Sistema de Espaçamentos**
```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 2.5rem;   /* 40px */
  --space-3xl: 3rem;     /* 48px */
}
```

## 🤔 Por que Migrar para React?

### **Problemas do HTML/CSS Estático:**
1. **Código duplicado** - Header e Footer repetidos em cada página
2. **Manutenção difícil** - Mudança em um lugar = alterar em 12 arquivos
3. **Navegação estática** - Sem roteamento real entre páginas
4. **Sem interatividade** - Apenas HTML/CSS puro
5. **Escalabilidade limitada** - Difícil adicionar funcionalidades

### **Benefícios do React:**
1. **Componentes reutilizáveis** - Header/Footer uma vez, usado em todas as páginas
2. **Roteamento dinâmico** - Navegação real entre páginas
3. **Estado e interatividade** - Formulários funcionais, validações
4. **Manutenção fácil** - Mudança em um componente = atualiza em toda aplicação
5. **Escalabilidade** - Fácil adicionar novas funcionalidades
6. **Performance** - Carregamento otimizado
7. **Ecosystem** - Bibliotecas e ferramentas modernas

## 🎯 O que Vamos Construir

### **Estrutura React Final:**
```
react/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navegação principal
│   │   └── Footer.jsx        # Rodapé
│   ├── pages/
│   │   ├── Home.jsx          # Página inicial
│   │   ├── Login.jsx         # Login
│   │   ├── Destaques.jsx     # Destaques
│   │   ├── Assinar.jsx       # Newsletter
│   │   ├── Perfil.jsx        # Perfil usuário
│   │   ├── BuscarResultados.jsx # Busca
│   │   ├── CategoriaTechno.jsx  # Categoria
│   │   ├── CriarConta.jsx    # Cadastro
│   │   └── Admin*.jsx        # 6 páginas admin
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos do app
│   ├── index.css             # Estilos globais
│   └── main.jsx              # Ponto de entrada
├── docs/                     # Este tutorial
└── package.json              # Dependências
```

### **Funcionalidades Implementadas:**
- ✅ **14 páginas** migradas do HTML original
- ✅ **Roteamento** com React Router
- ✅ **Navegação** funcional entre páginas
- ✅ **Estilos idênticos** ao original
- ✅ **Responsividade** mantida
- ✅ **Acessibilidade** preservada
- ✅ **Componentes reutilizáveis**

## 🎓 Conceitos que Você Vai Aprender

### **React Fundamentals:**
- **JSX** - Sintaxe que mistura HTML com JavaScript
- **Componentes** - Funções que retornam elementos UI
- **Props** - Dados passados entre componentes
- **Estado** - Dados que podem mudar no componente
- **Hooks** - Funções especiais do React (useState, useEffect)

### **React Router:**
- **BrowserRouter** - Roteador principal
- **Routes/Route** - Definição de rotas
- **Link/NavLink** - Navegação entre páginas
- **useLocation** - Hook para acessar rota atual

### **Estrutura de Projeto:**
- **Organização de pastas** - components/, pages/, etc.
- **Import/Export** - Como conectar arquivos
- **CSS Modules** - Estilos isolados por componente
- **Responsive Design** - Mobile-first approach

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Configurar** o ambiente de desenvolvimento
2. **Criar** a estrutura base do projeto React
3. **Instalar** as dependências necessárias
4. **Configurar** o Vite (build tool)

---

**🎯 Próximo:** [Configuração Inicial](./02-configuracao.md)
