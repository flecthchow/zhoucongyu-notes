import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <header className="site-header article-header">
        <Link className="wordmark" href="/"><span className="wordmark-dot" aria-hidden="true" /> zhoucongyu notes</Link>
        <Link className="back-link" href="/">← Home</Link>
      </header>
      <main className="about-page wrap">
        <p className="eyebrow">About this place</p>
        <h1>Hi, I’m <em>zhoucongyu.</em></h1>
        <div className="about-grid">
          <div className="portrait-placeholder" aria-label="zhoucongyu monogram"><span>ZC</span></div>
          <div className="about-copy">
            <p className="lead">A fish swimming in AI ocean.</p>
            <p>I write about the technology I am learning, the health habits I am testing, and the side projects I am bringing to life.</p>
            <p>This is my public notebook: a place for useful discoveries, honest experiments, and ideas that become clearer through writing.</p>
            <Link className="text-link" href="https://github.com/flecthchow/zhoucongyu-notes/discussions">Continue the conversation ↗</Link>
          </div>
        </div>
      </main>
      <footer className="site-footer wrap"><strong>zhoucongyu notes</strong><p>A fish swimming in AI ocean · © 2026</p></footer>
    </>
  );
}
