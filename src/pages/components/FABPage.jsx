import { FAB } from '../../components/FAB';
import s from '../showcase.module.css';

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <div className={s.rowContent} style={{ alignItems: 'flex-end' }}>{children}</div>
    </div>
  );
}

export default function FABPage() {
  return (
    <div className={s.page}>
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
