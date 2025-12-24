import type { Metadata } from "next";
import { Geist, Geist_Mono, Host_Grotesk, League_Gothic } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Editor",
  description: "Write and edit smarter with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hostGrotesk.variable} ${leagueGothic.variable} antialiased `}
      >
        <Navbar />
        <main className="pt-24 overflow-hidden min-h-screen bg-[#101010]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
