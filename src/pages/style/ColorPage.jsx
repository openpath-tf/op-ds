import { primitive } from '../../tokens/primitives/colors';
import { alias } from '../../tokens';
import { typography, spacing } from '../../tokens';

function Swatch({ name, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
      <div style={{ width: 64, height: 64, borderRadius: 8, background: value, border: '1px solid rgba(0,0,0,0.06)' }} />
      <span style={{ fontSize: typography.scale.caption.size, color: '#495057', fontFamily: typography.fontFamily.sans }}>{name}</span>
      <span style={{ fontSize: typography.scale.caption.size, color: '#ADB5BD', fontFamily: typography.fontFamily.sans }}>{value}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      <h3 style={{ fontSize: typography.scale.heading3.size, fontWeight: 600, color: '#212529', fontFamily: typography.fontFamily.sans, margin: 0 }}>{title}</h3>
      <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

export default function ColorPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[10] }}>
      <Section title="Brand — Mint (Primary)">
        {Object.entries(primitive.mint).map(([k, v]) => <Swatch key={k} name={`mint.${k}`} value={v} />)}
      </Section>
      <Section title="Brand — Coral (Secondary)">
        {Object.entries(primitive.coral).map(([k, v]) => <Swatch key={k} name={`coral.${k}`} value={v} />)}
      </Section>
      <Section title="Neutral">
        {Object.entries(primitive.neutral).map(([k, v]) => <Swatch key={k} name={`neutral.${k}`} value={v} />)}
      </Section>
      <Section title="Feedback">
        {Object.entries(primitive.feedback).map(([k, v]) => <Swatch key={k} name={k} value={v} />)}
      </Section>
      <Section title="Alias — Brand">
        {Object.entries(alias.brand).map(([k, v]) => <Swatch key={k} name={`brand.${k}`} value={v} />)}
      </Section>
    </div>
  );
}
