import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@ui/navbar/navbar";
import Footer from "@ui/footer/footer";
import { ThemeProvider } from "@lib/context/themeContext";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dongsub Kim",
  description: "Dongsub Kim's personal website | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={plusJakarta.variable}>
        <ThemeProvider>
          <Navbar />
          <main style={{ marginTop: "var(--navbar-height)" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
