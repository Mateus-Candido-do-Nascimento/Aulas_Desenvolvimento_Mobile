# 📖 Capítulo 7: Responsividade

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Entender** o conceito de mobile-first
- **Implementar** breakpoints responsivos
- **Otimizar** layout para diferentes telas
- **Testar** responsividade

## 📱 Conceito de Mobile-First

### **Definição:**
```css
/* Base: mobile (até 768px) */
.container {
  padding: 1rem;
  grid-template-columns: 1fr;
}

/* Tablet e acima (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop e acima (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### **Por que Mobile-First?**
- **Maioria dos usuários** acessa via mobile
- **Performance** - carrega menos CSS
- **Progressive Enhancement** - melhora para telas maiores
- **Manutenção** - mais fácil ajustar

## 🎨 Sistema de Breakpoints

### **Breakpoints Definidos:**
```css
:root {
  --breakpoint-sm: 480px;   /* Mobile pequeno */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px; /* Desktop */
  --breakpoint-xl: 1440px;  /* Desktop grande */
}
```

### **Implementação:**
```css
/* Mobile First - Base */
.hero__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
}

/* Tablet e acima */
@media (min-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
}
```

## 🏗️ Layout Responsivo por Componente

### **1. Header - Navegação**

#### **Mobile (até 768px):**
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
  
  .nav__actions {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    width: 100%;
  }
  
  .search-box {
    width: 100%;
  }
  
  .search-box__input {
    width: 100%;
  }
}
```

**Explicação:**
- **Grid em coluna** - elementos empilhados
- **Menu responsivo** - botões se adaptam ao espaço
- **Busca full-width** - ocupa toda largura
- **Centralização** - melhor para mobile

#### **Desktop (768px+):**
```css
.nav__container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
}

.nav__menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 1rem;
  justify-self: start;
}
```

**Layout Desktop:**
- **3 colunas** - logo | menu | ações
- **Menu horizontal** - links em linha
- **Busca compacta** - largura fixa

### **2. Hero Section**

#### **Mobile:**
```css
@media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero__title {
    font-size: 1.75rem;
    white-space: normal;
  }
  
  .hero__actions {
    display: flex;
    gap: 0.25rem;
  }
}
```

#### **Desktop:**
```css
.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero__title {
  font-size: 2.5rem;
  white-space: nowrap;
}
```

### **3. Grid de Categorias**

#### **Mobile:**
```css
@media (max-width: 768px) {
  .popular-categories__grid {
    grid-template-columns: 1fr;
  }
  
  .all-categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

#### **Tablet:**
```css
@media (min-width: 768px) and (max-width: 1024px) {
  .popular-categories__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .all-categories__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### **Desktop:**
```css
.popular-categories__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.all-categories__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
```

## 📊 Layout de Admin Responsivo

### **Mobile:**
```css
@media (max-width: 1024px) {
  .admin-layout {
    grid-template-columns: 1fr;
  }
  
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### **Desktop:**
```css
.admin-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-lg);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}
```

## 🎯 Cards Responsivos

### **Sistema de Grid:**
```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Mobile */
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile pequeno */
@media (max-width: 480px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
```

### **Cards Individuais:**
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
```

## 📱 Otimizações Mobile

### **1. Touch Targets:**
```css
.btn {
  min-height: 44px;  /* Mínimo recomendado para touch */
  min-width: 44px;
  padding: 0.5rem 1rem;
}

.category-tag {
  min-height: 44px;
  padding: 0.75rem 1rem;
}
```

### **2. Espaçamentos:**
```css
/* Mobile */
@media (max-width: 768px) {
  .main {
    padding: 1rem 0.5rem;
  }
  
  .hero__actions {
    display: flex;
    gap: 0.25rem;
  }
}

/* Mobile pequeno */
@media (max-width: 480px) {
  .main {
    padding: 0.5rem 0.25rem;
  }
}
```

### **3. Tipografia:**
```css
/* Mobile */
@media (max-width: 768px) {
  .hero__title {
    font-size: 1.75rem;
    white-space: normal;
  }
}

/* Mobile pequeno */
@media (max-width: 480px) {
  .hero__title {
    font-size: 1.5rem;
  }
}
```

## 🔧 Utilitários Responsivos

### **1. Display:**
```css
/* Esconder em mobile */
.hidden-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hidden-mobile {
    display: block;
  }
}

/* Esconder em desktop */
.hidden-desktop {
  display: block;
}

@media (min-width: 768px) {
  .hidden-desktop {
    display: none;
  }
}
```

### **2. Grid Responsivo:**
```css
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### **3. Flexbox Responsivo:**
```css
.flex-responsive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .flex-responsive {
    flex-direction: row;
  }
}
```

## 🎨 Variáveis CSS Responsivas

### **Espaçamentos Adaptativos:**
```css
:root {
  --space-mobile: 0.5rem;
  --space-tablet: 1rem;
  --space-desktop: 1.5rem;
}

.container {
  padding: var(--space-mobile);
}

@media (min-width: 768px) {
  .container {
    padding: var(--space-tablet);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--space-desktop);
  }
}
```

### **Tipografia Responsiva:**
```css
:root {
  --font-size-mobile: 1rem;
  --font-size-tablet: 1.125rem;
  --font-size-desktop: 1.25rem;
}

.text-responsive {
  font-size: var(--font-size-mobile);
}

@media (min-width: 768px) {
  .text-responsive {
    font-size: var(--font-size-tablet);
  }
}

@media (min-width: 1024px) {
  .text-responsive {
    font-size: var(--font-size-desktop);
  }
}
```

## 🧪 Testando Responsividade

### **1. DevTools do Navegador:**
```javascript
// Abrir DevTools (F12)
// Clicar no ícone de dispositivo
// Selecionar diferentes tamanhos
```

### **2. Breakpoints Específicos:**
```css
/* iPhone SE */
@media (max-width: 375px) {
  .container {
    padding: 0.25rem;
  }
}

/* iPhone 12 */
@media (max-width: 390px) {
  .container {
    padding: 0.5rem;
  }
}

/* iPad */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    padding: 1rem;
  }
}
```

### **3. Teste em Dispositivos Reais:**
```javascript
// Usar viewport meta tag
<meta name="viewport" content="width=device-width, initial-scale=1.0">

// Testar em diferentes dispositivos
// iPhone, Android, iPad, Desktop
```

## 🎓 Conceitos Importantes

### **1. Mobile-First:**
```css
/* ❌ Desktop-First */
.container {
  padding: 3rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}

/* ✅ Mobile-First */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 3rem;
  }
}
```

### **2. Breakpoints Consistentes:**
```css
/* Usar sempre os mesmos breakpoints */
@media (max-width: 480px) { }
@media (max-width: 768px) { }
@media (max-width: 1024px) { }
```

### **3. Grid Responsivo:**
```css
/* Grid que se adapta automaticamente */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Implementar** acessibilidade
2. **Adicionar** ARIA labels
3. **Otimizar** para leitores de tela
4. **Testar** navegação por teclado

---

**🎯 Próximo:** [Acessibilidade](./08-acessibilidade.md)
