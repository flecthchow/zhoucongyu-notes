export type PostColor = "coral" | "blue" | "lime" | "gold";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  color: PostColor;
  content: string;
};

const postSources = import.meta.glob("../content/posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const colors = new Set<PostColor>(["coral", "blue", "lime", "gold"]);

function parseFrontMatter(fileName: string, source: string) {
  const normalized = source.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    throw new Error(`${fileName}: Markdown files must begin with front matter.`);
  }

  const closingMarker = normalized.indexOf("\n---\n", 4);
  if (closingMarker === -1) {
    throw new Error(`${fileName}: front matter is missing its closing --- marker.`);
  }

  const data: Record<string, unknown> = {};
  for (const line of normalized.slice(4, closingMarker).split("\n")) {
    if (line.trim() === "") continue;
    const separator = line.indexOf(":");
    if (separator === -1) {
      throw new Error(`${fileName}: invalid front matter line "${line}".`);
    }

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();
    try {
      data[key] = rawValue.startsWith('"') ? JSON.parse(rawValue) : rawValue;
    } catch {
      throw new Error(`${fileName}: front matter field "${key}" has an invalid value.`);
    }
  }

  return { data, content: normalized.slice(closingMarker + 5) };
}

function requiredString(data: Record<string, unknown>, key: string, fileName: string) {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${fileName}: front matter field "${key}" must be a non-empty string.`);
  }
  return value.trim();
}

function parsePost(filePath: string, source: string): Post {
  const fileName = filePath.split("/").at(-1) ?? filePath;
  const slug = fileName.replace(/\.md$/, "");
  const { data, content } = parseFrontMatter(fileName, source);
  const color = requiredString(data, "color", fileName);

  if (!colors.has(color as PostColor)) {
    throw new Error(`${fileName}: "color" must be coral, blue, lime, or gold.`);
  }

  return {
    slug,
    title: requiredString(data, "title", fileName),
    excerpt: requiredString(data, "excerpt", fileName),
    category: requiredString(data, "category", fileName),
    date: requiredString(data, "date", fileName),
    isoDate: requiredString(data, "isoDate", fileName),
    readTime: requiredString(data, "readTime", fileName),
    color: color as PostColor,
    content: content.trim(),
  };
}

export const posts = Object.entries(postSources)
  .filter(([filePath]) => !filePath.split("/").at(-1)?.startsWith("_"))
  .map(([filePath, source]) => parsePost(filePath, source))
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
