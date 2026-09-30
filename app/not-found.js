import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <span className={styles.errorCode}>404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={styles.btnPrimary}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
