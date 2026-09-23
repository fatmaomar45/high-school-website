import HeroSection from "../components/HeroSection";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <div className={styles.container}>
      <HeroSection title="Events">
        <p>Stay updated with the latest happenings at Lamu Girls High School.</p>
      </HeroSection>

      <section className={styles.contentSection}>
        <div className={styles.card}>
          <h2>Upcoming Events</h2>
          <p>Details about upcoming school events will be posted here.</p>
        </div>

        <div className={styles.card}>
          <h2>Recent Events</h2>
          <p>Recaps and highlights from recent school activities.</p>
        </div>

        <div className={styles.card}>
          <h2>School Calendar</h2>
          <p>View the academic calendar for term dates, holidays, and important school days.</p>
        </div>
      </section>
    </div>
  );
}
