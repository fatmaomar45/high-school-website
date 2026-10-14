import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
  title: {
    default: "Lamu Girls High School",
    template: "%s | Lamu Girls High School",
  },
  description:
    "Lamu Girls High School is a Cluster 1 National Boarding School in Lamu West, Lamu County, Kenya, offering academic excellence and holistic development for young women.",
  metadataBase: new URL("https://lamu-girls.example.com"),
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
                  <Image
                    src="/images/images.jpeg"
                    alt="Lamu Girls Crest"
                    width={48}
                    height={48}
                    className={styles.footerCrest}
                  />
                  <div>
                    <h3 className={styles.footerName}>Lamu Girls</h3>
                    <p className={styles.footerMotto}>Strive to Excel</p>
                  </div>
                </div>
                
              </div>
              <div className={styles.footerCol}>
                <h4 className={styles.footerHeading}>Quick Links</h4>
                <ul className={styles.footerLinks}>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/admission">Admissions</Link></li>
                  <li><Link href="/events">Events</Link></li>
                  <li><Link href="/contacts">Contact</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className={styles.footerCol}>

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
