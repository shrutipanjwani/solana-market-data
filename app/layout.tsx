import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const metropolisRegular = localFont({
  src: "./fonts/Metropolis-Regular.otf",
  variable: "--font-metropolis-regular",
  weight: "100 900",
});
const metropolisBold = localFont({
  src: "./fonts/Metropolis-Bold.otf",
  variable: "--font-metropolis-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DeFi Depths",
  description: "DeFi Depths",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "DeFi Depths",
    description: "DeFi Depths",
    url: "/",
    images: "/preview.png",
    siteName: "DeFi Depths",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${metropolisRegular.variable} ${metropolisBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
