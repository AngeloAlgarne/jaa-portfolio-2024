import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio 2024",
  description: "John Angelo Algarne's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex w-full min-h-screen flex-col items-center px-24">
          <Navbar />
          <div className="w-4/5">{children}</div>
        </main>
      </body>
    </html>
  );
}
