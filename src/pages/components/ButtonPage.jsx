import { Button } from '../../components/Button';
import s from '../showcase.module.css';

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <div className={s.rowContent}>{children}</div>
    </div>
  );
}

export default function ButtonPage() {
  return (
    <div className={s.page}>
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
