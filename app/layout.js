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
      <body className="min-h-full flex flex-col"> 
        <div className={styles.container}> 
          
          <nav className={styles.nav}> 
            <div className={styles.logo}>Logo</div> 
            <ul className={styles.ul}> 
              <li><Link href="/#home">Home</Link></li> 
              <li><Link href="/#AboutUs">About Us</Link></li> 
              <li><Link href="/#Admissions">Admissions</Link></li> 
              <li><Link href="/#Events">Events</Link></li> 
              <li><Link href="/#Contacts">Contact Us</Link></li> 
            </ul> 
          </nav> 

          <main className={styles.mainContent}> 
            {children} 
          </main> 

          <footer className={styles.footer}> 
            <p>&copy; {new Date().getFullYear()} Lamu Girls High School. All rights reserved.</p> 
          </footer> 
          
        </div> 
      </body> 
    </html> 
  ); 
}
