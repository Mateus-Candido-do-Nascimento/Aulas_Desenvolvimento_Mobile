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

