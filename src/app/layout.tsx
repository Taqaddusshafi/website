import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hidayahcompanionpro.online'),
  title: "Hidayah Companion Pro - Complete Islamic App",
  description: "Your complete Islamic companion app: Quran, Prayer Times, Qibla Direction, Hijri Calendar, Azkar, Tasbih, Hadith, and more. Download now on Google Play.",
  keywords: "Islamic app, Prayer times, Quran, Qibla, Hijri calendar, Muslim app, Azkar, Tasbih, Hadith, Ramadan, Islamic calendar",
  authors: [{ name: "Taqaddus Shafi" }],
  openGraph: {
    title: "Hidayah Companion Pro - Complete Islamic App",
    description: "Your complete Islamic companion app: Quran, Prayer Times, Qibla Direction, Hijri Calendar, Azkar, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Hidayah Companion Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidayah Companion Pro",
    description: "Complete Islamic companion app",
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
