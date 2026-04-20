import { useState } from 'react';
import { TabBar } from '../../components/Tab';
import { alias, spacing, typography } from '../../tokens';

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{label}</span>
      <div style={{ border: `1px solid ${alias.border.default}`, borderRadius: 8, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

export default function TabPage() {
  const [tab2, setTab2] = useState(0);
  const [tab4, setTab4] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <Row label="2 Tabs">
        <TabBar items={['홈', '설정']} activeIndex={tab2} onChange={setTab2} />
      </Row>
      <Row label="4 Tabs">
        <TabBar items={['홈', '탐색', '활동', '프로필']} activeIndex={tab4} onChange={setTab4} />
      </Row>
    </div>
  );
}
