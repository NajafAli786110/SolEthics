"use client";

import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export const metadata = {
  title: {
    template: "SolEthics",
    default: "SolEthics | Where Solution Meet Ethics",
  },
};

export default function Layout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
    }
  }, [isLoading]);
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <RootLayout>{children}</RootLayout>
        )}
      </body>
    </html>
  );
}
