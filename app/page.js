'use client'; 

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() { 
  return ( 
    <main className={styles.heroContainer}> 
      <Image 
        src="/images/labanda2.png" 
        alt="School Compound Background" 
        fill
        className={styles.heroImage} 
        priority
      /> 
      <div className={styles.contentOverlay}> 
        <h1 className={styles.heroTitle}> 
          Welcome<br /> Lamu Girls High School 
        </h1> 
        <button className={styles.learnMoreButton}> 
          Learn More 
        </button> 
      </div> 
    </main> 
  ); 
}


