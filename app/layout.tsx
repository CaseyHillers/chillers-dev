import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casey Hillers",
  description: "Personal blog",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={courierPrime.className}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
