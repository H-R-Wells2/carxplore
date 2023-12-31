import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "CarXplore",
  description: "Discover best cars",
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
