import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Helvetica = localFont({
  src: "../public/font/RobotoFlex.ttf",
  variable: "--font-helvetica",
});

const Roboto = localFont({
  src: "../public/font/Roboto.ttf",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "HiGaurav | GCodes | MERN STACK Developer",
  description: "A MERN STACK Web Developer building the Frontend & Backend of Websites and Web Applications that leads to the success of the overall product",
  authors: [{ name: "HiGaurav" }],
  openGraph: {
    title: "HiGaurav | GCodes | MERN STACK Developer",
    siteName: "Gaurav Portfolio Website",
    url: "https://www.higaurav.com/",
    description: "A MERN STACK Web Developer building the Frontend & Backend of Websites and Web Applications that leads to the success of the overall product",
    type: "website",
  },
  metadataBase: new URL("https://www.higaurav.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Helvetica.variable} ${Roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
