import Link from "next/link";
import styles from "../NotFound.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lamu Girls High School website data handling.",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.notFound} style={{ minHeight: "auto", padding: "4rem 2rem" }}>
      <div className={styles.content} style={{ maxWidth: 720, textAlign: "left" }}>
        <h1>Privacy Policy</h1>
        <p>
          We respect the privacy of students, parents, and visitors. Information
          submitted through our forms is used only for admissions, communication,
          and school administration. We do not sell personal data. Uploaded
          documents are handled securely and retained only as needed.
        </p>
        <p>
          For questions or data requests, contact the school through the details on
          our contact page.
        </p>
        <Link href="/" className={styles.btnPrimary}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
