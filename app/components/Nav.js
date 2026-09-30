'use client';

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admission", label: "Admissions" },
  { href: "/events", label: "Events" },
  { href: "/contacts", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => router.push("/")}>
            <img src="/images/images.jpeg" alt="Lamu Girls Crest" className={styles.logoCrest} />
            <div className={styles.logoText}>
              <span className={styles.logoName}>Lamu Girls</span>
              <span className={styles.logoMotto}>Strive to Excel</span>
            </div>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          </button>

          <ul className={`${styles.ul} ${menuOpen ? styles.ulOpen : ""}`}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? styles.active : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.applyItem}>
              <Link href="/admission" className={styles.applyBtn}>
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
