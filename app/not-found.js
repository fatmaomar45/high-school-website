import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.message}>
        Sorry, the page you are looking for doesn&apos;t exist.
      </p>
      <Link href="/" className={styles.link}>
        Return Home
      </Link>
    </div>
  );
}
