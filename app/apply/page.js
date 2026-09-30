'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./Apply.module.css";

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationality: "",
    county: "",
    primarySchool: "",
    kcpeMarks: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    form: "",
    subjects: [],
    declaration: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, value]
        : prev.subjects.filter((s) => s !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className={styles.apply}>
        <section className={styles.successSection}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>✓</div>
            <h1>Application Submitted!</h1>
            <p>
              Thank you for applying to Lamu Girls High School. We have received
              your application and will review it shortly.
            </p>
            <p>
              You will receive a confirmation email with further instructions.
              For inquiries, contact us at 0721693606 or lamugirls71@gmail.com.
            </p>
            <a href="/" className={styles.btnPrimary}>
              Return to Home
            </a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.apply}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/labanda2.png"
            alt="Lamu Girls Campus"
            fill
            className={styles.heroImage}
            priority
            quality={85}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Apply Now</span>
          <h1 className={styles.heroTitle}>Online Application</h1>
          <p className={styles.heroSubtitle}>
            Begin your journey to excellence. Fill out the form below to apply
            for admission to Lamu Girls High School.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formHeader}>
            <h2>Application Form</h2>
            <p>
              Please fill in all required fields accurately. Fields marked with
              * are mandatory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.applicationForm}>
            {/* Student Information */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Student Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="dob">Date of Birth *</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="nationality">Nationality *</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="Enter nationality"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="county">County *</label>
                  <input
                    type="text"
                    id="county"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    placeholder="Enter county"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Academic Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="primarySchool">Primary School *</label>
                  <input
                    type="text"
                    id="primarySchool"
                    name="primarySchool"
                    value={formData.primarySchool}
                    onChange={handleChange}
                    placeholder="Enter primary school name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="kcpeMarks">KCPE Marks *</label>
                  <input
                    type="number"
                    id="kcpeMarks"
                    name="kcpeMarks"
                    value={formData.kcpeMarks}
                    onChange={handleChange}
                    placeholder="Enter KCPE marks"
                    min="0"
                    max="500"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="form">Form Applying For *</label>
                  <select
                    id="form"
                    name="form"
                    value={formData.form}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select form</option>
                    <option value="form1">Form 1</option>
                    <option value="form2">Form 2</option>
                    <option value="form3">Form 3</option>
                    <option value="form4">Form 4</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Subjects of Interest</label>
                <div className={styles.checkboxGrid}>
                  {[
                    "Sciences",
                    "Humanities",
                    "Technical",
                    "Languages",
                    "Business",
                    "Computer Studies",
                  ].map((subject) => (
                    <label key={subject} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        value={subject}
                        checked={formData.subjects.includes(subject)}
                        onChange={handleSubjectChange}
                      />
                      {subject}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>
                Parent/Guardian Information
              </h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="parentName">Full Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter parent/guardian name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="parentPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="0700000000"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="parentEmail">Email Address *</label>
                  <input
                    type="email"
                    id="parentEmail"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    placeholder="parent@email.com"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address">Postal Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="P.O. Box, Town"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Declaration */}
            <div className={styles.formSection}>
              <div className={styles.declaration}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I hereby declare that the information provided above is true
                    and accurate to the best of my knowledge. I understand that
                    any false information may lead to disqualification. *
                  </span>
                </label>
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.btnPrimary}>
                Submit Application
              </button>
              <button type="reset" className={styles.btnSecondary}>
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
