import { Providers } from "@/lib/providers";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";
import Notification from "@/app/Notification";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-Display",
});

export const metadata = {
  title: "Airy Shop",
  description: "You can Buy Anything you want from any where",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} font-sans`}>
        <Providers>
          <Header />
          {children}
          <Notification />
        </Providers>
      </body>
    </html>
  );
}
