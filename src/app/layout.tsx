import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jesusmarchhtx.com"),
  title: {
    default: "Jesus March | Dear Daughter Bible Study",
    template: "%s | Jesus March HTX",
  },
  description:
    "Jesus March is organized by Dear Daughter Bible Study Group — a Spirit-led Bible study teaching the undiluted Word of God to all nations.",
  icons: {
    icon: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
  openGraph: {
    title: "Jesus March Houston",
    description:
      "A movement of faith and revival. Worship, prayer, and the gospel in the streets.",
    url: "https://www.jesusmarchhtx.com",
    siteName: "Jesus March HTX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen overflow-x-hidden bg-white text-ink-3 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
