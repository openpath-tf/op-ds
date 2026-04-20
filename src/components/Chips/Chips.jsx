import styles from './Chips.module.css';

export default function Chips({ label, selected = false, onClose, onClick, disabled = false }) {
  const cls = [
    styles.chip,
    selected ? styles.selected : '',
    disabled ? styles.disabled : '',
  ].join(' ');

  return (
    <div className={cls} onClick={!disabled ? onClick : undefined}>
      {label}
      {onClose && (
        <button
          className={styles.close}
          onClick={e => { e.stopPropagation(); onClose(); }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
