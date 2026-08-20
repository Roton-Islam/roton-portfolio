import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roton Islam | Frontend Developer",
  description:
    "Roton Islam is a frontend developer specializing in React, Next.js, TypeScript and Tailwind CSS.",
  keywords: [
    "Roton Islam",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
  ],
  authors: [
    {
      name: "Roton Islam",
    },
  ],
  creator: "Roton Islam",
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
