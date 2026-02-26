import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoreProvider } from '@/context/StoreProvider';
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RevoShop - E-Commerce Milestone 3",
  description: "Tugas Milestone 3 FSSE RevoU oleh Tommy Poernomo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="bg-gray-50 min-h-screen">
          {children}
        </main>
        
        <footer className="bg-white border-t py-8 text-center text-sm text-gray-500">
          © 2026 RevoShop by Tommy Poernomo. All rights reserved.
        </footer>
      </body>
    </html>
  );
}