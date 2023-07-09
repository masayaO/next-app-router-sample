import "./globals.css";
import { HeaderTitle } from "@/app/_components/HeaderTitle";
import { NavLinks } from "@/app/_components/NavLinks";

export const metadata = {
  title: "RSC HackerNews Bookmark",
  description: "HackerNews Bookmark App with Next App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <HeaderTitle>{metadata.title}</HeaderTitle>
          <NavLinks
            links={[
              { text: "Home", url: "/" },
              { text: "My", url: "/my" },
            ]}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
