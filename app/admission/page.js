import Link from "next/link";
import styles from "./Admission.module.css";

export default function Admission() {
  const steps = [
    {
      number: "01",
      title: "Check Requirements",
      desc: "Ensure you meet the academic and behavioral standards set by the school and the Ministry of Education.",
    },
    {
      number: "02",
      title: "Submit Application",
      desc: "Complete the application form and submit it with all required documents during the admission period.",
    },
    {
      number: "03",
      title: "Interview & Assessment",
      desc: "Shortlisted candidates will be invited for an interview and assessment.",
    },
    {
      number: "04",
      title: "Admission & Enrollment",
      desc: "Successful candidates will receive admission letters and complete the enrollment process.",
    },
  ];

  const requirements = [
    "Completed primary education with a KCPE certificate",
    "Minimum qualifying marks as per Ministry guidelines",
    "Good conduct record from previous school",
    "Birth certificate and other required documentation",
    "Completed application form",
    "Two passport-size photographs",
  ];

  return (
    <div className={styles.admission}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Begin Your Journey</h1>
          <p className={styles.pageSubtitle}>
            Join Lamu Girls High School and become part of a tradition of
            excellence. Applications are now open.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className={styles.requirementsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Admission Requirements</h2>
            <p className={styles.sectionSubtitle}>
              Ensure you have all the necessary documents and qualifications
            </p>
          </div>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirementsCard}>
              <h3>Academic Requirements</h3>
              <ul className={styles.requirementsList}>
                {requirements.map((req, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.requirementsCard}>
              <h3>How to Apply</h3>
              <p>
                Applications are accepted during the stated admission periods.
                You can apply online through our application portal or visit
                the school office.
              </p>
              <p>
                For inquiries, please reach us through our Contact Us page or
                visit the school directly during working hours.
              </p>
              <div className={styles.applyActions}>
                <Link href="/apply" className={styles.btnPrimary}>
                  Apply Online
                </Link>
                <Link href="/contacts" className={styles.btnOutline}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Application Process</h2>
            <p className={styles.sectionSubtitle}>
              Four simple steps to join Lamu Girls High School
            </p>
          </div>
          <div className={styles.processGrid}>
            {steps.map((step, i) => (
              <div key={i} className={styles.processCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className={styles.datesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Important Dates</h2>
          </div>
          <div className={styles.datesGrid}>
            <div className={styles.dateCard}>
              <span className={styles.dateMonth}>January</span>
              <span className={styles.dateDay}>15</span>
              <span className={styles.dateLabel}>Application Period Opens</span>
            </div>
            <div className={styles.dateCard}>
              <span className={styles.dateMonth}>March</span>
              <span className={styles.dateDay}>31</span>
              <span className={styles.dateLabel}>Application Deadline</span>
            </div>
            <div className={styles.dateCard}>
              <span className={styles.dateMonth}>April</span>
              <span className={styles.dateDay}>15</span>
              <span className={styles.dateLabel}>Interview Period</span>
            </div>
            <div className={styles.dateCard}>
              <span className={styles.dateMonth}>May</span>
              <span className={styles.dateDay}>01</span>
              <span className={styles.dateLabel}>Admission Letters</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Apply?</h2>
            <p>
              Start your application today and take the first step towards
              excellence.
            </p>
            <Link href="/apply" className={styles.btnWhite}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
