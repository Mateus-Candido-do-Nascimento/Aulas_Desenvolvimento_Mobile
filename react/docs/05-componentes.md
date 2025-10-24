# 📖 Capítulo 5: Componentes React

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Entender** o que são componentes React
- **Criar** componentes reutilizáveis
- **Implementar** navegação dinâmica
- **Aplicar** estilos e acessibilidade

## 🧩 O que são Componentes React?

### **Definição:**
```javascript
// Componente é uma função que retorna JSX
const MeuComponente = () => {
  return <div>Conteúdo do componente</div>
}

// Pode ser exportado e usado em outros lugares
export default MeuComponente
```

### **Características:**
- **Reutilizáveis** - usado em várias partes da aplicação
- **Isolados** - cada componente tem sua responsabilidade
- **Composáveis** - componentes podem conter outros componentes
- **Estado** - podem ter dados que mudam ao longo do tempo

## 🏗️ Estrutura de Componentes do Projeto

### **Hierarquia:**
```
App (componente raiz)
├── Header (navegação)
├── Main (conteúdo)
│   └── Routes (páginas)
└── Footer (rodapé)
```

## 📄 Análise Detalhada dos Componentes

### **1. Header.jsx - Navegação Principal**

```javascript
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'nav__link--active' : ''
  }

  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="Navegação principal">
        <div className="nav__container">
          <div className="nav__brand">
            <h1 className="nav__logo">
              <Link to="/">HABIT</Link>
            </h1>
          </div>
          <ul className="nav__menu" role="menubar">
            <li className="nav__item" role="none">
              <Link to="/" className={`nav__link ${isActive('/')}`} role="menuitem" aria-current={location.pathname === '/' ? 'page' : undefined}>
                Início
              </Link>
            </li>
            <li className="nav__item" role="none">
              <Link to="/categoria/techno" className={`nav__link ${isActive('/categoria/techno')}`} role="menuitem" aria-current={location.pathname === '/categoria/techno' ? 'page' : undefined}>
                Páginas
              </Link>
            </li>
            <li className="nav__item" role="none">
              <Link to="/destaques" className={`nav__link ${isActive('/destaques')}`} role="menuitem" aria-current={location.pathname === '/destaques' ? 'page' : undefined}>
                Destaques
              </Link>
            </li>
            <li className="nav__item" role="none">
              <Link to="/assinar" className={`nav__link ${isActive('/assinar')}`} role="menuitem" aria-current={location.pathname === '/assinar' ? 'page' : undefined}>
                Assinar
              </Link>
            </li>
            <li className="nav__item" role="none">
              <Link to="/admin/categorias" className={`nav__link ${isActive('/admin')}`} role="menuitem" aria-current={location.pathname.startsWith('/admin') ? 'page' : undefined}>
                Admin
              </Link>
            </li>
          </ul>
          <div className="nav__actions">
            <div className="search-box">
              <label htmlFor="global-search" className="sr-only">Buscar</label>
              <input type="search" id="global-search" className="search-box__input" placeholder="Buscar..." />
              <button className="search-box__btn" aria-label="Executar busca">Buscar</button>
            </div>
            <Link to="/login" className="search-box__btn" aria-label="Entrar">Entrar</Link>
          </div>
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
```
- **Link** - componente para navegação (substitui `<a>`)
- **useLocation** - hook que retorna informações da rota atual

#### **Hook useLocation:**
```javascript
const location = useLocation()
// Retorna: { pathname: "/login", search: "", hash: "", state: null }
```

#### **Função isActive:**
```javascript
const isActive = (path) => {
  return location.pathname === path ? 'nav__link--active' : ''
}
```
- **Compara** rota atual com rota do link
- **Retorna** classe CSS se estiver ativo
- **Permite** estilização do link ativo

#### **JSX do Header:**
```javascript
<header className="header">
  {/* Elemento semântico header */}
  <nav className="nav" role="navigation" aria-label="Navegação principal">
    {/* Navegação com acessibilidade */}
    <div className="nav__container">
      {/* Container com grid layout */}
      <div className="nav__brand">
        {/* Logo/brand */}
        <h1 className="nav__logo">
          <Link to="/">HABIT</Link>
          {/* Link para página inicial */}
        </h1>
      </div>
      <ul className="nav__menu" role="menubar">
        {/* Menu de navegação */}
        <li className="nav__item" role="none">
          <Link 
            to="/" 
            className={`nav__link ${isActive('/')}`} 
            role="menuitem" 
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Início
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

#### **Acessibilidade:**
- **role="navigation"** - identifica como navegação
- **aria-label** - descrição para leitores de tela
- **role="menubar"** - identifica como menu
- **aria-current="page"** - indica página atual
- **aria-label** - descrição de botões

### **2. Footer.jsx - Rodapé**

```javascript
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <nav className="footer__links" role="navigation" aria-label="Links do rodapé">
          <a href="#" className="footer__link" aria-label="Visitar Instagram">Instagram</a>
          <a href="#" className="footer__link" aria-label="Categoria Work">Work</a>
          <a href="#" className="footer__link" aria-label="Categoria Bags">Bags</a>
          <a href="#" className="footer__link" aria-label="Categoria Lamp">Lamp</a>
          <a href="#" className="footer__link" aria-label="Categoria Books">Books</a>
        </nav>
        <p className="footer__copyright">© 2025 Meu Site • Meu site</p>
      </div>
    </footer>
  )
}

