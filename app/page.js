import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/labanda2.png"
            alt="Lamu Girls High School Campus"
            fill
            className={styles.heroImage}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.gradientText}>Lamu Girls</span>
            <br />High School
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering young women through academic excellence, leadership, and
            holistic development.
            
          </p>
          <div className={styles.heroActions}>
            <Link href="/admission" className={styles.btnPrimary}>
              Apply Now
            </Link>
            <Link href="/about" className={styles.btnOutline}>
              Discover More
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.scrollArrow}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

    

      {/* About Preview */}
      <section className={styles.aboutPreview}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className={styles.sectionBadge}>About Us</span>
              <h2 className={styles.sectionTitle}>
                A Legacy of Excellence in Girls&apos; Education
              </h2>
              <p className={styles.sectionDesc}>
                Lamu Girls High School is a beacon of academic excellence and
                holistic development for young women in Lamu. We are committed
                to providing a nurturing environment where every learner is
                empowered to discover her potential and pursue her dreams.
              </p>
              <p className={styles.sectionDesc}>
                Through quality teaching, strong moral values, leadership
                development, and co-curricular activities, we prepare students
                to become responsible citizens capable of making meaningful
                contributions to society.
              </p>
              <Link href="/about" className={styles.btnText}>
                Learn More About Us →
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/students.png"
                  alt="Students at Lamu Girls"
                  width={500}
                  height={400}
                  className={styles.aboutImg}
                />
              </div>
              <div className={styles.imageAccent} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Foundation</span>
            <h2 className={styles.sectionTitle}>Core Values</h2>
            <p className={styles.sectionSubtitle}>
              The principles that guide every learner at Lamu Girls
            </p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>📖</div>
              <h3>Mission</h3>
              <p>
                To provide quality education that nurtures academic excellence,
                leadership, integrity, and lifelong learning.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌴</div>
              <h3>Vision</h3>
              <p>
                To be a centre of excellence in educating and empowering young
                women for a dynamic world.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⛵</div>
              <h3>Motto</h3>
              <p>
                Strive to Excel. Every learner is encouraged to reach her
                highest potential in all endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Preview */}
      <section className={styles.academicsPreview}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Academics</span>
            <h2 className={styles.sectionTitle}>Departments & Subjects</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive curriculum designed to nurture every learner
            </p>
          </div>
          <div className={styles.academicsGrid}>
            <div className={styles.academicCard}>
              <h3>Sciences</h3>
              <p>Physics, Chemistry, Biology, Mathematics</p>
            </div>
            <div className={styles.academicCard}>
              <h3>Humanities</h3>
              <p>History, Geography, CRE, Kiswahili</p>
            </div>
            <div className={styles.academicCard}>
              <h3>Technical</h3>
              <p>Computer Studies, Business Studies, Agriculture</p>
            </div>
            <div className={styles.academicCard}>
              <h3>Languages</h3>
              <p>English, Kiswahili, French</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className={styles.studentLife}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Student Life</span>
            <h2 className={styles.sectionTitle}>Life at Lamu Girls</h2>
            <p className={styles.sectionSubtitle}>
              Beyond the classroom sports, clubs, and community
            </p>
          </div>
          <div className={styles.lifeGrid}>
            <div className={styles.lifeCard}>
              <div className={styles.lifeImage}>
                <Image
                  src="/images/students.png"
                  alt="Students gathering"
                  width={400}
                  height={300}
                />
              </div>
              <h3>Community</h3>
              <p>A vibrant, supportive sisterhood of learners from across Kenya</p>
            </div>
            <div className={styles.lifeCard}>
              <div className={styles.lifeImage}>
                <Image
                  src="/images/labanda2.png"
                  alt="School campus"
                  width={400}
                  height={300}
                />
              </div>
              <h3>Campus</h3>
              <p>Serene learning environment with modern facilities</p>
            </div>
            <div className={styles.lifeCard}>
              <div className={styles.lifeImage}>
                <Image
                  src="/images/images.jpeg"
                  alt="School crest"
                  width={400}
                  height={300}
                />
              </div>
              <h3>Identity</h3>
              <p>Proud tradition of excellence symbolized by our crest</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Join Lamu Girls?</h2>
            <p>
              Begin your journey to excellence. Applications are now open for
              the upcoming academic year.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/admission" className={styles.btnWhite}>
                Apply Now
              </Link>
              <Link href="/contacts" className={styles.btnWhiteOutline}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
