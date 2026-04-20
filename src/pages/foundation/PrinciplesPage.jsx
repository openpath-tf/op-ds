import { alias, typography, spacing } from '../../tokens';

const principles = [
  { icon: '◈', title: 'Clarity', desc: '사용자가 UI를 이해하는 데 드는 인지 비용을 줄입니다. 명확한 계층, 일관된 패턴, 예측 가능한 인터랙션을 우선합니다.' },
  { icon: '⬡', title: 'Scalability', desc: '토큰 기반 아키텍처로 브랜드 변경이나 테마 추가 시 컴포넌트를 수정하지 않아도 됩니다.' },
  { icon: '◉', title: 'Autonomy', desc: '각 컴포넌트는 외부 의존 없이 독립적으로 동작합니다. 어떤 프로젝트에도 조각 단위로 도입할 수 있습니다.' },
];

export default function PrinciplesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      {principles.map((p) => (
        <div key={p.title} style={{
          display: 'flex',
          gap: spacing[5],
          padding: spacing[6],
          background: alias.surface.subtle,
          borderRadius: 12,
          border: `1px solid ${alias.border.default}`,
        }}>
          <span style={{ fontSize: '2rem', flexShrink: 0, color: alias.brand.primary }}>{p.icon}</span>
          <div>
            <h3 style={{ fontSize: typography.scale.heading3.size, fontWeight: 600, fontFamily: typography.fontFamily.sans, marginBottom: spacing[2] }}>{p.title}</h3>
            <p style={{ fontSize: typography.scale.body2.size, lineHeight: 1.7, color: alias.text.secondary, fontFamily: typography.fontFamily.sans, margin: 0 }}>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
