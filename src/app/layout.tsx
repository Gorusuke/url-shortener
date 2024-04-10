import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/ui/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shorten-url",
  description: "Generated shorten url",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
      </body>
    </html>
  );
}
