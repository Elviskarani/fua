import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const avenirNext = localFont({
  src: [
    {
      path: "./fonts/AvenirNext-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Demi.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir-next",
});

export const metadata: Metadata = {
  title: "FUA",
  description: "The smartest way to do laundry",
  icons: {
    icon: '/fuaonly.png',
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
        className={`${avenirNext.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Header/>
        <main className="pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
