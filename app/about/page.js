import Image from "next/image";
import styles from "./Aboutus.module.css";

export default function AboutUs() {
  const leaders = [
    {
      name: "Madam Jamilah Mohamed",
      role: "School Principal",
      bio: "Provides academic leadership and guides the school in achieving excellence while nurturing students to become confident, disciplined, and responsible young women.",
    },
    {
      name: "Mr. Salim Bunu",
      role: "Board of Management Chair",
      bio: "Leads the Board of Management in supporting the school's development, governance, and long-term strategic growth.",
    },
  ];

  return (
    <div className={styles.about}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>About Lamu Girls High School</h1>
          <p className={styles.pageSubtitle}>
            A Cluster 1 National Boarding School empowering young women
            through academic excellence and holistic development.
          </p>
        </div>
      </section>

      {/* History */}
      <section className={styles.historySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>A Legacy of Excellence</h2>
          </div>
          <div className={styles.historyGrid}>
            <div className={styles.historyText}>
              <p>
                Lamu Girls High School is a Cluster 1 National Boarding School
                located in Lamu West, Lamu County, Kenya. With an enrollment
                of over 570 students, the school has established itself as an
                academic giant in the region.
              </p>
              <p>
                The school is committed to providing quality education that
                nurtures academic excellence, leadership, integrity, and
                lifelong learning. We prepare students to become responsible
                citizens capable of making meaningful contributions to society.
              </p>
              <p>
                Our commitment extends beyond academic success. We strive to
                build confident, disciplined, innovative, and compassionate
                young women ready to embrace future opportunities and
                challenges.
              </p>
            </div>
            <div className={styles.historyImage}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/labanda2.png"
                  alt="Lamu Girls Campus"
                  width={500}
                  height={400}
                  className={styles.historyImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet Our Leadership</h2>
            <p className={styles.sectionSubtitle}>
              Dedicated leaders committed to academic excellence and student
              success.
            </p>
          </div>
          <div className={styles.leadershipGrid}>
            {leaders.map((leader, index) => (
              <div key={index} className={styles.leaderCard}>
                <h3>{leader.name}</h3>
                <span className={styles.role}>{leader.role}</span>
                <p>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Mission, Vision & Motto</h2>
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
              <p>Strive to Excel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crest */}
      <section className={styles.crestSection}>
        <div className={styles.container}>
          <div className={styles.crestGrid}>
            <div className={styles.crestImage}>
              <Image
                src="/images/images.jpeg"
                alt="Lamu Girls School Crest"
                width={300}
                height={300}
                className={styles.crestImg}
              />
            </div>
            <div className={styles.crestText}>
              <h2 className={styles.sectionTitle}>The School Crest</h2>
              <p>
                Our crest symbolizes the school&apos;s commitment to academic
                excellence and the rich cultural heritage of Lamu. The open book
                represents knowledge, the palm tree represents the coastal
                environment, and the dhow represents the maritime heritage of
                the region.
              </p>
              <p>
                The motto &quot;Strive to Excel&quot; is at the heart of
                everything we do, encouraging every learner to reach her highest
                potential.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
