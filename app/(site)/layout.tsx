export default function SiteLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const isUserLogged = false;
    return (


      <main>
        {
            isUserLogged && (
                <div>
                    <h2>Hi</h2>
                </div>
            )
        }
        {children}  
      </main>
    );
  }