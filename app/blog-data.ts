export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  color: "coral" | "blue" | "lime" | "gold";
  paragraphs: string[];
  quote?: string;
};

export const posts: Post[] = [
  {
    slug: "small-web-big-possibilities",
    title: "The small web still holds big possibilities",
    excerpt: "Why making a personal place online may be the most optimistic thing you can do with the internet right now.",
    category: "Internet",
    date: "July 18, 2026",
    isoDate: "2026-07-18",
    readTime: "5 min",
    color: "coral",
    paragraphs: [
      "There is something quietly radical about owning a small patch of the internet. No algorithm decides whether your thoughts deserve an audience. No feed asks you to be louder, quicker, or more certain than you really are.",
      "A personal website can be unfinished. It can change shape as you do. It can contain a careful essay beside a tiny list of links, a photograph from Tuesday, or a question you have not answered yet. That looseness is not a flaw. It is the point.",
      "The tools have also become wonderfully accessible. A simple collection of text files can become a fast, beautiful site for almost nothing. The difficult part is no longer publishing. It is choosing what you want to say when the usual incentives are removed.",
      "My hope for this space is modest: to notice more carefully, to explain what I learn, and to leave behind a trail that may be useful to someone else. That feels like enough.",
    ],
    quote: "A blog is less like a publication and more like a garden: useful because someone keeps tending it.",
  },
  {
    slug: "build-tools-that-disappear",
    title: "Build tools that know when to disappear",
    excerpt: "The best technology makes room for attention instead of constantly asking for it.",
    category: "Design",
    date: "July 10, 2026",
    isoDate: "2026-07-10",
    readTime: "4 min",
    color: "blue",
    paragraphs: [
      "We often judge a tool by the number of things it can do. A longer feature list looks like progress, even when every new capability creates another choice, notification, or surface to manage.",
      "But the tools I return to are usually the quiet ones. They remember sensible defaults. They make the next action obvious. Then they get out of the way and let the real work become the centre of attention.",
      "This is a useful design test: after someone learns the interface, does it continue to announce itself? Good tools become familiar enough to feel almost invisible. What remains is the person and what they came to make.",
    ],
  },
  {
    slug: "what-i-keep-in-a-digital-garden",
    title: "What I keep in a digital garden",
    excerpt: "A practical system for saving ideas without turning curiosity into another administrative job.",
    category: "Practice",
    date: "June 28, 2026",
    isoDate: "2026-06-28",
    readTime: "6 min",
    color: "lime",
    paragraphs: [
      "My notes used to be a warehouse. I saved everything because storage was cheap, then rarely returned because finding the useful pieces was expensive.",
      "Now I keep only three kinds of notes: observations in my own words, ideas connected to an active question, and references I expect to use soon. Everything else can be found again if I truly need it.",
      "The garden metaphor helps because a garden is maintained, not merely accumulated. Some notes grow into essays. Some combine with others. Many are composted. The value comes from returning, pruning, and making new paths between old ideas.",
      "A small collection you know well is more powerful than a perfect archive you never visit.",
    ],
    quote: "Save fewer things. Return to them more often.",
  },
  {
    slug: "cost-of-a-simple-life-online",
    title: "The real cost of a simple life online",
    excerpt: "A personal site can cost almost nothing—if you resist adding services before you need them.",
    category: "Technology",
    date: "June 16, 2026",
    isoDate: "2026-06-16",
    readTime: "3 min",
    color: "gold",
    paragraphs: [
      "Complexity rarely arrives all at once. It starts with a helpful service, then an integration, then a subscription required to keep the integration working. Soon the website has become a small collection of monthly bills.",
      "For a personal blog, static pages are usually enough. They are fast, secure, and inexpensive to host. A free deployment service and an optional domain can support years of writing without a database or maintenance schedule.",
      "The best time to add infrastructure is when a real need appears repeatedly. Until then, simplicity is not a compromise. It is a feature that protects your time, money, and desire to keep publishing.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
