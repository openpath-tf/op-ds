import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { alias, spacing, typography } from '../../tokens';

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

function SampleCard({ variant }) {
  return (
    <Card variant={variant} style={{ width: 240 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
        <div style={{ height: 100, background: alias.brand.light, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: alias.brand.primary, fontSize: '2rem' }}>◈</div>
        <h4 style={{ margin: 0, fontSize: typography.scale.heading3.size, fontWeight: 600, fontFamily: typography.fontFamily.sans }}>{variant}</h4>
        <p style={{ margin: 0, fontSize: typography.scale.body2.size, color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>카드 설명 텍스트가 들어갑니다.</p>
        <Button size="sm" variant="outlined">자세히</Button>
      </div>
    </Card>
  );
}

export default function CardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="Variant">
        <SampleCard variant="elevated" />
        <SampleCard variant="outlined" />
        <SampleCard variant="filled" />
      </Row>
    </div>
  );
}
