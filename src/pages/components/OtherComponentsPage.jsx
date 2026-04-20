import { useState } from 'react';
import { AppBar } from '../../components/AppBar';
import { TabBar } from '../../components/Tab';
import { FAB } from '../../components/FAB';
import { Snackbar } from '../../components/Snackbar';
import { List, ListItem } from '../../components/List';
import { alias, spacing, typography } from '../../tokens';

function Section({ title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[8], borderBottom: `1px solid ${alias.border.default}` }}>
      <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>{title}</span>
      {children}
    </div>
  );
}

export default function OtherComponentsPage() {
  const [tabIdx, setTabIdx] = useState(0);
  const [snackOpen, setSnackOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
      <Section title="App Bar">
        <div style={{ border: `1px solid ${alias.border.default}`, borderRadius: 8, overflow: 'hidden' }}>
          <AppBar title="OpenPath" leading="←" trailing={<>⋮</>} />
        </div>
        <div style={{ border: `1px solid ${alias.border.default}`, borderRadius: 8, overflow: 'hidden' }}>
          <AppBar title="Elevated" leading="←" elevated />
        </div>
      </Section>

      <Section title="Tab">
        <div style={{ border: `1px solid ${alias.border.default}`, borderRadius: 8, overflow: 'hidden' }}>
          <TabBar items={['홈', '탐색', '활동', '프로필']} activeIndex={tabIdx} onChange={setTabIdx} />
        </div>
      </Section>

      <Section title="FAB">
        <div style={{ display: 'flex', gap: spacing[4], alignItems: 'flex-end' }}>
          <FAB icon="＋" size="sm" />
          <FAB icon="＋" size="md" />
          <FAB icon="＋" size="lg" />
          <FAB icon="✏" label="작성하기" size="extended" />
        </div>
      </Section>

      <Section title="Snackbar">
        <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
          {['default', 'success', 'error', 'info'].map(type => (
            <button
              key={type}
              onClick={() => setSnackOpen(type)}
              style={{ padding: `${spacing[2]} ${spacing[4]}`, borderRadius: 8, border: `1px solid ${alias.border.default}`, cursor: 'pointer', fontFamily: typography.fontFamily.sans, background: alias.surface.base }}
            >
              {type}
            </button>
          ))}
        </div>
        <Snackbar open={!!snackOpen} message={`${snackOpen} 메시지입니다`} type={snackOpen || 'default'} onClose={() => setSnackOpen(false)} />
      </Section>

      <Section title="List">
        <List style={{ maxWidth: 360 }}>
          <ListItem leading="◈" title="항목 1" subtitle="보조 텍스트" trailing="›" onClick={() => {}} />
          <ListItem leading="◉" title="항목 2" subtitle="보조 텍스트" trailing="›" onClick={() => {}} />
          <ListItem leading="⬡" title="항목 3" trailing="›" onClick={() => {}} divider={false} />
        </List>
      </Section>
    </div>
  );
}
