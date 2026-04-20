import styles from './Card.module.css';

export default function Card({ children, variant = 'elevated', padding = '24px', style: extStyle }) {
  return (
    <div
      className={`${styles.card} ${styles[variant]}`}
      style={{ padding, ...extStyle }}
    >
      {children}
    </div>
  );
}
