import { useEffect } from 'react';
import styles from './Snackbar.module.css';

export default function Snackbar({ open, message, type = 'default', action, onClose, duration = 3000 }) {
  useEffect(() => {
    if (open && duration && onClose) {
      const t = setTimeout(onClose, duration);
      return () => clearTimeout(t);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className={`${styles.snackbar} ${styles[type]}`}>
      <span className={styles.message}>{message}</span>
      {action && (
        <button className={styles.action} onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
}
