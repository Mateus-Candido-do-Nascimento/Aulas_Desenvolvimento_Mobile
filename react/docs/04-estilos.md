# 📖 Capítulo 4: Migração de Estilos

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Migrar** todos os estilos CSS do HTML original
- **Entender** como organizar CSS no React
- **Manter** responsividade e acessibilidade
- **Aplicar** variáveis CSS e design system

## 🎨 Estratégia de Migração CSS

### **Abordagem Escolhida: CSS Global**
```
src/
├── index.css    # Estilos globais (migrados do styles.css)
├── App.css      # Estilos específicos do App
└── components/  # Componentes (sem CSS próprio)
```

**Por que CSS Global?**
- ✅ **Migração mais fácil** - copia direto do HTML original
- ✅ **Menos complexidade** - não precisa de CSS Modules
- ✅ **Manutenção simples** - um arquivo CSS principal
- ✅ **Compatibilidade** - funciona com qualquer setup

## 📋 Análise do CSS Original

### **1. Variáveis CSS (Design System)**
```css
:root {
  /* Cores */
  --color-primary: #034732;        /* Verde principal */
  --color-primary-dark: #025037;   /* Verde escuro */
  --color-primary-light: #10b981;  /* Verde claro */
  --color-secondary: #6b7280;      /* Cinza secundário */
  --color-accent: #f59e0b;          /* Laranja destaque */
  
  /* Cores neutras */
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-black: #000000;
}
```

**Explicação do Design System:**
- **Cores primárias** - identidade visual da marca
- **Escala de cinzas** - 50 (mais claro) até 900 (mais escuro)
- **Cores de estado** - success, warning, error, info
- **Consistência** - mesma paleta em todo projeto

### **2. Tipografia**
```css
:root {
  /* Fontes */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  
  /* Escala tipográfica */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  
  /* Pesos de fonte */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

**Por que escala tipográfica?**
- **Hierarquia visual** - títulos maiores que texto
- **Consistência** - mesmos tamanhos em todo projeto
- **Responsividade** - fácil ajustar para mobile
- **Acessibilidade** - tamanhos legíveis

### **3. Espaçamentos**
```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 2.5rem;   /* 40px */
  --space-3xl: 3rem;     /* 48px */
  --space-4xl: 4rem;     /* 64px */
  --space-5xl: 5rem;     /* 80px */
}
```

**Sistema de Espaçamentos:**
- **Base 4px** - todos os espaços são múltiplos de 4
- **Escala harmônica** - xs, sm, md, lg, xl, 2xl, etc.
- **Consistência** - mesmo espaçamento em elementos similares
- **Manutenção** - mudança em um lugar afeta todo projeto

## 🏗️ Estrutura do CSS Migrado

### **1. Reset e Base**
```css
/* ===== RESET E BASE ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-gray-900);
  background-color: var(--color-white);
  margin: 0;
  padding: 0 0 0 var(--space-xs);
  min-height: 100vh;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Explicação do Reset:**
- **box-sizing: border-box** - padding e border incluídos no width
- **margin: 0, padding: 0** - remove espaçamentos padrão
- **scroll-behavior: smooth** - scroll suave entre âncoras
- **font-smoothing** - texto mais nítido em telas

### **2. Tipografia**
```css
/* ===== TIPOGRAFIA ===== */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-gray-900);
  margin-bottom: var(--space-md);
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
h5 { font-size: var(--font-size-lg); }
h6 { font-size: var(--font-size-base); }

