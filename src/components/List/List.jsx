import { alias, spacing, shape, typography } from '../../tokens';

export function ListItem({ leading, title, subtitle, trailing, onClick, divider = true }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing[4],
        padding: `${spacing[3]} ${spacing[4]}`,
        cursor: onClick ? 'pointer' : 'default',
        borderBottom: divider ? `1px solid ${alias.border.default}` : 'none',
        transition: 'background 0.1s',
      }}
    >
      {leading && (
        <span style={{ display: 'flex', flexShrink: 0, color: alias.text.secondary }}>{leading}</span>
      )}
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
        <span style={{ fontSize: typography.scale.body1.size, color: alias.text.primary, fontFamily: typography.fontFamily.sans }}>{title}</span>
        {subtitle && <span style={{ fontSize: typography.scale.caption.size, color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{subtitle}</span>}
      </span>
      {trailing && (
        <span style={{ display: 'flex', flexShrink: 0, color: alias.text.secondary }}>{trailing}</span>
      )}
    </div>
  );
}

export function List({ children, style: extStyle }) {
  return (
    <div style={{
      background: alias.surface.base,
      borderRadius: shape.md,
      overflow: 'hidden',
      border: `1px solid ${alias.border.default}`,
      ...extStyle,
    }}>
      {children}
    </div>
  );
}
