import { Providers } from "@/lib/providers";
import { Rubik, Lato, Playfair_Display } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";
import Notification from "@/app/Notification";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-Display",
});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata = {
  title: "Airy Shop",
  description: "You can Buy Anything you want from any where",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${lato.variable} ${playfairDisplay.variable} font-sans`}
      >
        <Providers>
          <Header />
          {children}
          <Notification />
        </Providers>
      </body>
    </html>
  );
}
