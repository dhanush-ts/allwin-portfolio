import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allwin Joseph — AI & ML Engineer",
  description: "Portfolio of Allwin Joseph — AI & Data Science undergraduate, ML engineer, and backend developer building intelligent, scalable systems.",
  authors: [{ name: "Allwin Joseph" }],
  openGraph: {
    title: "Allwin Joseph — AI & ML Engineer",
    description: "AI & Data Science undergraduate building intelligent systems with Python, ML, NLP and FastAPI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
