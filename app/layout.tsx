import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Components //
import Navbar from "@/components/molecules/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthawenasakti Gemilang",
  description: "Arthawenasakti Gemilang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
