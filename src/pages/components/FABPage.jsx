import { FAB } from '../../components/FAB';
import { alias, spacing, typography } from '../../tokens';

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ display: 'flex', gap: spacing[4], alignItems: 'flex-end' }}>{children}</div>
    </div>
  );
}

export default function FABPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="Size">
        <FAB icon="＋" size="sm" />
        <FAB icon="＋" size="md" />
        <FAB icon="＋" size="lg" />
      </Row>
      <Row label="Extended">
        <FAB icon="✏" label="작성하기" size="extended" />
        <FAB icon="＋" label="추가하기" size="extended" />
      </Row>
    </div>
  );
}
