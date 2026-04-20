import styles from './List.module.css';

export function ListItem({ leading, title, subtitle, trailing, onClick, divider = true }) {
  const cls = [
    styles.item,
    onClick ? styles.clickable : '',
    !divider ? styles.noDivider : '',
  ].join(' ');

  return (
    <div className={cls} onClick={onClick}>
      {leading && <span className={styles.leading}>{leading}</span>}
      <span className={styles.content}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </span>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </div>
  );
}

export function List({ children, style: extStyle }) {
  return (
    <div className={styles.list} style={extStyle}>
      {children}
    </div>
  );
}
