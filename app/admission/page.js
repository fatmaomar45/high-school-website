import styles from "./Admission.module.css";

export default function Admission() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Admissions</h1>
        <p className={styles.heroText}>
          Join Lamu Girls High School and become part of a tradition of excellence.
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.card}>
          <h2>Admission Requirements</h2>
          <p>
            Admission is open to eligible students who meet the academic and
            behavioral standards set by the school and the Ministry of Education.
          </p>
          <ul>
            <li>Completed primary education with a KCPE certificate</li>
            <li>Minimum qualifying marks as per Ministry guidelines</li>
            <li>Good conduct record</li>
            <li>Birth certificate and other required documentation</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>How to Apply</h2>
          <p>
            Applications are accepted during the stated admission periods. Visit
            the school office or contact us for more information.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Contact Admissions Office</h2>
          <p>
            For inquiries, please reach us through our Contact Us page or visit
            the school directly during working hours.
          </p>
        </div>
      </section>
    </div>
  );
}
