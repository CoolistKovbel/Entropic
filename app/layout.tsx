import type { Metadata } from "next";
import { inter } from "./components/ui/fonts";

import "./globals.css";
import MainHeader from "./components/main-header";


export const metadata: Metadata = {
  title: "EntropicScene",
  description:
    "Welome to the place where you will be able to receive tokens from airdrops that will be done by users, the same things with erc-721 tokens, as well as  be able to be part of a community who cares and looks out for one another.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}  
      </body>
    </html>
  );
}


