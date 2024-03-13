import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partycipate Login",
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

  export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
      {children}
      </>
    );
  }