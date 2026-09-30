'use client';

import { useState } from "react";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:fatmaomarmoh@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.contacts}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Get in Touch</h1>
          <p className={styles.pageSubtitle}>
            I would love to hear from you. Reach out for any inquiries about
            this project.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
            <p className={styles.sectionSubtitle}>
              Reach out through any of the channels below
            </p>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>✉️</div>
              <h3>Email</h3>
              <a
                href="mailto:fatmaomarmoh@gmail.com"
                className={styles.contactLink}
              >
                fatmaomarmoh@gmail.com
              </a>
              <p>I respond within 24 hours</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>🐙</div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/fatmaomar45"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                github.com/fatmaomar45
              </a>
              <p>Check out my projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can I help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.btnPrimary}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
