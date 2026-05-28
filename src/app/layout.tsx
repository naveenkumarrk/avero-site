import type { Metadata } from "next";
import { Poppins, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Avero — Design & Build Studio",
  description: "Senior studio. Live URL in seven days, not seven weeks.",
  icons: [{ rel: "icon", url: "/logo.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrains.variable} ${instrument.variable} antialiased`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
