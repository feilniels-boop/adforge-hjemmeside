import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StaticForge — 3 gratis static koncepter til dit produkt",
  description:
    "Tilmeld dig med webshop, produkt URL og lidt om dit tilbud. Få tre preview koncepter med hook, vinkel og visuel retning inden for typisk 48 timer.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-zinc-50 font-sans text-zinc-900">{children}</body>
    </html>
  );
}
