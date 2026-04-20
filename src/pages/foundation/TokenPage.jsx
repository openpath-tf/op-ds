import { alias, typography, spacing } from '../../tokens';

const tiers = [
  {
    label: 'Tier 1 — Global',
    desc: '원시 값. 모든 색상/크기의 원천. 직접 사용하지 않음.',
    color: '#F3FCFC',
    border: alias.brand.primary,
    examples: ['mint.400 = #28D7D2', 'neutral.900 = #212529'],
  },
  {
    label: 'Tier 2 — Alias',
    desc: '의미 기반 참조. "무슨 색"이 아닌 "어디에 쓰이는 색".',
    color: '#EFF6FF',
    border: '#3B82F6',
    examples: ['brand.primary → mint.400', 'text.secondary → neutral.600'],
  },
  {
    label: 'Tier 3 — Component',
    desc: '컴포넌트 전용 토큰. alias를 다시 참조.',
    color: '#F0FDF4',
    border: '#22C55E',
    examples: ['button.primaryBg → brand.primary', 'input.focusBorder → brand.primary'],
  },
];

export default function TokenPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <p style={{ fontSize: typography.scale.body1.size, color: alias.text.secondary, fontFamily: typography.fontFamily.sans, margin: 0 }}>
        OpenPath DS는 3티어 토큰 구조를 사용합니다. Global → Alias → Component 순서로 참조하며, 컴포넌트에서는 Tier 3만 사용합니다.
      </p>
      {tiers.map((t) => (
        <div key={t.label} style={{
          background: t.color,
          border: `1.5px solid ${t.border}`,
          borderRadius: 12,
          padding: spacing[6],
        }}>
          <div style={{ fontWeight: 600, fontSize: typography.scale.heading3.size, fontFamily: typography.fontFamily.sans, marginBottom: spacing[2] }}>{t.label}</div>
          <p style={{ fontSize: typography.scale.body2.size, color: alias.text.secondary, fontFamily: typography.fontFamily.sans, margin: `0 0 ${spacing[3]}` }}>{t.desc}</p>
          <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
            {t.examples.map((ex) => (
              <code key={ex} style={{
                background: 'rgba(0,0,0,0.05)',
                borderRadius: 6,
                padding: `${spacing[1]} ${spacing[3]}`,
                fontSize: typography.scale.caption.size,
                fontFamily: typography.fontFamily.mono,
              }}>{ex}</code>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
