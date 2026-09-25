import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const siteUrl = "https://www.jesusmarchhtx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jesus March Houston | Dear Daughter Bible Study",
    template: "%s | Jesus March HTX",
  },
  description:
    "Jesus March is organized by Dear Daughter Bible Study Group. Worship, prayer, and the gospel in Houston, Tulsa, Washington DC, and the nations.",
  icons: {
    icon: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
  openGraph: {
    title: "Jesus March Houston",
    description:
      "A movement of faith and revival. Worship, prayer, and the gospel in the streets.",
    url: siteUrl,
    siteName: "Jesus March HTX",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-banner.jpg",
        alt: "Jesus March in the streets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus March Houston",
    description:
      "Worship, prayer, and the gospel in the streets. Organized by Dear Daughter Bible Study Group.",
    images: ["/images/hero-banner.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen overflow-x-hidden bg-white text-ink-3 antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jesus March",
            alternateName: "Dear Daughter Bible Study Group",
            url: siteUrl,
            logo: `${siteUrl}/images/logo-march.png`,
            email: "ddbs.htx@gmail.com",
            description:
              "A Spirit-led Bible study and street movement preaching Jesus in Houston, Tulsa, Washington DC, and the nations.",
            sameAs: [
              "https://www.instagram.com/ddbs.htx",
              "https://www.instagram.com/ddbs.tulsa/",
              "https://www.instagram.com/ddbs.global/",
              "https://www.facebook.com/JesusMarchHTX/",
              "https://www.youtube.com/@abedamilola",
              "https://www.youtube.com/@deardaughter_bs",
            ],
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
