# 📖 Capítulo 6: Páginas e Roteamento

## 🎯 O que vamos aprender?

Neste capítulo você vai:
- **Criar** todas as páginas da aplicação
- **Implementar** roteamento com React Router
- **Conectar** navegação com páginas
- **Aplicar** estilos específicos por página

## 🗂️ Estrutura de Páginas

### **Organização:**
```
src/pages/
├── Home.jsx              # Página inicial
├── Login.jsx             # Login
├── CriarConta.jsx        # Cadastro
├── Destaques.jsx         # Destaques
├── Assinar.jsx           # Newsletter
├── Perfil.jsx            # Perfil usuário
├── BuscarResultados.jsx  # Resultados busca
├── CategoriaTechno.jsx   # Categoria específica
├── AdminCategorias.jsx   # Admin - categorias
├── AdminCriarPost.jsx    # Admin - criar post
├── AdminEscolhas.jsx     # Admin - escolhas
├── AdminUsuarios.jsx     # Admin - usuários
├── AdminFilaRevisao.jsx  # Admin - fila revisão
└── AdminComentarios.jsx  # Admin - comentários
```

## 🏠 Páginas Públicas

### **1. Home.jsx - Página Inicial**

```javascript
const Home = () => {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__container">
          <div className="hero__content">
            <h2 id="hero-title" className="hero__title">Navegue por tópicos de interesse</h2>
            <p className="hero__description">
              Descubra conteúdos por categorias, posts em destaque e as escolhas do editor.
            </p>
            <div className="hero__actions">
              <a href="#" className="btn btn--primary" role="button">Explorar categorias</a>
              <a href="#" className="btn btn--secondary" role="button">Assine a newsletter</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__placeholder" aria-label="Imagem ilustrativa do conteúdo"></div>
          </div>
        </div>
      </section>

      <section className="popular-categories" aria-labelledby="popular-title">
        <div className="popular-categories__container">
          <h2 id="popular-title" className="popular-categories__title">Categorias Populares</h2>
          <div className="popular-categories__grid" role="list" aria-label="Categorias populares">
            <article className="category-card" role="listitem">
              <div className="category-card__image" aria-label="Imagem da categoria Work"></div>
              <h3 className="category-card__title">Work</h3>
            </article>
            <article className="category-card" role="listitem">
              <div className="category-card__image" aria-label="Imagem da categoria Books"></div>
              <h3 className="category-card__title">Books</h3>
            </article>
            <article className="category-card" role="listitem">
              <div className="category-card__image" aria-label="Imagem da categoria Techno"></div>
              <h3 className="category-card__title">Techno</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="all-categories" aria-labelledby="all-categories-title">
        <div className="all-categories__container">
          <h2 id="all-categories-title" className="all-categories__title">Todas as Categorias</h2>
          <div className="all-categories__grid" role="list" aria-label="Todas as categorias disponíveis">
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Negócios">Negócios</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Techno">Techno</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Produtividade">Produtividade</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Filmes">Filmes</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Lifestyle">Lifestyle</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Educação">Educação</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Mailing">Mailing</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria eCommerce">eCommerce</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Alimentação">Alimentação</button>
            <button className="category-tag" role="listitem" aria-label="Filtrar por categoria Social">Social</button>
          </div>
        </div>
      </section>

      <div className="content-layout">
        <section className="featured-posts" aria-labelledby="featured-title">
          <div className="featured-posts__container">
            <h2 id="featured-title" className="featured-posts__title">Postagens em Destaque</h2>
            <div className="featured-posts__grid" role="list" aria-label="Lista de postagens em destaque">
              <article className="post-card" role="listitem">
                <div className="post-card__image" aria-label="Imagem do post sobre erros de design"></div>
                <div className="post-card__content">
                  <div className="post-card__meta">
                    <time className="post-card__date" dateTime="2025-07-31">31 Jul 2025</time>
                    <span className="post-card__tag">Destaque</span>
                  </div>
                  <h3 className="post-card__title">Erros de Design que Todos Devem Evitar</h3>
                  <p className="post-card__read-time">3 min de leitura</p>
                </div>
              </article>
              <article className="post-card" role="listitem">
                <div className="post-card__image" aria-label="Imagem do post sobre maiores empresas"></div>
                <div className="post-card__content">
                  <div className="post-card__meta">
                    <time className="post-card__date" dateTime="2025-07-31">31 Jul 2025</time>
                    <span className="post-card__tag">Destaque</span>
                  </div>
                  <h3 className="post-card__title">As Maiores Empresas por Receita</h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        <aside className="editor-picks" aria-labelledby="editor-title">
          <div className="editor-picks__container">
            <h2 id="editor-title" className="editor-picks__title">Escolhas do Editor</h2>
            <ul className="editor-picks__list" role="list" aria-label="Lista de escolhas do editor">
              <li className="editor-picks__item" role="listitem">O uso negativo da internet</li>
              <li className="editor-picks__item" role="listitem">O segredo do brainstorm</li>
              <li className="editor-picks__item" role="listitem">Escalar para pequenos negócios</li>
              <li className="editor-picks__item" role="listitem">O futuro do trabalho remoto</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Home
```

