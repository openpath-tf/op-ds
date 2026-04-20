import { alias, typography } from '../../tokens';

export function TabBar({ items, activeIndex, onChange }) {
  return (
    <div style={{
      display: 'flex',
      borderBottom: `1px solid ${alias.border.default}`,
    }}>
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            style={{
              flex: 1,
              height: '48px',
              background: 'transparent',
              border: 'none',
              borderBottom: `2px solid ${isActive ? alias.brand.primary : 'transparent'}`,
              color: isActive ? alias.brand.primary : alias.text.secondary,
              fontSize: typography.scale.label.size,
              fontWeight: isActive ? 600 : 400,
              fontFamily: typography.fontFamily.sans,
              cursor: 'pointer',
              transition: 'all 0.15s',
              marginBottom: '-1px',
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
