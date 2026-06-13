import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'IDRAULICO di Bozzi Antonio | Pronto Intervento Modena e Provincia 24/7",
  description: "Tubi rotti, allagamento o caldaia in blocco? Arriviamo in 45 minuti! Idraulico onesto, trasparente ed economico a Modena e provincia. Assistenza H24.",
  keywords: "idraulico modena, pronto intervento idraulico, riparazione caldaia modena, idraulico urgente modena, perdite acqua, impianti idraulici modena, carotaggio modena, impianti antincendio, impianti antincendio modena, montare condizionatore, condizionatore modena, rifare bagno, rifare bagno modena, miglior idraulico modena, saldatore modena, centrali termiche modena",
  authors: [{ name: "Antonio Bozzi" }],
  openGraph: {
    title: "L'IDRAULICO di Bozzi Antonio | Pronto Intervento H24",
    description: "Sopralluogo e preventivo in giornata! Il tuo idraulico di fiducia onesto e trasparente a Modena.",
    type: "website",
    locale: "it_IT",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/icons/site.webmanifest",
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
