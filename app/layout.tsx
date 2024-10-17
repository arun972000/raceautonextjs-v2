import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import AddBootstrap from "@/components/BootstrapClient";


const inter = Inter({ subsets: ["latin"] });

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: false,
// };

export const metadata: Metadata = {
  title:
    "Race Auto India - Latest News on Cars, Bikes, and Commercial Vehicles",
  description:
    "Stay updated with the latest news and updates on cars, bikes, and commercial vehicles in India. Explore reviews, launches, and more.",
  keywords: [
    "cars",
    "bikes",
    "commercial vehicles",
    "automotive news",
    "car reviews",
    "bike reviews",
    "vehicle launches",
    "Race Auto India",
  ],
  openGraph: {
    title:
      "Race Auto India - Latest News on Cars, Bikes, and Commercial Vehicles",
    description:
      "Stay updated with the latest news and updates on cars, bikes, and commercial vehicles in India. Explore reviews, launches, and more",
  },
  alternates: {
    canonical: "https://raceautoindia.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}