p {
  margin-bottom: var(--space-md);
  color: var(--color-gray-700);
}
```

**Hierarquia Tipográfica:**
- **h1** - 36px (títulos principais)
- **h2** - 30px (seções)
- **h3** - 24px (subseções)
- **h4** - 20px (subtítulos)
- **h5** - 18px (destaques)
- **h6** - 16px (texto normal)

### **3. Links e Interatividade**
```css
a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover,
a:focus {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

a:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Estados de Link:**
- **Normal** - cor primária, sem sublinhado
- **Hover** - cor mais escura, com sublinhado
- **Focus** - outline para acessibilidade
- **Transition** - animação suave entre estados

## 🧩 Componentes CSS

### **1. Header/Navegação**
```css
.header {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
  padding: var(--space-md) 0;
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.nav__container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
}

.nav__menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style: none;
  gap: 1rem;
  justify-self: start;
}
```

**Layout do Header:**
- **position: sticky** - header fixo no topo
- **grid-template-columns: auto 1fr auto** - logo | menu | ações
- **z-index** - sobrepõe outros elementos
- **border-bottom** - separação visual

### **2. Botões**
```css
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  text-align: left;
}

.btn--primary {
  background-color: #034732;
  color: white;
  border: 2px solid #034732;
  height: 50px;
  width: 150px;
  justify-self: left;
  white-space: nowrap;
}

.btn--secondary {
  padding: 0.5rem 1rem;
  background-color: #f9fafb;
  color: #034732;
  border: 1px solid #034732;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
}
```

**Sistema de Botões:**
- **Base (.btn)** - estilos comuns
- **Modificadores (.btn--primary)** - variações
- **Estados** - hover, focus, active
- **Acessibilidade** - cursor pointer, focus visible

### **3. Cards e Layout**
```css
.card-vertical {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.card-vertical__image {
  width: 100%;
  height: 140px;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
}

.post-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
}
```

**Sistema de Cards:**
- **BEM Methodology** - Block__Element--Modifier
- **Consistência** - mesmo padding, border-radius
- **Flexibilidade** - diferentes layouts (vertical, horizontal)

## 📱 Responsividade

### **Breakpoints**
```css
:root {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1440px;
}
```

### **Mobile First (768px)**
```css
@media (max-width: 768px) {
  .nav__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
  
  .nav__menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.5rem;
    justify-items: center;
  }
  
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .popular-categories__grid {
    grid-template-columns: 1fr;
  }
  
  .all-categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Estratégia Mobile First:**
- **Base** - estilos para mobile
- **Media queries** - ajustes para telas maiores
- **max-width** - aplica estilos até determinado tamanho
- **Grid responsivo** - colunas se adaptam ao espaço

### **Tablet (1024px)**
```css
@media (max-width: 1024px) {
  .main {
    padding: 0 0.5rem;
  }
  
  .nav__container {
    padding: 0 0.5rem;
  }
  
  .hero__container {
    gap: 2rem;
  }
  
  .hero__title {
    font-size: 2rem;
    white-space: normal;
  }
}
```

### **Mobile (480px)**
```css
@media (max-width: 480px) {
  .main {
    padding: 0 0.25rem;
  }
  
  .nav__container {
    padding: 0 0.25rem;
  }
  
  .hero__title {
    font-size: 1.5rem;
    white-space: normal;
  }
  
  .all-categories__grid {
    grid-template-columns: 1fr;
  }
}
```

## ♿ Acessibilidade

### **Focus Management**
```css
.btn:focus-visible, 
.search-box__btn:focus-visible, 
.category-tag:focus-visible, 
.footer__link:focus-visible, 
.nav__link:focus-visible, 
.form-control:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Por que focus-visible?**
- **Navegação por teclado** - usuários que usam Tab
- **Outline consistente** - mesma aparência em todos os elementos
- **Offset** - separação do elemento para melhor visibilidade

### **Skip Link**
```css
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  background: var(--color-white);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  padding: var(--space-sm) var(--space-md);
  z-index: var(--z-sticky);
}

.skip-link:focus { 
  left: var(--space-md); 
  top: var(--space-md); 
}
```

**Skip Link:**
- **Navegação por teclado** - pula para conteúdo principal
- **Escondido por padrão** - left: -9999px
- **Visível no focus** - aparece quando usuário navega por Tab
- **Acessibilidade** - melhora experiência para usuários com deficiência

## 🎨 Utilitários CSS

### **Screen Reader Only**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

**Uso:**
```html
<label htmlFor="search" className="sr-only">Buscar</label>
<input id="search" type="search" />
```

### **Placeholder**
```css
.placeholder { 
  background-color: var(--color-gray-100); 
  border: 1px dashed var(--color-gray-300); 
  border-radius: var(--border-radius-md); 
  height: 120px; 
}
```

**Uso:**
```html
<div className="placeholder" aria-label="Imagem do post"></div>
```

## 🎓 Conceitos Importantes

### **1. CSS Custom Properties (Variáveis)**
```css
:root {
  --color-primary: #034732;
}

.elemento {
  color: var(--color-primary);
  /* Fallback se variável não existir */
  color: var(--color-primary, #000000);
}
```

### **2. BEM Methodology**
```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__image { }

/* Modifier */
.card--featured { }
.card--small { }
```

### **3. Mobile First**
```css
/* Base: mobile */
.container {
  padding: 1rem;
}

/* Tablet e acima */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop e acima */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Criar** os componentes React
2. **Entender** como JSX funciona
3. **Implementar** navegação
4. **Conectar** estilos com componentes

---

**🎯 Próximo:** [Componentes React](./05-componentes.md)
