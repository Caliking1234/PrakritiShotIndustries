import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import NavBar from "./_components/NavBar";

const NewFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s  | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon.svg",
      href: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-slate-100", NewFont.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
