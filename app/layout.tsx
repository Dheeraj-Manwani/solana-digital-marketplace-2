import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Appbar } from "./components/Appbar";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolKart",
  description: "Solana Digital Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          rel="icon"
          href="/"
        />
      </Head> */}
      <body className={inter.className}>
        <Providers>
          <Toaster richColors position="bottom-center" />
          <Appbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
