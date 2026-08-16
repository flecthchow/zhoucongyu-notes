import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function SiteHeader({ active }: { active?: "posts" | "about" }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="zhoucongyu notes home">zhoucongyu notes</Link>
        <div className="nav-links">
          <Link className={active === "posts" ? "active" : undefined} href="/">Posts</Link>
          <Link className={active === "about" ? "active" : undefined} href="/about">About</Link>
          <a href="https://github.com/flecthchow/zhoucongyu-notes" target="_blank" rel="noreferrer">GitHub</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
