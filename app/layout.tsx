import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

// Import Components //
import Navbar from "@/components/molecules/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/molecules/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const aeonikRegular = localFont({
  src: "./aeonik-regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-aeonik-regular",
});

const aeonikMedium = localFont({
  src: "./aeonik-medium.otf",
  weight: "700",
  style: "normal",
  variable: "--font-aeonik-medium",
});

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
    <html
      lang="en"
      className={`scroll-smooth overflow-y-scroll ${poppins.className} ${aeonikRegular.variable} ${aeonikMedium.variable}`}
    >
      <body className="bg-background">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
