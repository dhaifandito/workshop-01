import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";
import Header from "@/lib/components/Header";
import { fontRoboto } from "@/lib/styles/fonts";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontRoboto.variable)}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
