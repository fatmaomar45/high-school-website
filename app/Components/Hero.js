import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.heroContainer}>
      
      <img 
        src="/images/labanda2.png" 
        alt="School Compound Background" 
        className={styles.heroImage} 
      />

      
      <div className={styles.contentOverlay}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Welcome<br></br> to Lamu Girls High School
        </h1>
        <button style={{
          backgroundColor: '#10b981', 
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.375rem',
          fontSize: '1.125rem',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          Learn More
        </button>
      </div>
    </main>
  );
}