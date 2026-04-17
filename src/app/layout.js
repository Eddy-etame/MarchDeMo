import { Outfit, Inter } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/animations/CustomCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Marché de Mo' | Supermarché du Monde | Toulouse",
  description: "Marché de Mo' vous propose des produits de qualité du monde entier. Boucherie Halal, produits frais, épicerie et bien plus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-theme text-theme antialiased selection:bg-brand-green selection:text-white">
        {/* Global Cinematic Filter */}
        <div className="film-grain" />

        {/* Global Awwwards Custom Cursor */}
        <CustomCursor />

        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