**Explicação da estrutura:**

#### **Fragment:**
```javascript
<>
  {/* Conteúdo sem div wrapper */}
</>
```
- **Agrupa** elementos sem criar div extra
- **Mantém** estrutura HTML limpa
- **Performance** - menos elementos DOM

#### **Seções semânticas:**
```javascript
<section className="hero" aria-labelledby="hero-title">
  <h2 id="hero-title">Título</h2>
</section>
```
- **`<section>`** - seção de conteúdo
- **`aria-labelledby`** - conecta com título
- **Acessibilidade** - leitores de tela entendem estrutura

#### **Grid de categorias:**
```javascript
<div className="popular-categories__grid" role="list">
  <article className="category-card" role="listitem">
    <div className="category-card__image"></div>
    <h3 className="category-card__title">Work</h3>
  </article>
</div>
```
- **`role="list"`** - identifica como lista
- **`role="listitem"`** - identifica itens da lista
- **Grid responsivo** - adapta-se ao tamanho da tela

### **2. Login.jsx - Página de Login**

```javascript
const Login = () => {
  return (
    <section className="panel" style={{maxWidth: '760px', margin: '0 auto'}}>
      <h2 style={{fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-lg)'}}>Entrar</h2>
      <div style={{display: 'grid', gap: 'var(--space-md)'}}>
        <label htmlFor="login-email">E-mail</label>
        <input id="login-email" className="form-control" type="email" placeholder="E-mail" />
        <label htmlFor="login-password">Senha</label>
        <input id="login-password" className="form-control" type="password" placeholder="Senha" />
        <div style={{display: 'flex', gap: 'var(--space-md)', alignItems: 'center'}}>
          <button className="btn btn--success">Entrar</button>
          <button className="btn btn--outline">Entrar com Google</button>
        </div>
        <div style={{fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', display: 'flex', gap: 'var(--space-sm)'}}>
          <a href="#">Esqueci a senha</a> • <a href="/criar-conta">Criar conta</a>
        </div>
      </div>
    </section>
  )
}

export default Login
```

**Características do Login:**
- **Formulário** - inputs para email e senha
- **Estilos inline** - para ajustes específicos
- **Links** - para recuperar senha e criar conta
- **Acessibilidade** - labels associados aos inputs

### **3. Destaques.jsx - Página de Destaques**

```javascript
const Destaques = () => {
  return (
    <>
      <h2 className="category__title">Destaques</h2>
      <div className="cards-grid" role="list" aria-label="Postagens em destaque">
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 1</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 2</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 3</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 4</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 5</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 6</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 7</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 8</h3>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image"></div>
          <h3 className="card-vertical__title">Destaque 9</h3>
        </article>
      </div>
    </>
  )
}

export default Destaques
```

**Grid de cards:**
- **`cards-grid`** - classe CSS para grid responsivo
- **`card-vertical`** - layout vertical dos cards
- **`role="list"`** - identifica como lista
- **`aria-label`** - descrição para acessibilidade

