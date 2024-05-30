import type { Metadata } from "next";
import { inter } from "./components/ui/fonts";

import "./globals.css";
import MainHeader from "./components/header/main-header";
import { ModalProvider } from "./components/providers/model-provider";
import FooterMain from "./components/footer";

export const metadata: Metadata = {
  title: "Ephotopicup",
  description:
    "Welcome to the place where you will be able to receive tokens from airdrops that will be done by users, the same things with erc-721 tokens, as well as  be able to be part of a community who cares and looks out for one another.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 flex flex-col w-full gap-10`} >
        <MainHeader />
        {children}
      </body>
      <FooterMain />
      <ModalProvider />
    </html>
  );
}
