# 🚀 Guia Prático: Como o React Funciona

## 🎯 Foco: Código Real e Lógica

Este guia explica **exatamente** o que cada arquivo faz e **por que** funciona.

---

## 📁 Estrutura Real do Projeto

```
src/
├── main.jsx          # 🚀 PONTO DE ENTRADA
├── App.jsx           # 🧠 CÉREBRO DA APLICAÇÃO  
├── index.css         # 🎨 ESTILOS GLOBAIS
├── components/       # 🧩 PEÇAS REUTILIZÁVEIS
│   ├── Header.jsx    # 📱 NAVEGAÇÃO
│   └── Footer.jsx    # 🦶 RODAPÉ
└── pages/           # 📄 PÁGINAS
    ├── Home.jsx      # 🏠 INÍCIO
    ├── Login.jsx     # 🔐 LOGIN
    └── Admin*.jsx    # ⚙️ ADMIN
```

---

## 🚀 main.jsx - O QUE FAZ?

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

### **Explicação Linha por Linha:**

```javascript
// 1. IMPORTA O REACT
import React from 'react'
// Por que? React é a biblioteca principal

// 2. IMPORTA O REACT DOM
import ReactDOM from 'react-dom/client'
// Por que? ReactDOM renderiza no navegador

// 3. IMPORTA O COMPONENTE PRINCIPAL
import App from './App.jsx'
// Por que? App é o componente raiz

// 4. IMPORTA OS ESTILOS
import './index.css'
// Por que? CSS global da aplicação

// 5. RENDERIZA NO NAVEGADOR
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### **O que acontece:**
1. **Pega** o elemento `<div id="root">` do HTML
2. **Cria** um "root" do React
3. **Renderiza** o componente `<App />` dentro dele
4. **StrictMode** = modo rigoroso (detecta problemas)

---

## 🧠 App.jsx - O CÉREBRO

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

### **Lógica do App.jsx:**

#### **1. Imports:**
```javascript
// ROTEAMENTO
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Router = gerencia URLs
// Routes = container das rotas  
// Route = uma rota específica

// COMPONENTES
import Header from './components/Header'
import Footer from './components/Footer'
// Componentes reutilizáveis

// PÁGINAS
import Home from './pages/Home'
import Login from './pages/Login'
// Cada página é um componente
```

#### **2. Estrutura JSX:**
```javascript
<Router>                    // Envolve toda aplicação
  <div className="app">     // Container principal
    <Header />              // Navegação (sempre visível)
    <main>                  // Conteúdo principal
      <Routes>               // Container das rotas
        <Route path="/" element={<Home />} />      // URL "/" → Home
        <Route path="/login" element={<Login />} /> // URL "/login" → Login
      </Routes>
    </main>
    <Footer />              // Rodapé (sempre visível)
  </div>
</Router>
```

### **Como Funciona o Roteamento:**
1. **Usuário** acessa `/login`
2. **React Router** vê a URL
3. **Route** com `path="/login"` é ativada
4. **Componente** `<Login />` é renderizado
5. **Header e Footer** continuam visíveis

---

## 🧩 Header.jsx - NAVEGAÇÃO

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
            <li>
              <Link to="/login" className={`nav__link ${isActive('/login')}`}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
```

### **Lógica do Header:**

#### **1. Hook useLocation:**
```javascript
const location = useLocation()
// Retorna: { pathname: "/login", search: "", hash: "" }
// pathname = URL atual
```

#### **2. Função isActive:**
```javascript
const isActive = (path) => {
  return location.pathname === path ? 'nav__link--active' : ''
}
// Se URL atual = "/login" e path = "/login" → retorna classe ativa
// Se URL atual = "/" e path = "/login" → retorna string vazia
```

#### **3. Link vs <a>:**
```javascript
// ❌ <a> recarrega a página
<a href="/login">Login</a>

// ✅ <Link> navega sem recarregar
<Link to="/login">Login</Link>
```

