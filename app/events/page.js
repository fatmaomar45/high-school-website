'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./Events.module.css";
import {
  upcomingEvents,
  activities,
  eventCategories,
} from "./eventsData";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.category === activeCategory);

  const filteredActivities =
    activeCategory === "All"
      ? activities
      : activities.filter((activity) => activity.category === activeCategory);

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

      {/* Filter Controls */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterBar} role="tablist" aria-label="Filter events and activities">
            {eventCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.filterButtonActive : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
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
            {filteredEvents.length === 0 ? (
              <p className={styles.emptyState}>No events in this category yet.</p>
            ) : (
              filteredEvents.map((event, i) => (
                <div key={i} className={styles.eventCard}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventYear}>{event.year}</span>
                    <span className={styles.eventMonth}>{event.date.split(" ")[0]}</span>
                    <span className={styles.eventDay}>{event.date.split(" ")[1]}</span>
                  </div>
                  <div className={styles.eventContent}>
                    <span className={styles.eventCategory}>{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.desc}</p>
                  </div>
                </div>
              ))
            )}
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
            {filteredActivities.length === 0 ? (
              <p className={styles.emptyState}>No activities in this category yet.</p>
            ) : (
              filteredActivities.map((activity, i) => (
                <div key={i} className={styles.activityCard}>
                  <span className={styles.activityIcon} aria-hidden="true">{activity.icon}</span>
                  <span className={styles.activityName}>{activity.name}</span>
                </div>
              ))
            )}
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
                alt="School campus buildings and grounds"
                width={400}
                height={300}
                className={styles.galleryImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/students.png"
                alt="Students taking part in campus life"
                width={400}
                height={300}
                className={styles.galleryImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
