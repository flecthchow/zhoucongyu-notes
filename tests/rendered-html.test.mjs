import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const postsRoot = new URL("../content/posts/", import.meta.url);
const outputRoot = new URL("../dist/client/", import.meta.url);

test("stores every published article in its own Markdown file", async () => {
  const files = (await readdir(postsRoot)).filter(
    (file) => file.endsWith(".md") && !file.startsWith("_"),
  );

  assert.deepEqual(files.sort(), [
    "cost-of-a-simple-life-online.md",
    "health-system-that-asks-less.md",
    "keeping-side-projects-small.md",
    "swimming-in-the-ai-ocean.md",
  ]);

  for (const file of files) {
    const source = await readFile(new URL(file, postsRoot), "utf8");
    for (const field of ["title", "excerpt", "category", "date", "isoDate", "readTime", "color"]) {
      assert.match(source, new RegExp(`^${field}:\\s+.+$`, "m"), `${file} is missing ${field}`);
    }
  }

  await readFile(new URL("_template.md", postsRoot), "utf8");
});

test("pre-renders the homepage and preserves every article URL", async () => {
  const homepage = await readFile(new URL("index.html", outputRoot), "utf8");
  assert.match(homepage, /Learning to swim in the AI ocean/);
  assert.match(homepage, /A health system that asks less of me/);

  const expected = new Map([
    ["swimming-in-the-ai-ocean", "I do not need to map the whole ocean"],
    ["health-system-that-asks-less", "Health advice can become another source of noise"],
    ["keeping-side-projects-small", "Small enough to finish is large enough to teach me something"],
    ["cost-of-a-simple-life-online", "Complexity rarely arrives all at once"],
  ]);

  for (const [slug, text] of expected) {
    const page = await readFile(new URL(`posts/${slug}/index.html`, outputRoot), "utf8");
    assert.match(page, new RegExp(text));
    assert.match(page, /Comments are powered by GitHub Discussions/);
  }

  const source = await readFile(new URL("app/blog-data.ts", projectRoot), "utf8");
  assert.match(source, /import\.meta\.glob/);
});
