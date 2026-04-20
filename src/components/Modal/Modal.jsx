import styles from './Modal.module.css';
import { Button } from '../Button';

export default function Modal({ open, title, description, onConfirm, onCancel, confirmLabel = '확인', cancelLabel = '취소' }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.actions}>
          {onCancel && <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>}
          {onConfirm && <Button variant="filled" onClick={onConfirm}>{confirmLabel}</Button>}
        </div>
      </div>
    </div>
  );
}
