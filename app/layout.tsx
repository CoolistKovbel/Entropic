import type { Metadata } from "next";
import { inter } from "./components/ui/fonts";

import "./globals.css";
import MainHeader from "./components/header/main-header";
import { ModalProvider } from "./components/providers/model-provider";
import FooterMain from "./components/mainfooter";

export const metadata: Metadata = {
  title: "Ephotopicup",
  description:
    "Welcome to the place where you will be able to receive rewards from trades, able to stake, as well as  be able to be part of a community who cares and looks out for one another.",
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
        <FooterMain /> 
      </body>
      <ModalProvider />
    </html>
  );
}
