import { ModalProvider } from "../components/providers/model-provider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
      {children}      
      <ModalProvider />
    </main>
  );
}
