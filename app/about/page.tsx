import Link from "next/link";
import SiteHeader from "../site-header";

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="about-page">
        <p className="kicker">About this place</p>
        <h1>Hi, I’m zhoucongyu.</h1>
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
      <footer className="site-footer">
        <span>© 2026 zhoucongyu notes</span>
        <span>A fish swimming in AI ocean.</span>
      </footer>
    </>
  );
}