## 🔧 Páginas de Administração

### **1. AdminCategorias.jsx - Admin Categorias**

```javascript
import { Link } from 'react-router-dom'

const AdminCategorias = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h3 style={{marginBottom: 'var(--space-md)'}}>Menu</h3>
        <ul style={{display: 'grid', gap: '.5rem', paddingLeft: '1rem', listStyle: 'disc', color: 'var(--color-gray-700)'}}>
          <li><Link to="/admin/categorias">Categorias</Link></li>
          <li><a href="#">Criar Post</a></li>
          <li><a href="#">Escolhas do Editor</a></li>
          <li><a href="#">Usuários</a></li>
          <li><a href="#">Fila de revisão</a></li>
          <li><a href="#">Fila de comentários</a></li>
        </ul>
      </aside>

      <section>
        <div className="stats">
          <div className="stat-card">
            <span className="stat-card__label">Posts</span>
            <span className="stat-card__value">128</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">Visualizações</span>
            <span className="stat-card__value">54k</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">Inscritos</span>
            <span className="stat-card__value">12k</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">Pendências</span>
            <span className="stat-card__value">7</span>
          </div>
        </div>

        <div className="panel">
          <h3 style={{marginBottom: 'var(--space-md)'}}>Categorias</h3>
          <input className="form-control" placeholder="Buscar categorias..." style={{marginBottom: 'var(--space-md)'}} />
          <table className="table" aria-label="Tabela de categorias">
            <thead>
              <tr>
                <th>Categoria</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Categoria #1</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Editar</button>
                  <button className="btn btn--outline">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>Categoria #2</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Editar</button>
                  <button className="btn btn--outline">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>Categoria #3</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Editar</button>
                  <button className="btn btn--outline">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>Categoria #4</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Editar</button>
                  <button className="btn btn--outline">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>Categoria #5</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Editar</button>
                  <button className="btn btn--outline">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AdminCategorias
```

**Layout de Admin:**
- **`admin-layout`** - grid com sidebar e conteúdo
- **`sidebar`** - menu de navegação lateral
- **`stats`** - cards com estatísticas
- **`panel`** - container do conteúdo principal
- **`table`** - tabela de dados

### **2. AdminCriarPost.jsx - Admin Criar Post**

```javascript
import { Link } from 'react-router-dom'

const AdminCriarPost = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h3 style={{marginBottom: 'var(--space-md)'}}>Menu</h3>
        <ul style={{display: 'grid', gap: '.5rem', paddingLeft: '1rem', listStyle: 'disc', color: 'var(--color-gray-700)'}}>
          <li><Link to="/admin/categorias">Categorias</Link></li>
          <li><Link to="/admin/criar-post">Criar Post</Link></li>
          <li><a href="#">Escolhas do Editor</a></li>
          <li><a href="#">Usuários</a></li>
          <li><a href="#">Fila de revisão</a></li>
          <li><a href="#">Fila de comentários</a></li>
        </ul>
      </aside>

      <section>
        <div className="stats">
          <div className="stat-card">
            <span className="stat-card__label">Posts</span>
            <span className="stat-card__value">128</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">Visualizações</span>
            <span className="stat-card__value">54k</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">Inscritos</span>
            <span className="stat-card__value">12k</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">Pendências</span>
            <span className="stat-card__value">7</span>
          </div>
        </div>

        <div className="panel">
          <h3 style={{marginBottom: 'var(--space-md)'}}>Criar Post</h3>
          <div style={{display: 'grid', gap: 'var(--space-md)'}}>
            <label htmlFor="post-title">Título</label>
            <input id="post-title" className="form-control" placeholder="Título" />
            <div className="panel" style={{padding: 'var(--space-md)'}}>
              <div className="placeholder" aria-label="Editor simulado">Escreva aqui... (Editor simulador)</div>
            </div>
            <div className="form-row">
              <div style={{display: 'grid', gap: 'var(--space-sm)'}}>
                <label htmlFor="post-tags">Categorias e tags</label>
                <input id="post-tags" className="form-control" placeholder="Categorias e tags" />
              </div>
              <div style={{display: 'grid', gap: 'var(--space-sm)'}}>
                <label htmlFor="post-cover">Upload da imagem de capa</label>
                <input id="post-cover" className="form-control" placeholder="Upload da imagem de capa" />
              </div>
            </div>
            <div style={{display: 'flex', gap: 'var(--space-md)'}}>
              <button className="btn btn--outline">Salvar rascunho</button>
              <button className="btn btn--outline">Enviar para revisão</button>
              <button className="btn btn--success">Publicar (admin)</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminCriarPost
```

