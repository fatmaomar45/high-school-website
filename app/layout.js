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
  title: "Lamu Girls High School | Personal Project",
  description:
    "A modern school website project for Lamu Girls High School, built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-surface text-text">
        <Nav />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerGrid}>
              <div className={styles.footerCol}>
                <div className={styles.footerBrand}>
                  <img
                    src="/images/images.jpeg"
                    alt="Lamu Girls Crest"
                    className={styles.footerCrest}
                  />
                  <div>
                    <h3 className={styles.footerName}>Lamu Girls</h3>
                    <p className={styles.footerMotto}>Strive to Excel</p>
                  </div>
                </div>
                <p className={styles.footerDesc}>
                  A personal project showcasing a school website built
                  with Next.js, React, and Tailwind CSS.
                </p>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerHeading}>Quick Links</h4>
                <ul className={styles.footerLinks}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/admission">Admissions</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/contacts">Contact</a></li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerHeading}>Contact</h4>
                <ul className={styles.footerContact}>
                  
                  
                </ul>
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerHeading}>Project</h4>
                <ul className={styles.footerHours}>
                  <li>Next.js 16</li>
                  <li>React 19</li>
                  <li>Tailwind CSS v4</li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p suppressHydrationWarning>
                &copy; {new Date().getFullYear()} Fatma Omar. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
