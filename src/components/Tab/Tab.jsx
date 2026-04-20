import styles from './Tab.module.css';

export function TabBar({ items, activeIndex, onChange }) {
  return (
    <div className={styles.tabbar}>
      {items.map((item, i) => (
        <button
          key={i}
          className={`${styles.tab} ${i === activeIndex ? styles.active : ''}`}
          onClick={() => onChange(i)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