#### **4. Classes Dinâmicas:**
```javascript
className={`nav__link ${isActive('/login')}`}
// Se ativo: "nav__link nav__link--active"
// Se inativo: "nav__link"
```

---

## 📄 Home.jsx - PÁGINA

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

### **Lógica da Página:**

#### **1. Fragment:**
```javascript
<>
  {/* Conteúdo sem div wrapper */}
</>
// Agrupa elementos sem criar div extra
```

#### **2. JSX = HTML + JavaScript:**
```javascript
// HTML normal
<h2>Título</h2>

// JSX com JavaScript
<h2 className="hero__title">Título</h2>

// JSX com variáveis
const titulo = "Meu título"
<h2>{titulo}</h2>
```

#### **3. Classes CSS:**
```javascript
className="hero__title"
// Mesmo que class="hero__title" no HTML
```

---

## 🎨 index.css - ESTILOS

```css
/* VARIÁVEIS CSS */
:root {
  --color-primary: #034732;
  --color-secondary: #6b7280;
  --font-size-base: 1rem;
  --space-md: 1rem;
}

/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* TIPOGRAFIA */
h1, h2, h3 {
  font-weight: 600;
  line-height: 1.25;
}

/* COMPONENTES */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
}
```

### **Por que Variáveis CSS:**
```css
/* ❌ Sem variáveis */
.btn--primary { background-color: #034732; }
.header { border-color: #034732; }

/* ✅ Com variáveis */
.btn--primary { background-color: var(--color-primary); }
.header { border-color: var(--color-primary); }
/* Mudança em um lugar = atualiza em todo lugar */
```

---

## 🔄 FLUXO COMPLETO

### **1. Usuário acessa `/login`:**
```
1. main.jsx → renderiza App.jsx
2. App.jsx → Router detecta URL "/login"
3. Route path="/login" → renderiza Login.jsx
4. Header.jsx → useLocation() detecta "/login"
5. isActive("/login") → retorna classe ativa
6. Link fica destacado
```

### **2. Usuário clica em "Início":**
```
1. Link to="/" é clicado
2. React Router muda URL para "/"
3. Route path="/" → renderiza Home.jsx
4. Header re-renderiza com nova URL
5. isActive("/") → retorna classe ativa
6. Link "Início" fica destacado
```

---

## 🛠️ COMO CRIAR NOVA PÁGINA

### **1. Criar arquivo:**
```javascript
// src/pages/NovaPagina.jsx
const NovaPagina = () => {
  return (
    <div>
      <h1>Nova Página</h1>
      <p>Conteúdo da página</p>
    </div>
  )
}

export default NovaPagina
```

### **2. Importar no App.jsx:**
```javascript
import NovaPagina from './pages/NovaPagina'

// Adicionar rota
<Route path="/nova-pagina" element={<NovaPagina />} />
```

### **3. Adicionar link no Header:**
```javascript
<li>
  <Link to="/nova-pagina" className={`nav__link ${isActive('/nova-pagina')}`}>
    Nova Página
  </Link>
</li>
```

---

## 🎯 CONCEITOS IMPORTANTES

### **1. Componentes:**
```javascript
// Componente = função que retorna JSX
const MeuComponente = () => {
  return <div>Conteúdo</div>
}
```

### **2. Props (dados externos):**
```javascript
const Botao = ({ texto, cor }) => {
  return <button className={`btn btn--${cor}`}>{texto}</button>
}

// Uso
<Botao texto="Clique" cor="primary" />
```

### **3. Estado (dados internos):**
```javascript
import { useState } from 'react'

const Contador = () => {
  const [contador, setContador] = useState(0)
  
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  )
}
```

### **4. Eventos:**
```javascript
const handleClick = () => {
  console.log('Clicado!')
}

<button onClick={handleClick}>Clique</button>
```

---

## 🚀 PRÓXIMOS PASSOS

