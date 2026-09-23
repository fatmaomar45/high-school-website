import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lamu Girls High School",
  description: "A School Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-surface text-text">
        <Nav />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Lamu Girls High School. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
