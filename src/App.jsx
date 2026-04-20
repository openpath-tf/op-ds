import { useState } from 'react';
import './styles/global.css';
import { alias, spacing, typography } from './tokens';

import ColorPage       from './pages/style/ColorPage';
import TypographyPage  from './pages/style/TypographyPage';
import SpacingPage     from './pages/style/SpacingPage';
import ShapePage       from './pages/style/ShapePage';
import TokenPage       from './pages/foundation/TokenPage';
import PrinciplesPage  from './pages/foundation/PrinciplesPage';
import ButtonPage      from './pages/components/ButtonPage';
import InputPage       from './pages/components/InputPage';
import ModalPage       from './pages/components/ModalPage';
import ChipsPage       from './pages/components/ChipsPage';
import CardPage        from './pages/components/CardPage';
import AppBarPage      from './pages/components/AppBarPage';
import TabPage         from './pages/components/TabPage';
import FABPage         from './pages/components/FABPage';
import SnackbarPage    from './pages/components/SnackbarPage';
import ListPage        from './pages/components/ListPage';

const nav = [
  {
    section: 'Foundation',
    items: [
      { id: 'principles', label: 'Principles',    Page: PrinciplesPage },
      { id: 'token',      label: 'Design Token',  Page: TokenPage },
    ],
  },
  {
    section: 'Style',
    items: [
      { id: 'color',      label: 'Color',       Page: ColorPage },
      { id: 'typography', label: 'Typography',  Page: TypographyPage },
      { id: 'spacing',    label: 'Spacing',     Page: SpacingPage },
      { id: 'shape',      label: 'Shape & Elevation', Page: ShapePage },
    ],
  },
  {
    section: 'Components',
    items: [
      { id: 'button',  label: 'Button',  Page: ButtonPage },
      { id: 'input',   label: 'Input',   Page: InputPage },
      { id: 'modal',   label: 'Modal',   Page: ModalPage },
      { id: 'chips',   label: 'Chips',   Page: ChipsPage },
      { id: 'card',    label: 'Card',    Page: CardPage },
      { id: 'appbar',  label: 'App Bar', Page: AppBarPage },
      { id: 'tab',     label: 'Tab',     Page: TabPage },
      { id: 'fab',     label: 'FAB',     Page: FABPage },
      { id: 'snackbar',label: 'Snackbar',Page: SnackbarPage },
      { id: 'list',    label: 'List',    Page: ListPage },
    ],
  },
];

const allItems = nav.flatMap(n => n.items);

export default function App() {
  const [activeId, setActiveId] = useState('principles');
  const active = allItems.find(i => i.id === activeId);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: typography.fontFamily.sans }}>
      {/* Sidebar */}
      <aside style={{
        width: 240,
        flexShrink: 0,
        background: alias.surface.base,
        borderRight: `1px solid ${alias.border.default}`,
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}>
        <div style={{ padding: `${spacing[6]} ${spacing[5]} ${spacing[4]}` }}>
          <div style={{ fontSize: typography.scale.heading3.size, fontWeight: 700, color: alias.brand.primary }}>OpenPath</div>
          <div style={{ fontSize: typography.scale.caption.size, color: alias.text.disabled, marginTop: spacing[1] }}>Design System v0.1</div>
        </div>

        <nav style={{ flex: 1, padding: `0 ${spacing[3]} ${spacing[6]}` }}>
          {nav.map(group => (
            <div key={group.section} style={{ marginBottom: spacing[5] }}>
              <div style={{
                fontSize: typography.scale.overline.size,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: alias.text.disabled,
                padding: `${spacing[2]} ${spacing[3]}`,
                marginBottom: spacing[1],
              }}>
                {group.section}
              </div>
              {group.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: `${spacing[2]} ${spacing[3]}`,
                    borderRadius: 8,
                    border: 'none',
                    background: activeId === item.id ? alias.brand.light : 'transparent',
                    color: activeId === item.id ? alias.brand.pressed : alias.text.secondary,
                    fontWeight: activeId === item.id ? 600 : 400,
                    fontSize: typography.scale.body2.size,
                    cursor: 'pointer',
                    fontFamily: typography.fontFamily.sans,
                    transition: 'all 0.1s',
                    marginBottom: spacing[1],
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: spacing[10], maxWidth: 900, overflowY: 'auto' }}>
        <h1 style={{
          fontSize: typography.scale.heading1.size,
          fontWeight: typography.scale.heading1.weight,
          color: alias.text.primary,
          marginBottom: spacing[8],
        }}>
          {active?.label}
        </h1>
        {active && <active.Page />}
      </main>
    </div>
  );
}
