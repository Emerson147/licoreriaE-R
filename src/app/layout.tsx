import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nabvar from "@/components/Nabvar";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elizabeth's Store",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
        <Nabvar />
        {children}
        <Footer />
        </WixClientContextProvider>
        </body>
    </html>
  );
}
