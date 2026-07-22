import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, posts } from "../../blog-data";
import Comments from "../../comments";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: `${post.title} — zhoucongyu notes`, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <header className="site-header article-header">
        <Link className="wordmark" href="/">
          <span className="wordmark-dot" aria-hidden="true" /> zhoucongyu notes
        </Link>
        <Link className="back-link" href="/">← All writing</Link>
      </header>
      <main className="article-page">
        <header className="article-title wrap">
          <div className="post-meta">
            <span>{post.category}</span>
            <time dateTime={post.isoDate}>{post.date}</time>
            <span>{post.readTime} read</span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </header>
        <div className={`article-art art-${post.color}`} aria-hidden="true">
          <span>zhoucongyu notes</span>
          <i />
        </div>
        <article className="article-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>
        <Comments />
        <nav className="article-end wrap" aria-label="Article navigation">
          <p>Thanks for reading.</p>
          <Link className="button" href="/">Back to all writing</Link>
        </nav>
      </main>
      <footer className="site-footer wrap">
        <strong>zhoucongyu notes</strong><p>A fish swimming in AI ocean · © 2026</p>
      </footer>
    </>
  );
}
