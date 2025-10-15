import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalbovač – Srovnávač cen stavebních materiálů",
  description: "Okamžité srovnání cen materiálů napříč stavebninami. Ušetřete čas i peníze.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="antialiased">{children}</body>
    </html>
  );
}
