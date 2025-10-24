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
