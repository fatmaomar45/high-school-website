import Image from "next/image";
import styles from "./Events.module.css";

export default function Events() {
  const upcomingEvents = [
    {
      date: "Oct 15",
      title: "Open Day & Campus Tour",
      desc: "Prospective students and parents are invited to tour our campus, meet faculty, and learn about our programs.",
      category: "Admissions",
    },
    {
      date: "Nov 08",
      title: "KCSE Mock Examinations",
      desc: "Form 4 students sit their final mock examinations in preparation for the national KCSE.",
      category: "Academics",
    },
    {
      date: "Dec 12",
      title: "Prize Giving Day",
      desc: "Annual celebration of academic and co-curricular achievements. Parents and guardians are welcome.",
      category: "School",
    },
    {
      date: "Jan 20",
      title: "New Term Orientation",
      desc: "Welcome orientation for new students joining Form 1. Introduction to school life and expectations.",
      category: "Admissions",
    },
  ];

  const activities = [
    { name: "Debate Club", icon: "🎤" },
    { name: "Drama & Music", icon: "🎭" },
    { name: "Netball", icon: "🏐" },
    { name: "Volleyball", icon: "🏐" },
    { name: "Football", icon: "⚽" },
    { name: "Swimming", icon: "🏊" },
    { name: "Scouts", icon: "🏕️" },
    { name: "Environmental Club", icon: "🌱" },
  ];

  return (
    <div className={styles.events}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Life at Lamu Girls</h1>
          <p className={styles.pageSubtitle}>
            Stay updated with the latest happenings, events, and activities at
            Lamu Girls High School.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={styles.upcomingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Upcoming Events</h2>
            <p className={styles.sectionSubtitle}>
              Mark your calendar for these important dates
            </p>
          </div>
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event, i) => (
              <div key={i} className={styles.eventCard}>
                <div className={styles.eventDate}>
                  <span className={styles.eventMonth}>{event.date.split(" ")[0]}</span>
                  <span className={styles.eventDay}>{event.date.split(" ")[1]}</span>
                </div>
                <div className={styles.eventContent}>
                  <span className={styles.eventCategory}>{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Clubs */}
      <section className={styles.activitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sports & Clubs</h2>
            <p className={styles.sectionSubtitle}>
              Developing talents beyond the classroom
            </p>
          </div>
          <div className={styles.activitiesGrid}>
            {activities.map((activity, i) => (
              <div key={i} className={styles.activityCard}>
                <span className={styles.activityIcon}>{activity.icon}</span>
                <span className={styles.activityName}>{activity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Campus Life</h2>
          </div>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image
                src="/images/labanda2.png"
                alt="School campus"
                width={400}
                height={300}
                className={styles.galleryImg}
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/students.png"
                alt="Students"
                width={400}
                height={300}
                className={styles.galleryImg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
