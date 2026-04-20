import { shape, alias, typography, spacing, elevation } from '../../tokens';

export default function ShapePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
      <div>
        <h3 style={{ fontSize: typography.scale.heading3.size, fontWeight: 600, fontFamily: typography.fontFamily.sans, marginBottom: spacing[6] }}>Shape Scale</h3>
        <div style={{ display: 'flex', gap: spacing[6], flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {Object.entries(shape).map(([name, value]) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[3] }}>
              <div style={{ width: 80, height: 80, background: alias.brand.light, border: `2px solid ${alias.brand.primary}`, borderRadius: value }} />
              <span style={{ fontSize: typography.scale.caption.size, fontFamily: typography.fontFamily.sans, color: alias.text.secondary }}>{name}</span>
              <span style={{ fontSize: typography.scale.caption.size, fontFamily: typography.fontFamily.mono, color: alias.text.disabled }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: typography.scale.heading3.size, fontWeight: 600, fontFamily: typography.fontFamily.sans, marginBottom: spacing[6] }}>Elevation</h3>
        <div style={{ display: 'flex', gap: spacing[6], flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {Object.entries(elevation).map(([name, value]) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[3] }}>
              <div style={{ width: 80, height: 80, background: alias.surface.base, borderRadius: 12, boxShadow: value }} />
              <span style={{ fontSize: typography.scale.caption.size, fontFamily: typography.fontFamily.sans, color: alias.text.secondary }}>Level {name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
