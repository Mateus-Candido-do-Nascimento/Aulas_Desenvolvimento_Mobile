const Assinar = () => {
  return (
    <section className="panel" aria-labelledby="newsletter-title" style={{maxWidth: '760px', margin: '0 auto'}}>
      <h2 id="newsletter-title" style={{fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-lg)'}}>Assine a newsletter</h2>
      <div style={{display: 'grid', gap: 'var(--space-md)'}}>
        <label htmlFor="newsletter-email">E-mail</label>
        <input id="newsletter-email" className="form-control" type="email" placeholder="E-mail" />
        <label htmlFor="newsletter-consent" style={{display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-gray-700)', fontSize: 'var(--font-size-sm)'}}>
          <input id="newsletter-consent" type="checkbox" /> Concordo em receber comunicações e li a política de privacidade.
        </label>
        <div>
          <button className="btn btn--success">Assinar</button>
        </div>
      </div>
    </section>
  )
}

export default Assinar

