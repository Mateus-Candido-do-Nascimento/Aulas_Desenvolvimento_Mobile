import { Link } from 'react-router-dom'

const AdminEscolhas = () => {
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
          <h3 style={{marginBottom: 'var(--space-md)'}}>Escolhas do Editor</h3>
          <input className="form-control" placeholder="Buscar posts..." style={{marginBottom: 'var(--space-md)'}} />
          <table className="table">
            <thead>
              <tr>
                <th>Post</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Post #1</td>
                <td className="table__actions">
                  <button className="btn btn--danger">Remover</button>
                </td>
              </tr>
              <tr>
                <td>Post #2</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Agendar</button>
                </td>
              </tr>
              <tr>
                <td>Post #3</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Agendar</button>
                </td>
              </tr>
              <tr>
                <td>Post #4</td>
                <td className="table__actions">
                  <button className="btn btn--danger">Remover</button>
                </td>
              </tr>
              <tr>
                <td>Post #5</td>
                <td className="table__actions">
                  <button className="btn btn--outline">Agendar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AdminEscolhas

