import { useState } from 'react';
import { Chips } from '../../components/Chips';
import s from '../showcase.module.css';

const options = ['React', 'TypeScript', 'Figma', 'Design System', 'CSS'];

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <div className={s.rowContent}>{children}</div>
    </div>
  );
}

export default function ChipsPage() {
  const [selected, setSelected] = useState([]);
  const [tags, setTags] = useState(['React', 'Figma']);

  const toggle = item => setSelected(prev =>
    prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
  );

  return (
    <div className={s.page}>
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