**Formulário de criação:**
- **`form-row`** - layout em duas colunas
- **`placeholder`** - editor simulado
- **Botões de ação** - diferentes estados do post
- **Labels** - acessibilidade para inputs

## 🛣️ Sistema de Roteamento

### **App.jsx - Configuração de Rotas**

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import CriarConta from './pages/CriarConta'
import Destaques from './pages/Destaques'
import Assinar from './pages/Assinar'
import Perfil from './pages/Perfil'
import BuscarResultados from './pages/BuscarResultados'
import CategoriaTechno from './pages/CategoriaTechno'
import AdminCategorias from './pages/AdminCategorias'
import AdminCriarPost from './pages/AdminCriarPost'
import AdminEscolhas from './pages/AdminEscolhas'
import AdminUsuarios from './pages/AdminUsuarios'
import AdminFilaRevisao from './pages/AdminFilaRevisao'
import AdminComentarios from './pages/AdminComentarios'
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
            <Route path="/criar-conta" element={<CriarConta />} />
            <Route path="/destaques" element={<Destaques />} />
            <Route path="/assinar" element={<Assinar />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/buscar" element={<BuscarResultados />} />
            <Route path="/categoria/techno" element={<CategoriaTechno />} />
            <Route path="/admin/categorias" element={<AdminCategorias />} />
            <Route path="/admin/criar-post" element={<AdminCriarPost />} />
            <Route path="/admin/escolhas" element={<AdminEscolhas />} />
            <Route path="/admin/usuarios" element={<AdminUsuarios />} />
            <Route path="/admin/fila-revisao" element={<AdminFilaRevisao />} />
            <Route path="/admin/comentarios" element={<AdminComentarios />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
```

**Explicação do roteamento:**

#### **BrowserRouter:**
```javascript
<Router>
  {/* Envolve toda a aplicação */}
</Router>
```
- **Gerencia** histórico do navegador
- **Permite** navegação com botão voltar/avançar
- **URLs limpas** - sem hash (#)

#### **Routes:**
```javascript
<Routes>
  {/* Container das rotas */}
</Routes>
```
- **Agrupa** todas as rotas
- **Renderiza** apenas a rota ativa
- **Performance** - não renderiza todas as páginas

#### **Route:**
```javascript
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
```
- **`path`** - URL que ativa a rota
- **`element`** - componente a ser renderizado
- **Exato** - `/` só ativa em `/`, não em `/admin`

## 🎓 Conceitos Importantes

### **1. Navegação Programática:**
```javascript
import { useNavigate } from 'react-router-dom'

const MeuComponente = () => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/login')
  }
  
  return <button onClick={handleClick}>Ir para Login</button>
}
```

### **2. Parâmetros de Rota:**
```javascript
// Rota com parâmetro
<Route path="/categoria/:slug" element={<Categoria />} />

// Acessar parâmetro
import { useParams } from 'react-router-dom'

const Categoria = () => {
  const { slug } = useParams()
  return <div>Categoria: {slug}</div>
}
```

### **3. Query Parameters:**
```javascript
import { useSearchParams } from 'react-router-dom'

const Busca = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  
  return <div>Buscando por: {query}</div>
}
```

## 🚀 Próximos Passos

No próximo capítulo vamos:
1. **Implementar** responsividade
2. **Otimizar** para mobile
3. **Testar** em diferentes dispositivos
4. **Ajustar** breakpoints

---

**🎯 Próximo:** [Responsividade](./07-responsividade.md)
