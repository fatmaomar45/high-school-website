import styles from "./HeroSection.module.css";

export default function HeroSection({
  title,
  subtitle,
  badge,
  height = "60vh",
  children,
  contentClass = "",
}) {
  return (
    <section className={styles.heroSection} style={{ minHeight: height }}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        {badge && <span className={styles.heroBadge}>{badge}</span>}
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {children && (
          <div className={contentClass ? `${styles.heroChildren} ${styles[contentClass]}` : styles.heroChildren}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
