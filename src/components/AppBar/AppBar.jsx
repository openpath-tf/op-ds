import { alias, elevation, spacing, typography } from '../../tokens';

export default function AppBar({ title, leading, trailing, elevated = false }) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      height: '56px',
      padding: `0 ${spacing[4]}`,
      background: alias.surface.base,
      boxShadow: elevated ? elevation[2] : elevation[1],
      gap: spacing[3],
    }}>
      {leading && <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{leading}</span>}
      <span style={{
        flex: 1,
        fontSize: typography.scale.heading3.size,
        fontWeight: typography.scale.heading3.weight,
        color: alias.text.primary,
        fontFamily: typography.fontFamily.sans,
      }}>
        {title}
      </span>
      {trailing && <span style={{ display: 'flex', alignItems: 'center', gap: spacing[2], flexShrink: 0 }}>{trailing}</span>}
    </header>
  );
}
