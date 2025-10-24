# 📖 Capítulo 3: Estrutura de Arquivos

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Entender** como os arquivos se conectam
- **Analisar** o fluxo de renderização
- **Compreender** a hierarquia de componentes
- **Ver** como o CSS é organizado

## 🏗️ Arquitetura do Projeto React

### **Fluxo de Renderização:**
```
index.html → main.jsx → App.jsx → Componentes → Páginas
```

**Explicação do fluxo:**
1. **index.html** - Página base do navegador
2. **main.jsx** - Ponto de entrada JavaScript
3. **App.jsx** - Componente raiz da aplicação
4. **Componentes** - Header, Footer (reutilizáveis)
5. **Páginas** - Home, Login, Admin, etc.

## 📁 Análise Detalhada dos Arquivos

### **1. main.jsx - Ponto de Entrada**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Explicação linha por linha:**

#### **Imports:**
```javascript
import React from 'react'
// Importa a biblioteca principal do React

import ReactDOM from 'react-dom/client'
// Importa ReactDOM para renderizar no navegador
// '/client' é a versão moderna (React 18+)

import App from './App.jsx'
// Importa o componente principal App

import './index.css'
// Importa estilos globais
```

#### **Renderização:**
```javascript
ReactDOM.createRoot(document.getElementById('root'))
// Cria um "root" no elemento HTML com id="root"

.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// Renderiza o componente App dentro do StrictMode
```

**O que é StrictMode?**
- **Modo rigoroso** do React
- **Detecta problemas** potenciais
- **Executa efeitos** duas vezes em desenvolvimento
- **Ajuda** a encontrar bugs

### **2. App.jsx - Componente Principal**
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
// ... outros imports
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <a href="#conteudo" className="skip-link">Pular para conteúdo</a>
        <Header />
        <main id="conteudo" className="main" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* ... outras rotas */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
```

**Explicação linha por linha:**

#### **Imports do React Router:**
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// BrowserRouter: Roteador principal
// Routes: Container das rotas
// Route: Definição de uma rota específica
```

#### **Imports de Componentes:**
```javascript
import Header from './components/Header'
import Footer from './components/Footer'
// Importa componentes reutilizáveis
```

#### **Imports de Páginas:**
```javascript
import Home from './pages/Home'
import Login from './pages/Login'
// Importa páginas específicas
```

#### **Estrutura JSX:**
```javascript
<Router>
  {/* Router envolve toda a aplicação */}
  <div className="app">
    {/* Container principal */}
    <Header />
    {/* Componente de navegação */}
    <main>
      <Routes>
        {/* Container das rotas */}
        <Route path="/" element={<Home />} />
        {/* Rota: URL "/" → Componente Home */}
      </Routes>
    </main>
    <Footer />
    {/* Componente de rodapé */}
  </div>
</Router>
```

## 🧩 Estrutura de Componentes

### **Hierarquia de Componentes:**
```
App
├── Header (navegação)
├── Main (conteúdo)
│   └── Routes
│       ├── Home
│       ├── Login
│       ├── Destaques
│       └── ... (outras páginas)
└── Footer (rodapé)
```

### **1. Header.jsx - Navegação**
```javascript
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'nav__link--active' : ''
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__brand">
            <h1 className="nav__logo">
              <Link to="/">HABIT</Link>
            </h1>
          </div>
          <ul className="nav__menu">
            <li>
              <Link to="/" className={`nav__link ${isActive('/')}`}>
                Início
              </Link>
            </li>
            {/* ... outros links */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
```

**Explicação linha por linha:**

#### **Imports:**
```javascript
import { Link, useLocation } from 'react-router-dom'
// Link: Componente para navegação
// useLocation: Hook para acessar rota atual
```

#### **Hook useLocation:**
```javascript
const location = useLocation()
// Retorna objeto com informações da rota atual
// location.pathname = "/login" (exemplo)
```

#### **Função isActive:**
```javascript
const isActive = (path) => {
  return location.pathname === path ? 'nav__link--active' : ''
}
// Compara rota atual com rota do link
// Retorna classe CSS se estiver ativo
```

