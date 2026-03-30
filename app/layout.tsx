import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  variable: "--font-noto-sans-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor practice",
  description: "A minimal Next.js starter for HTML/CSS challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
