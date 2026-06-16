import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Makani Travel & Tourism – Top 100 Travel Company Worldwide",
  description:
    "Makani Travel & Tourism offers premium travel, unique experiences, and exclusive deals for UAE travelers, ranked among the Top 100 travel companies worldwide.",
  openGraph: {
    title: "Makani Travel & Tourism – Top 100 Travel Company Worldwide",
    description:
      "Makani Travel & Tourism offers premium travel, unique experiences, and exclusive deals for UAE travelers.",
    images: ["/images/makani-logo.png"],
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
      className={`${cairoFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeRegistry>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}