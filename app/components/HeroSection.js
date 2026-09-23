import styles from "./HeroSection.module.css";

export default function HeroSection({ title, children, height = "55vh", titleSize = "clamp(2.2rem, 5vw, 3.5rem)", contentClass = "" }) {
  return (
    <section className={styles.heroSection} style={{ minHeight: height }}>
      <h1 className={styles.heroTitle} style={{ fontSize: titleSize }}>
        {title}
      </h1>
      <div className={contentClass ? `${styles.heroContent} ${styles[contentClass]}` : styles.heroContent}>{children}</div>
    </section>
  );
}
