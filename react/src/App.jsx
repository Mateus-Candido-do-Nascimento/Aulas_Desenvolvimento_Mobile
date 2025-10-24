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
