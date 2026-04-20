import { useState } from 'react';
import { Chips } from '../../components/Chips';
import { alias, spacing, typography } from '../../tokens';

const options = ['React', 'TypeScript', 'Figma', 'Design System', 'CSS'];

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ display: 'flex', gap: spacing[2], flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}

export default function ChipsPage() {
  const [selected, setSelected] = useState([]);
  const [tags, setTags] = useState(['React', 'Figma']);

  const toggle = (item) => setSelected(prev =>
    prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="Default">
        {options.map(o => <Chips key={o} label={o} />)}
      </Row>
      <Row label="Filter (Toggle)">
        {options.map(o => <Chips key={o} label={o} selected={selected.includes(o)} onClick={() => toggle(o)} />)}
      </Row>
      <Row label="Input (Removable)">
        {tags.map(t => <Chips key={t} label={t} selected onClose={() => setTags(prev => prev.filter(p => p !== t))} />)}
      </Row>
      <Row label="Disabled">
        <Chips label="Disabled" disabled />
      </Row>
    </div>
  );
}
