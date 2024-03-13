import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";
import Header from "@/lib/components/Header";
import { fontRoboto } from "@/lib/styles/fonts";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/reactQueryProviders";
import { url } from "inspector";
import { LoginProvider } from "@/lib/context/useLogin";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partycipate",
  description: "Let's participate in the party",
  metadataBase: new URL('https://partycipate01.vercel.app'),
  authors: [{
    name:"Dhaifan Dito Adrian"
  }],
  keywords: ["participate","party","community","event"],
  openGraph: {
    title: "Partycipate",
    description: "Let's participate in the party",
    url: 'https://partycipate01.vercel.app',
    type: "website"
  },
  twitter: {
    site: '@partycipate',
    description: 'Participate in the party',
    title: 'partycipate',
    creator: '@dhaifandito12'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontRoboto.variable)}>
        <div className="bg-gray-100 min-h-screen font-robotomono">
          <ReactQueryProvider>
            <LoginProvider>
              <div>
            <Header />
            {children}
            </div>
            </LoginProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
