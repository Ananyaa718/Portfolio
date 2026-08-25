import type { Metadata, Viewport } from "next";
import { Syne, Caveat, Inter, Anton } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananya Rastogi — CS Student & Builder | Software, Data & ML",
  description:
    "Personal portfolio of Ananya Rastogi, a Computer Science student building across Software Development, Data Analytics, and Machine Learning.",
  keywords: [
    "Ananya Rastogi",
    "Computer Science Student",
    "Software Development",
    "Data Analytics",
    "Machine Learning",
    "Python",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Ananya Rastogi" }],
  openGraph: {
    title: "Ananya Rastogi — Student Portfolio",
    description: "CS Student · Building in Software, Data & ML",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${anton.variable} ${caveat.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-slate-100 min-h-screen font-body antialiased selection:bg-[#e63946] selection:text-white">
        {children}
      </body>
    </html>
  );
}
