import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/ui/header/header';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Shuaib's Portfolio",
  description: "Portfolio website showcasing Shuaib's skills as a React/Next.js developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className=""> <Header /></div>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
