'use client';

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admission", label: "Admissions" },
  { href: "/events", label: "Events" },
  { href: "/contacts", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <h1>LAMU GIRLS</h1>
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
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
