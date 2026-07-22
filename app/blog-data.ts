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
    slug: "swimming-in-the-ai-ocean",
    title: "Learning to swim in the AI ocean",
    excerpt: "How I stay curious, build small experiments, and keep my own direction while AI changes the current around us.",
    category: "Tech",
    date: "July 18, 2026",
    isoDate: "2026-07-18",
    readTime: "5 min",
    color: "coral",
    paragraphs: [
      "AI feels less like a single tool and more like an ocean: large, fast-moving, and full of unfamiliar life. I do not expect to understand every current. I want to become a better swimmer.",
      "For me, that means building small experiments instead of collecting endless opinions. A working prototype teaches me where a model is useful, where it is brittle, and where human judgment still matters most.",
      "It also means keeping a direction of my own. Speed is exciting, but curiosity is a better compass. The goal is not to chase every new wave; it is to notice which ideas help me think, create, and live more deliberately.",
      "This blog is my logbook from that journey. I will share what works, what surprises me, and the questions that remain open.",
    ],
    quote: "I do not need to map the whole ocean. I only need to keep learning how to swim.",
  },
  {
    slug: "health-system-that-asks-less",
    title: "A health system that asks less of me",
    excerpt: "The most sustainable health routine is often the one with fewer numbers, fewer rules, and a clearer next step.",
    category: "Health",
    date: "July 10, 2026",
    isoDate: "2026-07-10",
    readTime: "4 min",
    color: "blue",
    paragraphs: [
      "Health advice can become another source of noise. When every meal, workout, and hour of sleep becomes a score, the system designed to support life can begin to dominate it.",
      "I am experimenting with a smaller loop: sleep at a consistent time, move every day, eat mostly simple food, and notice how I feel. The measurements are there when they answer a real question, not as a permanent judgment.",
      "A useful routine should reduce the number of decisions I make. If it needs constant motivation, it is probably still too complicated.",
    ],
  },
  {
    slug: "keeping-side-projects-small",
    title: "Why I keep my side projects small",
    excerpt: "Small projects create a short path between an idea, a working version, and the lesson hidden inside it.",
    category: "Side project",
    date: "June 28, 2026",
    isoDate: "2026-06-28",
    readTime: "6 min",
    color: "lime",
    paragraphs: [
      "A side project becomes heavy when it has to justify itself before it has taught me anything. I prefer projects that can reach a rough, useful version in a weekend or two.",
      "A narrow scope creates momentum. It forces one clear decision: what is the smallest version that proves the idea? Everything else can wait until a real user—or my own repeated use—asks for it.",
      "Finishing small projects also creates reusable pieces: a pattern, a script, a design decision, or simply better taste. Those pieces compound even when the project itself stays tiny.",
      "The result does not need to become a company. Learning something concrete is already a return.",
    ],
    quote: "Small enough to finish is large enough to teach me something.",
  },
  {
    slug: "cost-of-a-simple-life-online",
    title: "The real cost of a simple life online",
    excerpt: "A personal site can cost almost nothing—if you resist adding services before you need them.",
    category: "Tech",
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
