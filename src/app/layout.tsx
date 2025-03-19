import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BuyNowBanner from "@/components/BuyNowBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: "%s | Tyler Durden Portfolio",
    default: "Tyler Durden | Portfolio Template",
  },
  description: "A professional portfolio template for developers and designers to showcase their work, skills, and experience.",
  keywords: ["portfolio", "developer", "designer", "projects", "web development", "Tyler Durden", "software engineer"],
  authors: [{ name: "Tyler Durden", url: "https://github.com/manuarora700" }],
  creator: "Tyler Durden",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devpro-aceternity.vercel.app/",
    title: "Tyler Durden | Portfolio Template",
    description: "A professional portfolio template for developers and designers to showcase their work, skills, and experience.",
    siteName: "Tyler Durden Portfolio",
    images: [
      {
        url: "https://ext.same-assets.com/1402751420/849522504.png",
        width: 300,
        height: 300,
        alt: "Tyler Durden Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Durden | Portfolio Template",
    description: "A professional portfolio template for developers and designers to showcase their work, skills, and experience.",
    creator: "@tylerdurden",
    images: ["https://ext.same-assets.com/1402751420/849522504.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased bg-zinc-900`}>
        <main>
          <BuyNowBanner />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
