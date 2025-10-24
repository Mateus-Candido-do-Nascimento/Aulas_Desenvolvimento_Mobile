const Perfil = () => {
  return (
    <div className="content-layout" style={{gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)'}}>
      <section className="panel">
        <h3 style={{marginBottom: 'var(--space-md)'}}>Perfil</h3>
        <div className="placeholder" style={{height: '140px', marginBottom: 'var(--space-md)'}}></div>
        <label htmlFor="profile-name">Nome</label>
        <input id="profile-name" className="form-control" placeholder="Nome" style={{marginBottom: 'var(--space-sm)'}} />
        <label htmlFor="profile-bio">Bio</label>
        <input id="profile-bio" className="form-control" placeholder="Bio" />
        <div style={{marginTop: 'var(--space-md)'}}>
          <button className="btn btn--success">Salvar</button>
        </div>
      </section>
      <section>
        <h3 style={{marginBottom: 'var(--space-md)'}}>Suas Postagens</h3>
        <div style={{display: 'grid', gap: 'var(--space-md)'}}>
          <article className="panel" style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'var(--space-md)', alignItems: 'center'}}>
            <div className="placeholder"></div>
            <div>
              <span style={{color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)'}}>Rascunho</span>
              <h4>Post 1</h4>
            </div>
          </article>
          <article className="panel" style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'var(--space-md)', alignItems: 'center'}}>
            <div className="placeholder"></div>
            <div>
              <span style={{color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)'}}>Publicado</span>
              <h4>Post 2</h4>
            </div>
          </article>
          <article className="panel" style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'var(--space-md)', alignItems: 'center'}}>
            <div className="placeholder"></div>
            <div>
              <span style={{color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)'}}>Em análise</span>
              <h4>Comentário 1</h4>
            </div>
          </article>
          <article className="panel" style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'var(--space-md)', alignItems: 'center'}}>
            <div className="placeholder"></div>
            <div>
              <span style={{color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)'}}>Publicado</span>
              <h4>Comentário 2</h4>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Perfil

