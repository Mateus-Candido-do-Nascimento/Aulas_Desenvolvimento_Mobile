import { Link } from 'react-router-dom'

const AdminCriarPost = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h3 style={{marginBottom: 'var(--space-md)'}}>Menu</h3>
        <ul style={{display: 'grid', gap: '.5rem', paddingLeft: '1rem', listStyle: 'disc', color: 'var(--color-gray-700)'}}>
          <li><Link to="/admin/categorias">Categorias</Link></li>
          <li><Link to="/admin/criar-post">Criar Post</Link></li>
          <li><Link to="/admin/escolhas">Escolhas do Editor</Link></li>
          <li><Link to="/admin/usuarios">Usuários</Link></li>
          <li><Link to="/admin/fila-revisao">Fila de revisão</Link></li>
          <li><Link to="/admin/comentarios">Fila de comentários</Link></li>
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

