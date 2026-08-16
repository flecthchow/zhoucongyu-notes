import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, posts } from "../../blog-data";
import Comments from "../../comments";
import SiteHeader from "../../site-header";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = `${post.title} — zhoucongyu notes`;
  return {
    title,
    description: post.excerpt,
    openGraph: { title, description: post.excerpt, images: [] },
    twitter: { title, description: post.excerpt, images: [] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader active="posts" />
      <main className="article-page">
        <header className="article-title">
          <p className="post-category">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="post-meta">
            <time dateTime={post.isoDate}>{post.date}</time>
            <span>{post.readTime} read</span>
            <span>By zhoucongyu</span>
          </div>
        </header>
        <article className="article-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>
        <Comments />
        <nav className="article-end" aria-label="Article navigation">
          <p>Thanks for reading.</p>
          <Link className="button" href="/">← Back to all posts</Link>
        </nav>
      </main>
      <footer className="site-footer">
        <span>© 2026 zhoucongyu notes</span>
        <span>A fish swimming in AI ocean.</span>
      </footer>
    </>
  );
}
