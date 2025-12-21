
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClarityProvider from "@/components/ClarityProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isuranga Warnasooriya - Full Stack Developer",
  description: "Portfolio of Isuranga Warnasooriya - Associate Software Engineer specializing in Full Stack Development with expertise in Node.js, .NET, React, and Angular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ...existing code...
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClarityProvider />
        {children}
      </body>
    // ...existing code...
    </html>
  );
}
