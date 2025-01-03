import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "@/shared/styles/globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "RealTime Chat",
  description:
    "RealTime Chat is a personal project to learn how to build a realtime chat application using Next.js and Go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
