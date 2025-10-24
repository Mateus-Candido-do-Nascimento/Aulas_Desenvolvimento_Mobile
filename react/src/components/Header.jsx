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
