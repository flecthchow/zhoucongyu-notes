import Link from "next/link";
import { posts } from "./blog-data";
import SiteHeader from "./site-header";

export default function Home() {
  return (
    <>
      <SiteHeader active="posts" />
      <main className="main-column">
        <section className="home-intro">
          <p className="kicker">A public notebook</p>
          <h1>👋 Welcome to zhoucongyu notes</h1>
          <p>
            Hi, I’m zhoucongyu—a fish swimming in the AI ocean. I document
            what I learn about technology, health, and small side projects.
          </p>
          <div className="intro-links" aria-label="Elsewhere">
            <a href="https://github.com/flecthchow" target="_blank" rel="noreferrer">GitHub ↗</a>
            <Link href="/about">About me</Link>
          </div>
        </section>

        <section className="post-feed" aria-label="Recent posts">
          {posts.map((post) => (
            <article className="post-entry" key={post.slug}>
              <header>
                <p className="post-category">{post.category}</p>
                <h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
              </header>
              <p className="post-excerpt">{post.excerpt}</p>
              <footer className="entry-meta">
                <time dateTime={post.isoDate}>{post.date}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime} read</span>
                <span aria-hidden="true">·</span>
                <span>zhoucongyu</span>
              </footer>
              <Link className="entry-link" href={`/posts/${post.slug}`} aria-label={`Read ${post.title}`} />
            </article>
          ))}
        </section>
      </main>
      <footer className="site-footer">
        <span>© 2026 zhoucongyu notes</span>
        <span>A fish swimming in AI ocean.</span>
      </footer>
    </>
  );
}