### **Para Aprender Mais:**
1. **Modifique** os componentes existentes
2. **Crie** novas páginas
3. **Adicione** funcionalidades (botões que fazem algo)
4. **Experimente** com useState e useEffect

### **Comandos Úteis:**
```bash
# Executar projeto
npm run dev

# Build para produção
npm run build

# Ver preview da build
npm run preview
```

---

## 🆘 TROUBLESHOOTING - PROBLEMAS COMUNS

### **1. Página não carrega:**
```javascript
// ❌ Erro comum
import Home from './pages/Home'  // sem .jsx

// ✅ Correto
import Home from './pages/Home.jsx'  // com .jsx
```

### **2. Link não funciona:**
```javascript
// ❌ Erro comum
<a href="/login">Login</a>  // recarrega página

// ✅ Correto
<Link to="/login">Login</Link>  // navega sem reload
```

### **3. Classe CSS não aplica:**
```javascript
// ❌ Erro comum
className="btn btn-primary"  // espaço no nome

// ✅ Correto
className="btn btn--primary"  // hífen duplo
```

### **4. Rota não encontrada:**
```javascript
// ❌ Erro comum
<Route path="login" element={<Login />} />  // sem /

// ✅ Correto
<Route path="/login" element={<Login />} />  // com /
```

### **5. Import não funciona:**
```javascript
// ❌ Erro comum
import Header from './components/header'  // minúsculo

// ✅ Correto
import Header from './components/Header'  // maiúsculo
```

---

## 🎓 EXERCÍCIOS PRÁTICOS

### **Exercício 1: Nova Página**
1. Crie `src/pages/Sobre.jsx`
2. Adicione rota no `App.jsx`
3. Adicione link no `Header.jsx`
4. Teste navegação

### **Exercício 2: Botão Funcional**
1. Abra `Home.jsx`
2. Adicione `useState` para contador
3. Crie botão que incrementa
4. Mostre valor na tela

### **Exercício 3: Formulário**
1. Crie `src/pages/Contato.jsx`
2. Adicione inputs (nome, email, mensagem)
3. Adicione botão "Enviar"
4. Use `useState` para controlar valores

---

## 🔧 DICAS DE DESENVOLVIMENTO

### **1. Sempre teste:**
```bash
npm run dev
# Abra http://localhost:5173
# Teste cada mudança
```

### **2. Console do navegador:**
```javascript
// F12 → Console
// Veja erros em tempo real
```

### **3. Estrutura de pastas:**
```
src/
├── components/    # Reutilizáveis
├── pages/        # Páginas únicas
├── hooks/        # Lógica customizada
└── utils/        # Funções auxiliares
```

### **4. Nomenclatura:**
```javascript
// Componentes: PascalCase
const MeuComponente = () => {}

// Arquivos: PascalCase.jsx
MeuComponente.jsx

// Funções: camelCase
const minhaFuncao = () => {}
```

---

## 🎯 CHECKLIST DE INDEPENDÊNCIA

### **Você consegue fazer sozinho:**
- [ ] Criar nova página
- [ ] Adicionar rota
- [ ] Fazer link funcionar
- [ ] Usar useState
- [ ] Estilizar componente
- [ ] Debugar erro básico
- [ ] Modificar componente existente
- [ ] Adicionar funcionalidade

### **Se conseguir tudo acima:**
**🎉 VOCÊ É INDEPENDENTE!** 

Pode criar projetos React sozinho! 🚀

---

## 🎓 RESUMO

- **main.jsx** = ponto de entrada
- **App.jsx** = cérebro com roteamento
- **Header.jsx** = navegação dinâmica
- **Pages** = componentes de página
- **CSS** = estilos globais
- **React Router** = navegação sem reload
- **JSX** = HTML + JavaScript
- **Componentes** = funções que retornam JSX

**Agora você sabe como tudo funciona!** 🚀
