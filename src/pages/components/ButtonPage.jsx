import { Button } from '../../components/Button';
import { alias, spacing, typography } from '../../tokens';

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: typography.scale.overline.letterSpacing, textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
    </div>
  );
}

export default function ButtonPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="Variant">
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="tonal">Tonal</Button>
        <Button variant="ghost">Ghost</Button>
      </Row>
      <Row label="Size">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Row>
      <Row label="State">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </Row>
      <Row label="With Icon">
        <Button leftIcon="←">Back</Button>
        <Button rightIcon="→">Next</Button>
        <Button variant="outlined" leftIcon="＋">Add Item</Button>
      </Row>
      <Row label="Full Width">
        <div style={{ width: '100%' }}>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </Row>
    </div>
  );
}
