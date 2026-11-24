import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little Things About You ♡",
  description: "A little collection of beautiful memories.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
