import { AppBar } from '../../components/AppBar';
import { alias, spacing, typography } from '../../tokens';

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ border: `1px solid ${alias.border.default}`, borderRadius: 8, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

export default function AppBarPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="Default">
        <AppBar title="OpenPath" leading="←" trailing={<>⋮</>} />
      </Row>
      <Row label="Elevated">
        <AppBar title="Elevated" leading="←" elevated />
      </Row>
      <Row label="Title Only">
        <AppBar title="Title Only" />
      </Row>
    </div>
  );
}
