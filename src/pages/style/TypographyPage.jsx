import { typography, spacing, alias } from '../../tokens';

export default function TypographyPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      {Object.entries(typography.scale).map(([name, t]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: spacing[6], borderBottom: `1px solid #E9ECEF`, paddingBottom: spacing[4] }}>
          <span style={{ width: 96, fontSize: typography.scale.caption.size, color: alias.text.secondary, fontFamily: typography.fontFamily.sans, flexShrink: 0 }}>{name}</span>
          <span style={{
            fontSize: t.size,
            fontWeight: t.weight,
            lineHeight: t.lineHeight,
            letterSpacing: t.letterSpacing,
            textTransform: t.textTransform,
            color: alias.text.primary,
            fontFamily: typography.fontFamily.sans,
          }}>
            The quick brown fox
          </span>
          <span style={{ marginLeft: 'auto', fontSize: typography.scale.caption.size, color: alias.text.secondary, fontFamily: typography.fontFamily.mono, flexShrink: 0 }}>
            {t.size} / w{t.weight}
          </span>
        </div>
      ))}
    </div>
  );
}
