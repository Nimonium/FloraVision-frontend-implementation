import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FloraVision. | Earth's Exhale",
  description: "We Have Small And Best O2 Plants Collections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-forest-bg text-white font-sans flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
