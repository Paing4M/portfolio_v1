import React from "react";
import type {Metadata} from "next";
import {Roboto_Condensed} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BgBlur from "@/components/BgBlur";
import ActiveSectionProvider from "@/context/ActiveSectionContext";
import ThemeProvider from "@/context/ThemeContext";

const roboto_condensed = Roboto_Condensed({
  variable: "--font-roboto_condensed",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Web Developer.  Web Developer with a solid foundation in modern web technologies. Skilled in React.js, Next.js, and\n" +
    "Laravel, offering expertise in both frontend and backend development.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'scroll-smooth'}>
    <body
      suppressHydrationWarning
      className={`${roboto_condensed.className} antialiased bg-primary  text-text-color`}
    >
    <ThemeProvider>
      <ActiveSectionProvider>
        <Header/>
        <BgBlur/>
        {children}
      </ActiveSectionProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
