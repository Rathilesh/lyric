import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RightSideBar from "@/components/RightSideBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} min-h-screen transition flex flex-col`}
        >
          <NavBar />
          <div className="flex flex-row container flex-1">
            {children}
            <RightSideBar />
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
