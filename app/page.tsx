import Link from "next/link";
import { posts } from "./blog-data";

export default function Home() {
  const [featured, ...morePosts] = posts;

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Field Notes home">
          <span className="wordmark-dot" aria-hidden="true" />
          Field Notes
        </Link>
        <nav aria-label="Main navigation">
          <Link href="#writing">Writing</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <main>
        <section className="hero wrap">
          <p className="eyebrow">A personal blog about making things</p>
          <h1>
            A quieter corner
            <br />
            of the <em>internet.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              Notes on technology, thoughtful work, and the small discoveries
              worth keeping. Written by <strong>Your Name</strong> from Taipei.
            </p>
            <a className="round-link" href="#writing" aria-label="Browse recent writing">
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            <span>Ideas</span><i>✦</i><span>Experiments</span><i>✦</i>
            <span>Useful things</span><i>✦</i><span>Ideas</span><i>✦</i>
            <span>Experiments</span><i>✦</i><span>Useful things</span><i>✦</i>
          </div>
        </div>

        <section className="featured wrap" id="writing">
          <div className={`feature-art art-${featured.color}`}>
            <span className="art-number">01</span>
            <span className="art-ring" />
            <span className="art-caption">Field note · {featured.readTime}</span>
          </div>
          <article className="feature-copy">
            <div className="post-meta">
              <span>{featured.category}</span>
              <time dateTime={featured.isoDate}>{featured.date}</time>
            </div>
            <h2>
              <Link href={`/posts/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p>{featured.excerpt}</p>
            <Link className="text-link" href={`/posts/${featured.slug}`}>
              Read the essay <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </section>

        <section className="latest wrap" aria-labelledby="latest-heading">
          <div className="section-heading">
            <p className="eyebrow">From the notebook</p>
            <h2 id="latest-heading">Recent writing</h2>
          </div>
          <div className="post-list">
            {morePosts.map((post, index) => (
              <article className="post-row" key={post.slug}>
                <span className="row-number">0{index + 2}</span>
                <div>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <time dateTime={post.isoDate}>{post.date}</time>
                  </div>
                  <h3>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
                <Link className="row-arrow" href={`/posts/${post.slug}`} aria-label={`Read ${post.title}`}>
                  ↗
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="now wrap">
          <div>
            <p className="eyebrow">Currently</p>
            <h2>Learning in public,<br />one note at a time.</h2>
          </div>
          <p>
            This is a living notebook, not a content machine. New pieces arrive
            when there is something honest and useful to share.
          </p>
          <Link className="button" href="/about">More about this blog</Link>
        </section>
      </main>

      <footer className="site-footer wrap">
        <div>
          <span className="wordmark-dot" aria-hidden="true" />
          <strong>Field Notes</strong>
        </div>
        <p>Made with care in Taipei · © 2026</p>
        <a href="mailto:hello@example.com">Say hello ↗</a>
      </footer>
    </>
  );
}
