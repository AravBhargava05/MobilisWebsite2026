import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const description =
  "Traditional prosthetic sockets cost over $10,000 and require multiple appointments with a trained prosthetist. Mobilis is a universal-fit socket that costs $40 in materials and can be fitted in under five minutes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mobilisarm.com"),
  title: "Mobilis — Universal-Fit Prosthetic Socket",
  description,
  openGraph: {
    title: "Mobilis — Universal-Fit Prosthetic Socket",
    description,
    images: [
      {
        url: "/images/prototypes.png",
        width: 1024,
        height: 890,
        alt: "A family of Mobilis prototypes from 2022–2024 development, showing iteration across socket designs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilis — Universal-Fit Prosthetic Socket",
    description,
    images: ["/images/prototypes.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
