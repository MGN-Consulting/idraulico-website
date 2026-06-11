import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'Idraulico di Bozzi Antonio | Pronto Intervento Milano e Provincia 24/7",
  description: "Tubi rotti, allagamento o caldaia in blocco? Arriviamo in 45 minuti! Idraulico onesto, trasparente ed economico a Milano e provincia. Assistenza h24.",
  keywords: "idraulico milano, pronto intervento idraulico, riparazione caldaia milano, idraulico urgente milano, perdite acqua, spurghi milano",
  authors: [{ name: "Antonio Bozzi" }],
  openGraph: {
    title: "L'Idraulico di Bozzi Antonio | Pronto Intervento h24",
    description: "Garantito in 45 minuti o l'uscita è gratis! Il tuo idraulico di fiducia onesto e trasparente a Milano.",
    type: "website",
    locale: "it_IT",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
