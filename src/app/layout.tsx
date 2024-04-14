import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isshin Uzumaki",
  description: "Candidature - Isshin Uzumaki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
