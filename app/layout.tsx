import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const WFVisualSans = localFont({
  src: "../public/fonts/WFVisualSansVF.woff2",
});

export const metadata: Metadata = {
  title: "RSD Style Design mockup",
  description: "Style design mockup for Ria Scureman Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={WFVisualSans.className}>
        <Nav />
        <main className="main-wrapper">
          <div className="container padding-global">{children}</div>
        </main>
      </body>
    </html>
  );
}
