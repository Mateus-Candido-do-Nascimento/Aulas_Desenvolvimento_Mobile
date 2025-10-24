const CategoriaTechno = () => {
  return (
    <section className="category" aria-labelledby="category-title">
      <h2 id="category-title" className="category__title">Categoria: Techno</h2>

      <div className="category-filters" role="list" aria-label="Filtros da categoria">
        <button className="category-tag" role="listitem">Popular</button>
        <button className="category-tag" role="listitem">Mais recentes</button>
        <button className="category-tag" role="listitem">IA</button>
        <button className="category-tag" role="listitem">Produtividade</button>
      </div>

      <div className="cards-grid" role="list" aria-label="Lista de postagens da categoria Techno">
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 1</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 2</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 3</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 4</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 5</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 6</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 7</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 8</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
        <article className="card-vertical" role="listitem">
          <div className="card-vertical__image" aria-label="Imagem do post"></div>
          <h3 className="card-vertical__title">Título da Postagem 9</h3>
          <time className="card-vertical__date" dateTime="2025-07-31">31 Jul 2025</time>
        </article>
      </div>

      <div className="load-more">
        <button className="btn btn--secondary">Carregar mais</button>
      </div>
    </section>
  )
}

export default CategoriaTechno

