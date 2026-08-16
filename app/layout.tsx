import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zhoucongyu.pages.dev"),
  title: "zhoucongyu notes — A public notebook",
  description: "A fish swimming in AI ocean. Notes on tech, health, and side projects.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "zhoucongyu notes",
    description: "A fish swimming in AI ocean. Notes on tech, health, and side projects.",
    type: "website",
    images: [{ url: "/og-reading.png", width: 1734, height: 907, alt: "zhoucongyu notes — A public notebook" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "zhoucongyu notes",
    description: "A fish swimming in AI ocean. Notes on tech, health, and side projects.",
    images: ["/og-reading.png"],
  },
};

const themeScript = `(() => { try { const saved = localStorage.getItem('theme'); const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; } catch {} })();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
