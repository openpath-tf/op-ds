import { AppBar } from '../../components/AppBar';
import s from '../showcase.module.css';

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <div className={s.bordered}>{children}</div>
    </div>
  );
}

export default function AppBarPage() {
  return (
    <div className={s.page}>
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
