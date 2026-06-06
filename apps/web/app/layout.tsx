import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Frontend Pages",
  description:
    "A curated registry of open-source frontend pages and templates that are safe to preview, remix, and reuse."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
