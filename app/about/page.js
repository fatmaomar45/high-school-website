import styles from "./Aboutus.module.css";
import Image from "next/image";


export default function AboutUs() {
  const leaders = [
    {
      name: "Madam Jamilah Mohamed",
      role: "School Principal",
      bio: "Provides academic leadership and guides the school in achieving excellence while nurturing students to become confident, disciplined, and responsible young women.",
      image: "/images/team/principal.jpg",
    },
    {
      name: "Mr. Salim Bunu",
      role: "Board of Management Chair",
      bio: "Leads the Board of Management in supporting the school's development, governance, and long-term strategic growth.",
      image: "/images/team/bom-chair.jpg",
    },
  ];

  return (
    <div className={styles.aboutContainer}>

    
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          About Lamu Girls High School
        </h1>

        <p className={styles.aboutText}>
          Lamu Girls High School is a beacon of academic excellence and
          holistic development for young women in Lamu. We are committed to
          providing a nurturing environment where every learner is empowered
          to discover her potential and pursue her dreams.
        </p>

        <p className={styles.aboutText}>
          Through quality teaching, strong moral values, leadership
          development, and co-curricular activities, we prepare students to
          become responsible citizens capable of making meaningful
          contributions to society.
        </p>

        <p className={styles.aboutText}>
          Our commitment extends beyond academic success. We strive to build
          confident, disciplined, innovative, and compassionate young women
          ready to embrace future opportunities and challenges.
        </p>
      </section>

     
      <section className={styles.leadershipSection}>
        <h2>Meet Our Leadership</h2>
        <p className={styles.sectionSubtitle}>
          Dedicated leaders committed to academic excellence and student
          success.
        </p>

        <div className={styles.leadershipGrid}>
          {leaders.map((leader, index) => (
            <div key={index} className={styles.leaderCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={180}
                  height={180}
                  className={styles.leaderImage}
                />
              </div>
              <h3>{leader.name}</h3>
              <span className={styles.role}>
                {leader.role}
              </span>
              <p>{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className={styles.valuesSection}>
        <div className={styles.valueCard}>
          <h3>Mission</h3>
          <p>
            To provide quality education that nurtures academic excellence,
            leadership, integrity, and lifelong learning.
          </p>
        </div>


        <div className={styles.valueCard}>
          <h3>Vision</h3>
          <p>
            To be a centre of excellence in educating and empowering young
            women for a dynamic world.
          </p>
        </div>


        <div className={styles.valueCard}>
          <h3>Motto</h3>
          <p>Strive to Excel.</p>
        </div>
      </section>

    </div>
  );
}
