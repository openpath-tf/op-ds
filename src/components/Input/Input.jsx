import styles from './Input.module.css';

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  helperText,
  error,
  disabled = false,
  type = 'text',
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={`${styles.label} ${disabled ? styles.disabled : ''}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.error : ''}`}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
      {!error && helperText && <span className={styles.helper}>{helperText}</span>}
    </div>
  );
}
