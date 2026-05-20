import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import "./globals.css";

const sans = Space_Grotesk({
  variable: '--font-sans',
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ["latin"],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'CognifAI',
  description: 'An AI-powered student productivity platform for notes, quizzes, flashcards, and study analytics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
