import { spacing, alias, typography } from '../../tokens';

export default function SpacingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
      {Object.entries(spacing).map(([k, v]) => (
        <div key={k} style={{ display: 'flex', alignItems: 'center', gap: spacing[6] }}>
          <span style={{ width: 32, fontSize: typography.scale.label.size, color: alias.text.secondary, fontFamily: typography.fontFamily.mono, flexShrink: 0 }}>{k}</span>
          <div style={{ width: v, height: 20, background: alias.brand.primary, borderRadius: 3, minWidth: 2, flexShrink: 0 }} />
          <span style={{ fontSize: typography.scale.caption.size, color: alias.text.secondary, fontFamily: typography.fontFamily.mono }}>{v}</span>
        </div>
      ))}
    </div>
  );
}
