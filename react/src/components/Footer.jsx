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

