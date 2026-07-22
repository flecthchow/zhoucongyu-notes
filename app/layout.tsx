import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zhoucongyu-notes.pages.dev"),
  title: "zhoucongyu notes — Swimming in the AI ocean",
  description: "A fish swimming in AI ocean. Notes on tech, health, and side projects.",
  openGraph: { title: "zhoucongyu notes", description: "A fish swimming in AI ocean. Notes on tech, health, and side projects.", type: "website", images: [{ url: "/og-zhoucongyu.png", width: 1734, height: 907, alt: "zhoucongyu notes — Swimming in the AI ocean" }] },
  twitter: { card: "summary_large_image", title: "zhoucongyu notes", description: "A fish swimming in AI ocean. Notes on tech, health, and side projects.", images: ["/og-zhoucongyu.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
