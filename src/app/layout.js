import { Bebas_Neue, Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/components/shared/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "ArenaX — Sports Facility Booking",
  description: "Book football turfs, badminton courts, swimming lanes and more across Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${sora.variable} h-full antialiased`}
    >
      <body>
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#E2E8F0",
                border: "1px solid #1C2438",
                borderRadius: "8px",
                fontSize: "13px",
              },
              success: {
                iconTheme: {
                  primary: "#00E5A0",
                  secondary: "#111827",
                },
              },
              error: {
                iconTheme: {
                  primary: "#FF4B2B",
                  secondary: "#111827",
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
