import HeroSection from "../components/HeroSection";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <HeroSection title="Contact Us">
        <p>We would love to hear from you. Reach out to Lamu Girls High School.</p>
      </HeroSection>

      <section className={styles.contentSection}>
        <div className={styles.card}>
          <h2>School Address</h2>
          <p>Lamu Girls High School</p>
          <p>P.O. Box 123, Lamu, Kenya</p>
        </div>

        <div className={styles.card}>
          <h2>Phone</h2>
          <p>+254 700 000000</p>
        </div>

        <div className={styles.card}>
          <h2>Email</h2>
          <p>info@lamugirls.ac.ke</p>
        </div>

        <div className={styles.card}>
          <h2>Office Hours</h2>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
        </div>
      </section>
    </div>
  );
}
