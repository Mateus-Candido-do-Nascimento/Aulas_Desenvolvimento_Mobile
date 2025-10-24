# 📖 Capítulo 8: Acessibilidade

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Entender** os princípios de acessibilidade
- **Implementar** ARIA labels e roles
- **Otimizar** navegação por teclado
- **Testar** com leitores de tela

## ♿ O que é Acessibilidade?

### **Definição:**
Acessibilidade é o design de produtos, dispositivos, serviços ou ambientes para serem usados por pessoas com deficiência.

### **Tipos de Deficiência:**
- **Visual** - cegueira, baixa visão, daltonismo
- **Auditiva** - surdez, perda auditiva
- **Motora** - limitações de movimento
- **Cognitiva** - dificuldades de compreensão
- **Temporária** - braço quebrado, ambiente barulhento

## 🎨 Princípios de Acessibilidade

### **1. Perceptível:**
- **Texto alternativo** para imagens
- **Legendas** para vídeos
- **Contraste** adequado de cores
- **Tamanho** de fonte legível

### **2. Operável:**
- **Navegação por teclado**
- **Tempo suficiente** para interação
- **Sem convulsões** (flash, animações)
- **Área de toque** adequada

### **3. Compreensível:**
- **Linguagem clara** e simples
- **Navegação consistente**
- **Feedback** de erros
- **Instruções** claras

### **4. Robusto:**
- **Compatível** com tecnologias assistivas
- **HTML válido**
- **Semântica** correta
- **Padrões** web

## 🏗️ Implementação no Projeto

### **1. Estrutura Semântica**

#### **HTML Semântico:**
```javascript
// ❌ Não semântico
<div>
  <div>Logo</div>
  <div>
    <div>Link 1</div>
    <div>Link 2</div>
  </div>
</div>

// ✅ Semântico
<header>
  <h1>Logo</h1>
  <nav>
    <a href="/">Link 1</a>
    <a href="/about">Link 2</a>
  </nav>
</header>
```

#### **Hierarquia de Títulos:**
```javascript
// ✅ Hierarquia correta
<h1>HABIT</h1>
  <h2>Navegue por tópicos de interesse</h2>
    <h3>Work</h3>
    <h3>Books</h3>
    <h3>Techno</h3>
  <h2>Categorias Populares</h2>
    <h3>Destaque 1</h3>
    <h3>Destaque 2</h3>
```

### **2. ARIA Labels e Roles**

#### **Roles:**
```javascript
// Navegação
<nav role="navigation" aria-label="Navegação principal">
  <ul role="menubar">
    <li role="none">
      <a role="menuitem" href="/">Início</a>
    </li>
  </ul>
</nav>

// Lista
<div role="list" aria-label="Categorias populares">
  <article role="listitem">
    <h3>Work</h3>
  </article>
</div>

// Conteúdo principal
<main role="main">
  <section aria-labelledby="hero-title">
    <h2 id="hero-title">Título</h2>
  </section>
</main>
```

#### **ARIA Labels:**
```javascript
// Botões
<button aria-label="Executar busca">Buscar</button>
<button aria-label="Entrar">Entrar</button>

// Links
<a href="#" aria-label="Visitar Instagram">Instagram</a>
<a href="#" aria-label="Categoria Work">Work</a>

// Imagens
<div className="hero__placeholder" aria-label="Imagem ilustrativa do conteúdo"></div>
<div className="category-card__image" aria-label="Imagem da categoria Work"></div>
```

### **3. Navegação por Teclado**

#### **Tab Order:**
```javascript
// Ordem lógica de navegação
<header>
  <nav>
    <a href="#conteudo">Pular para conteúdo</a>
    <h1>Logo</h1>
    <ul>
      <li><a href="/">Início</a></li>
      <li><a href="/destaques">Destaques</a></li>
    </ul>
    <input type="search" />
    <button>Buscar</button>
  </nav>
</header>
```

#### **Skip Link:**
```javascript
// Link para pular para conteúdo principal
<a href="#conteudo" className="skip-link">Pular para conteúdo</a>

// CSS para skip link
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

### **4. Focus Management**

#### **Focus Visible:**
```css
/* Focus consistente em todos os elementos interativos */
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

