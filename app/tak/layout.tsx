import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tak — StaticForge",
  description: "Din tilmelding med produkt og webshop er modtaget.",
  robots: { index: false, follow: true },
};

export default function TakLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
