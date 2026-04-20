import { useState } from 'react';
import { TabBar } from '../../components/Tab';
import s from '../showcase.module.css';

function Row({ label, children }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <div className={s.bordered}>{children}</div>
    </div>
  );
}

export default function TabPage() {
  const [tab2, setTab2] = useState(0);
  const [tab4, setTab4] = useState(0);

  return (
    <div className={s.page}>
      <Row label="2 Tabs">
        <TabBar items={['홈', '설정']} activeIndex={tab2} onChange={setTab2} />
      </Row>
      <Row label="4 Tabs">
        <TabBar items={['홈', '탐색', '활동', '프로필']} activeIndex={tab4} onChange={setTab4} />
      </Row>
    </div>
  );
}
