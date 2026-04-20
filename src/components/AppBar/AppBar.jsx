import styles from './AppBar.module.css';

export default function AppBar({ title, leading, trailing, elevated = false }) {
  return (
    <header className={`${styles.appbar} ${elevated ? styles.elevated : ''}`}>
      {leading && <span className={styles.leading}>{leading}</span>}
      <span className={styles.title}>{title}</span>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </header>
  );
}
