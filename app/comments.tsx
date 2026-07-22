"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current || commentsRef.current.childElementCount > 0) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "flecthchow/zhoucongyu-notes");
    script.setAttribute("data-repo-id", "R_kgDOTfvccw");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOTfvcc84DBs5N");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    commentsRef.current.appendChild(script);
  }, []);

  return (
    <section className="comments wrap" aria-labelledby="comments-heading">
      <div className="comments-intro">
        <p className="eyebrow">Continue the conversation</p>
        <h2 id="comments-heading">What do you think?</h2>
        <p>Comments are powered by GitHub Discussions. Sign in with GitHub to leave a thought.</p>
      </div>
      <div ref={commentsRef} />
    </section>
  );
}
