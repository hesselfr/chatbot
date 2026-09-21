import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://www.flowfield.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Flowfield — AI engineers embedded in your business",
    template: "%s — Flowfield",
  },
  description:
    "Flowfield plaatst technische AI-engineers in Nederlandse MKB- en mid-marketbedrijven. Zij vinden repetitief werk en bouwen de automatisering, in de systemen die je al gebruikt.",
  keywords: [
    "AI engineer",
    "procesautomatisering",
    "workflow automatisering",
    "AI implementatie",
    "MKB automatisering",
    "forward deployed engineer",
    "Flowfield",
  ],
  authors: [{ name: "Flowfield" }],
  creator: "Flowfield",
  applicationName: "Flowfield",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Flowfield",
    title: "Flowfield — AI engineers embedded in your business",
    description:
      "Onze AI-engineers werken naast je team, vinden repetitieve processen en automatiseren ze in de systemen die je al gebruikt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowfield — AI engineers embedded in your business",
    description:
      "Onze AI-engineers werken naast je team, vinden repetitieve processen en automatiseren ze in de systemen die je al gebruikt.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
