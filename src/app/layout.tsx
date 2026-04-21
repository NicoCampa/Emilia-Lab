import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { siteContent } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.it.meta.title,
  description: siteContent.it.meta.description,
  icons: {
    icon: "/emilia-logo.png",
    apple: "/emilia-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
