const CriarConta = () => {
  return (
    <section className="panel" style={{maxWidth: '760px', margin: '0 auto'}}>
      <h2 style={{fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-lg)'}}>Criar Conta</h2>
      <div style={{display: 'grid', gap: 'var(--space-md)'}}>
        <label htmlFor="signup-name">Nome completo</label>
        <input id="signup-name" className="form-control" placeholder="Nome completo" />
        <label htmlFor="signup-email">E-mail</label>
        <input id="signup-email" className="form-control" type="email" placeholder="E-mail" />
        <div className="form-row">
          <div style={{display: 'grid', gap: 'var(--space-sm)'}}>
            <label htmlFor="signup-password">Senha</label>
            <input id="signup-password" className="form-control" type="password" placeholder="Senha" />
          </div>
          <div style={{display: 'grid', gap: 'var(--space-sm)'}}>
            <label htmlFor="signup-password-confirm">Confirmar senha</label>
            <input id="signup-password-confirm" className="form-control" type="password" placeholder="Confirmar senha" />
          </div>
        </div>
        <label htmlFor="signup-consent" style={{display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-gray-700)', fontSize: 'var(--font-size-sm)'}}>
          <input id="signup-consent" type="checkbox" /> Concordo com os termos e a política de privacidade
        </label>
        <div>
          <button className="btn btn--success">Cadastrar</button>
        </div>
      </div>
    </section>
  )
}

export default CriarConta

