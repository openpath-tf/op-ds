import styles from './FAB.module.css';

export default function FAB({ icon, label, size = 'md', onClick }) {
  const isExtended = size === 'extended';
  return (
    <button className={`${styles.fab} ${styles[size]}`} onClick={onClick}>
      <span className={styles.fabIcon}>{icon}</span>
      {isExtended && label && <span>{label}</span>}
    </button>
  );
}
