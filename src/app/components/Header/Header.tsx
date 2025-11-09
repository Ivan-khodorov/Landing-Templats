export default function Header() {
  return (
    <header className="header preview__content" role="banner">
      <div className="header__logo-wrapper" aria-label="Home">
        <img className="header__logo" src="/favicon.ico" alt="" />
        <span className="header__logo-ring" aria-hidden="true" />
      </div>

      <nav className="header__nav" aria-label="Main navigation">
        <ul className="header__nav-list">
          <li><a className="header__nav-link" href="#hero">Home</a></li>
          <li><a className="header__nav-link" href="#features">Features</a></li>
          <li><a className="header__nav-link" href="#contacts">Contacts</a></li>
        </ul>
      </nav>

      <div className="header__actions">
        {/* theme toggle (РІРёР·СѓР°Р», Р»РѕРіРёРєР° С‚РµРјС‹ СѓР¶Рµ РµСЃС‚СЊ РІ СЃРµСЂРІРёСЃРµ) */}
        <input id="theme-toggle" className="checkbox" type="checkbox" aria-label="Toggle theme" />
        <label htmlFor="theme-toggle" aria-label="Toggle theme" >
          <span className="icon-container">
            <span className="icon sun" aria-hidden>вЂ</span>
            <span className="icon moon" aria-hidden>рџЊ™</span>
          </span>
        </label>

        {/* Telegram */}
        <button className="header__action header__action--telegram" aria-label="Open Telegram">
          <span className="circle" aria-hidden="true" />
          <svg className="header__action-icon header__action-icon--telegram" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.03 15.47 8.9 18.6c.32 0 .46-.14.63-.3l1.52-1.46 3.15 2.31c.58.32 1 .15 1.16-.54l2.1-9.87c.21-.95-.36-1.32-.96-1.09L4.4 10.55c-.93.36-.92.88-.16 1.12l3.47 1.08L16.8 7.1c.39-.26.74-.12.45.14z" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button className="header__action header__action--whatsapp" aria-label="Open WhatsApp">
          <span className="circle" aria-hidden="true" />
          <svg className="header__actions-whatsapp" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.17 1.58 6L0 24l6.17-1.62a11.92 11.92 0 0 0 5.84 1.5h.01c6.62 0 11.99-5.37 11.99-12 0-3.2-1.25-6.22-3.49-8.4zM12 21.33h-.01a9.31 9.31 0 0 1-4.74-1.29l-.34-.2-3.66.96.98-3.57-.22-.37A9.31 9.31 0 0 1 2.66 12c0-5.15 4.2-9.34 9.35-9.34 2.48 0 4.81.97 6.56 2.72a9.23 9.23 0 0 1 2.7 6.62c0 5.15-4.2 9.33-9.34 9.33zm5.39-7.01c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.16-.2.3-.77.97-.95 1.16-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.81.38-.27.3-1.06 1.03-1.06 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.14 3.27 5.18 4.6.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.33.17-1.45-.07-.12-.26-.2-.56-.34z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

