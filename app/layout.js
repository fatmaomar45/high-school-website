import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
        <nav className={styles.nav}>
          <div className={styles.logo}><h1>LAMU GIRLS</h1></div>
          <ul className={styles.ul}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/admission">Admissions</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contacts">Contact Us</Link></li>
          </ul>
        </nav>

      
        <main className="flex-grow">
          {children}
        </main>

        <footer className={styles.footer}>
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Lamu Girls High School. All rights reserved.
          </p>
        </footer>


      </body>
    </html>
  );
}
