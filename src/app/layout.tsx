import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// app/layout.tsx
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'], // Specify the subset(s) you need
  weight: ['400', '500', '700'], // Optional: Specify the weights you want to use
  style: ['normal', 'italic'], // Optional: Include styles if needed
});

//importing montserrat
import { Montserrat } from 'next/font/google';

const montserrat  = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Optional: Specify the weights you want to use
  style: ['normal', 'italic'], // Optional: Include styles if needed
});

//importing inter
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Corrected subset name
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'], // Added comma between styles
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.className} ${montserrat.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