#### **Focus Trap:**
```javascript
// Para modais e dropdowns
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef()
  
  useEffect(() => {
    if (isOpen) {
      // Foca no modal quando abre
      modalRef.current?.focus()
    }
  }, [isOpen])
  
  return (
    <div 
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <h2 id="modal-title">Título do Modal</h2>
      <button onClick={onClose}>Fechar</button>
    </div>
  )
}
```

## 🎨 Contraste e Cores

### **Contraste Adequado:**
```css
/* ✅ Contraste adequado (4.5:1 mínimo) */
:root {
  --color-primary: #034732;        /* Verde escuro */
  --color-gray-900: #111827;       /* Texto escuro */
  --color-white: #ffffff;         /* Fundo claro */
}

/* ❌ Contraste insuficiente */
.text-light {
  color: #999999;  /* Muito claro */
  background: #ffffff;
}
```

### **Não Depender Apenas de Cor:**
```javascript
// ❌ Apenas cor
<span style={{color: 'red'}}>Erro</span>

// ✅ Cor + ícone + texto
<span style={{color: 'red'}}>
  ⚠️ Erro: Campo obrigatório
</span>
```

## 🎯 Formulários Acessíveis

### **Labels Associados:**
```javascript
// ✅ Label associado
<label htmlFor="login-email">E-mail</label>
<input id="login-email" type="email" />

// ❌ Sem label
<input type="email" placeholder="E-mail" />
```

### **Grupos de Campos:**
```javascript
// ✅ Agrupamento semântico
<fieldset>
  <legend>Informações Pessoais</legend>
  <label htmlFor="name">Nome</label>
  <input id="name" type="text" />
  
  <label htmlFor="email">E-mail</label>
  <input id="email" type="email" />
</fieldset>
```

### **Validação e Feedback:**
```javascript
// ✅ Feedback de erro
<div>
  <label htmlFor="password">Senha</label>
  <input 
    id="password" 
    type="password" 
    aria-describedby="password-error"
    aria-invalid={hasError}
  />
  {hasError && (
    <div id="password-error" role="alert">
      A senha deve ter pelo menos 8 caracteres
    </div>
  )}
</div>
```

## 🎵 Leitores de Tela

### **Screen Reader Only:**
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

### **Uso:**
```javascript
// Label para leitores de tela
<label htmlFor="search" className="sr-only">Buscar</label>
<input id="search" type="search" />

// Texto adicional
<button>
  <span className="sr-only">Abrir menu de</span>
  Usuário
</button>
```

### **Live Regions:**
```javascript
// Para atualizações dinâmicas
<div aria-live="polite" aria-atomic="true">
  {message && <p>{message}</p>}
</div>

// Para alertas importantes
<div role="alert">
  {error && <p>{error}</p>}
</div>
```

## 🧪 Testando Acessibilidade

### **1. Navegação por Teclado:**
```javascript
// Testar com Tab
// - Todos os elementos devem ser focáveis
// - Ordem lógica de navegação
// - Focus visível
// - Escape fecha modais
```

### **2. Leitores de Tela:**
```javascript
// Testar com:
// - NVDA (Windows)
// - JAWS (Windows)
// - VoiceOver (Mac)
// - TalkBack (Android)
```

### **3. Ferramentas Automáticas:**
```javascript
// Extensões do navegador:
// - axe DevTools
// - WAVE
// - Lighthouse
```

### **4. Teste Manual:**
```javascript
// Checklist:
// - [ ] Navegação por teclado funciona
// - [ ] Focus visível
// - [ ] Contraste adequado
// - [ ] Texto alternativo
// - [ ] Labels associados
// - [ ] Hierarquia de títulos
// - [ ] Semântica HTML
```

## 🎓 Conceitos Importantes

### **1. ARIA States:**
```javascript
// Estados dos elementos
<button aria-expanded={isOpen}>
  Menu
</button>

<input aria-required="true" />
<input aria-invalid={hasError} />

<div aria-hidden="true">
  <!-- Conteúdo decorativo -->
</div>
```

### **2. ARIA Properties:**
```javascript
// Propriedades dos elementos
<div aria-labelledby="title">
  <h2 id="title">Título</h2>
</div>

<div aria-describedby="description">
  <p id="description">Descrição</p>
</div>
```

### **3. Landmarks:**
```javascript
// Pontos de referência
<header role="banner">
<nav role="navigation">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Preparar** para produção
2. **Otimizar** performance
3. **Configurar** build
4. **Deploy** da aplicação

---

**🎯 Próximo:** [Deploy e Produção](./09-deploy.md)