export default Footer
```

**Características do Footer:**
- **Componente simples** - apenas retorna JSX
- **Sem estado** - não precisa de hooks
- **Sem props** - não recebe dados externos
- **Reutilizável** - usado em todas as páginas
- **Semântica** - usa `<footer>` e `role="contentinfo"`

## 🎨 Aplicação de Estilos

### **Classes CSS Dinâmicas:**
```javascript
// Template literal para classes dinâmicas
className={`nav__link ${isActive('/login')}`}

// Resultado:
// Se ativo: "nav__link nav__link--active"
// Se inativo: "nav__link"
```

### **Condicionais em JSX:**
```javascript
// Operador ternário
aria-current={location.pathname === '/' ? 'page' : undefined}

// Operador lógico AND
{isLoggedIn && <UserMenu />}

// Operador lógico OR
className={isActive || 'default-class'}
```

## 🔄 Hooks do React Router

### **useLocation Hook:**
```javascript
import { useLocation } from 'react-router-dom'

const MeuComponente = () => {
  const location = useLocation()
  
  console.log(location.pathname) // "/login"
  console.log(location.search)   // "?id=123"
  console.log(location.hash)     // "#section1"
  
  return <div>Conteúdo</div>
}
```

### **Link vs NavLink:**
```javascript
// Link simples
<Link to="/login">Login</Link>

// Link com classe condicional
<Link 
  to="/login" 
  className={isActive('/login') ? 'active' : ''}
>
  Login
</Link>

// NavLink (faz isso automaticamente)
<NavLink 
  to="/login"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  Login
</NavLink>
```

## 🧩 Composição de Componentes

### **Como componentes se conectam:**
```javascript
// App.jsx
function App() {
  return (
    <Router>
      <div className="app">
        <Header />        {/* Componente Header */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Páginas são componentes também */}
          </Routes>
        </main>
        <Footer />        {/* Componente Footer */}
      </div>
    </Router>
  )
}
```

### **Hierarquia de renderização:**
```
1. App renderiza
2. Header renderiza
3. Main renderiza
4. Routes renderiza página atual
5. Footer renderiza
```

## 🎯 Padrões de Componentes

### **1. Componente Funcional:**
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

### **2. Export Default:**
```javascript
// Export no final
const MeuComponente = () => {
  return <div>Conteúdo</div>
}

export default MeuComponente

// vs Export inline
export default const MeuComponente = () => {
  return <div>Conteúdo</div>
}
```

### **3. JSX Fragment:**
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

## 🔧 Props e Estado

### **Props (dados externos):**
```javascript
// Componente que recebe props
const Botao = ({ texto, cor, onClick }) => {
  return (
    <button 
      className={`btn btn--${cor}`}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}

// Uso do componente
<Botao texto="Clique aqui" cor="primary" onClick={handleClick} />
```

### **Estado (dados internos):**
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

## 🎓 Conceitos Importantes

### **1. JSX:**
```javascript
// JSX é uma extensão do JavaScript
const elemento = <h1>Olá, mundo!</h1>

// É compilado para:
const elemento = React.createElement('h1', null, 'Olá, mundo!')
```

### **2. Template Literals:**
```javascript
// Interpolação de strings
const className = `nav__link ${isActive('/login')}`
// Resultado: "nav__link nav__link--active" (se ativo)
// Resultado: "nav__link" (se inativo)
```

### **3. Event Handlers:**
```javascript
// Função inline
<button onClick={() => console.log('clicado')}>
  Clique
</button>

// Função separada
const handleClick = () => {
  console.log('clicado')
}

<button onClick={handleClick}>
  Clique
</button>
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Criar** as páginas da aplicação
2. **Implementar** roteamento
3. **Conectar** páginas com navegação
4. **Aplicar** estilos específicos

---

**🎯 Próximo:** [Páginas e Roteamento](./06-paginas.md)
