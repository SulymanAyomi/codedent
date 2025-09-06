import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "CCTDD Enterprise Limited | Making international payments simple and secure",
  description:
    "CCTDD Enterprise Limited helps businesses accept secure international payments at the best rates. Fast, reliable, and global.",
  keywords: [
    "cross-border payments Nigeria",
    "international payments",
    "best exchange rate",
    "send money abroad",
    "receive GBP EUR",
  ],
  openGraph: {
    title: "CCTDD Enterprise Limited",
    description:
      "CCTDD Enterprise Limited helps businesses accept secure international payments at the best rates. Fast, reliable, and global.",
    url: "https://yourdomain.com",
    siteName: "CCTDD Enterprise Limited",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oxford Payments - Cross-Border Made Easy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTDD Enterprise Limited",
    description: "Cross-border payments made easy for Nigerian businesses.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased  bg-[#FFF8F2]`}>
        {children}
      </body>
    </html>
  );
}
