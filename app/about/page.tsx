import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <header className="site-header article-header">
        <Link className="wordmark" href="/"><span className="wordmark-dot" aria-hidden="true" /> Field Notes</Link>
        <Link className="back-link" href="/">← Home</Link>
      </header>
      <main className="about-page wrap">
        <p className="eyebrow">About this place</p>
        <h1>Hi, I’m <em>Your Name.</em></h1>
        <div className="about-grid">
          <div className="portrait-placeholder" aria-label="Space for your portrait"><span>YN</span></div>
          <div className="about-copy">
            <p className="lead">I’m a curious person living in Taipei, writing about technology, design, and the art of doing thoughtful work.</p>
            <p>Field Notes is where I collect the ideas that survive my notebook: practical lessons, unfinished questions, and observations I want to remember.</p>
            <p>This starter text is ready for you to replace with your own story. Tell readers what you care about, what you do, and what they can expect to find here.</p>
            <a className="text-link" href="mailto:hello@example.com">hello@example.com ↗</a>
          </div>
        </div>
      </main>
      <footer className="site-footer wrap"><strong>Field Notes</strong><p>Made with care in Taipei · © 2026</p></footer>
    </>
  );
}
