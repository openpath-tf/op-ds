import { List, ListItem } from '../../components/List';
import s from '../showcase.module.css';

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      {children}
    </div>
  );
}

export default function ListPage() {
  return (
    <div className={s.page}>
      <Row label="Basic">
        <List style={{ maxWidth: 360 }}>
          <ListItem title="항목 1" />
          <ListItem title="항목 2" />
          <ListItem title="항목 3" divider={false} />
        </List>
      </Row>
      <Row label="With Leading & Trailing">
        <List style={{ maxWidth: 360 }}>
          <ListItem leading="◈" title="항목 1" trailing="›" onClick={() => {}} />
          <ListItem leading="◉" title="항목 2" trailing="›" onClick={() => {}} />
          <ListItem leading="⬡" title="항목 3" trailing="›" onClick={() => {}} divider={false} />
        </List>
      </Row>
      <Row label="With Subtitle">
        <List style={{ maxWidth: 360 }}>
          <ListItem leading="◈" title="항목 1" subtitle="보조 텍스트" trailing="›" onClick={() => {}} />
          <ListItem leading="◉" title="항목 2" subtitle="보조 텍스트" trailing="›" onClick={() => {}} />
          <ListItem leading="⬡" title="항목 3" subtitle="보조 텍스트" trailing="›" onClick={() => {}} divider={false} />
        </List>
      </Row>
    </div>
  );
}
