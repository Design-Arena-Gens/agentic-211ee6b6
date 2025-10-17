export default function Page() {
  return (
    <main className="viewport">
      <section className="login-shell">
        <header className="brand">
          <h1 className="brand-title">DOMUS</h1>
          <p className="brand-sub">Ingresso</p>
        </header>

        <form className="login-card" autoComplete="on">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>

          <div className="row">
            <label className="checkbox">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a className="link" href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn egg-dart">
            Sign in
          </button>

          <button type="button" className="btn leaf variant-ghost">
            Create account
          </button>
        </form>

        <footer className="note">By continuing you agree to our terms.</footer>
      </section>
    </main>
  );
}