#### **JSX do Header:**
```javascript
<header className="header">
  {/* Elemento semântico header */}
  <nav className="nav">
    {/* Elemento semântico nav */}
    <div className="nav__container">
      {/* Container com grid layout */}
      <div className="nav__brand">
        {/* Logo/brand */}
        <h1 className="nav__logo">
          <Link to="/">HABIT</Link>
          {/* Link para página inicial */}
        </h1>
      </div>
      <ul className="nav__menu">
        {/* Menu de navegação */}
        <li>
          <Link to="/" className={`nav__link ${isActive('/')}`}>
            Início
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

### **2. Footer.jsx - Rodapé**
```javascript
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <nav className="footer__links">
          <a href="#" className="footer__link">Instagram</a>
          <a href="#" className="footer__link">Work</a>
          {/* ... outros links */}
        </nav>
        <p className="footer__copyright">
          © 2025 Meu Site • Meu site
        </p>
      </div>
    </footer>
  )
}

export default Footer
```

**Explicação:**
- **Componente simples** - apenas retorna JSX
- **Sem estado** - não precisa de hooks
- **Reutilizável** - usado em todas as páginas
- **Semântica** - usa `<footer>` e `role="contentinfo"`

## 📄 Estrutura de Páginas

### **Exemplo: Home.jsx**
```javascript
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h2 className="hero__title">Navegue por tópicos de interesse</h2>
            <p className="hero__description">
              Descubra conteúdos por categorias, posts em destaque e as escolhas do editor.
            </p>
            <div className="hero__actions">
              <a href="#" className="btn btn--primary">Explorar categorias</a>
              <a href="#" className="btn btn--secondary">Assine a newsletter</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__placeholder"></div>
          </div>
        </div>
      </section>
      {/* ... outras seções */}
    </>
  )
}

export default Home
```

**Explicação:**
- **Fragment** `<>` - agrupa elementos sem criar div extra
- **Seções semânticas** - `<section>`, `<h2>`, `<p>`
- **Classes CSS** - mantém estilos do HTML original
- **Estrutura idêntica** - mesmo layout do HTML

## 🎨 Organização do CSS

### **1. index.css - Estilos Globais**
```css
/* ===== VARIÁVEIS CSS ===== */
:root {
  --color-primary: #034732;
  --color-secondary: #6b7280;
  /* ... outras variáveis */
}

/* ===== RESET E BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== TIPOGRAFIA ===== */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}
```

**Por que variáveis CSS?**
- **Consistência** - mesma cor em todo projeto
- **Manutenção** - mudança em um lugar
- **Temas** - fácil criar tema escuro/claro
- **Responsividade** - valores adaptáveis

### **2. App.css - Estilos do App**
```css
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

**Explicação:**
- **min-height: 100vh** - altura mínima da tela
- **display: flex** - layout flexbox
- **flex-direction: column** - elementos em coluna

## 🔄 Fluxo de Dados

### **Como os dados fluem:**
```
1. Usuário clica em link
2. React Router muda a URL
3. useLocation detecta mudança
4. Componente re-renderiza
5. Nova página é exibida
```

### **Exemplo prático:**
```javascript
// 1. Usuário clica em "Login"
<Link to="/login">Login</Link>

// 2. React Router muda URL para "/login"
// 3. useLocation retorna { pathname: "/login" }
const location = useLocation()

// 4. isActive("/login") retorna "nav__link--active"
const isActive = (path) => {
  return location.pathname === path ? 'nav__link--active' : ''
}

// 5. Link fica destacado
<Link className={`nav__link ${isActive('/login')}`}>
```

## 🎓 Conceitos Importantes

### **1. Componentes Funcionais:**
```javascript
// Sintaxe moderna (recomendada)
const MeuComponente = () => {
  return <div>Conteúdo</div>
}

// vs Sintaxe tradicional
function MeuComponente() {
  return <div>Conteúdo</div>
}
```

### **2. JSX Fragment:**
```javascript
// Com Fragment (sem div extra)
const Componente = () => {
  return (
    <>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </>
  )
}

// vs sem Fragment (cria div desnecessária)
const Componente = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </div>
  )
}
```

### **3. Template Literals:**
```javascript
// Interpolação de strings
const className = `nav__link ${isActive('/login')}`
// Resultado: "nav__link nav__link--active" (se ativo)
// Resultado: "nav__link" (se inativo)
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Migrar** os estilos CSS do HTML original
2. **Entender** como manter responsividade
3. **Aplicar** as variáveis CSS
4. **Organizar** os estilos por componente

---

**🎯 Próximo:** [Migração de Estilos](./04-estilos.md)
