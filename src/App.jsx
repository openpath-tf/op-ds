import { useState } from 'react';
import './styles/global.css';
import styles from './App.module.css';

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
      { id: 'principles', label: 'Principles',       Page: PrinciplesPage },
      { id: 'token',      label: 'Design Token',     Page: TokenPage },
    ],
  },
  {
    section: 'Style',
    items: [
      { id: 'color',      label: 'Color',            Page: ColorPage },
      { id: 'typography', label: 'Typography',       Page: TypographyPage },
      { id: 'spacing',    label: 'Spacing',          Page: SpacingPage },
      { id: 'shape',      label: 'Shape & Elevation',Page: ShapePage },
    ],
  },
  {
    section: 'Components',
    items: [
      { id: 'button',   label: 'Button',   Page: ButtonPage },
      { id: 'input',    label: 'Input',    Page: InputPage },
      { id: 'modal',    label: 'Modal',    Page: ModalPage },
      { id: 'chips',    label: 'Chips',    Page: ChipsPage },
      { id: 'card',     label: 'Card',     Page: CardPage },
      { id: 'appbar',   label: 'App Bar',  Page: AppBarPage },
      { id: 'tab',      label: 'Tab',      Page: TabPage },
      { id: 'fab',      label: 'FAB',      Page: FABPage },
      { id: 'snackbar', label: 'Snackbar', Page: SnackbarPage },
      { id: 'list',     label: 'List',     Page: ListPage },
    ],
  },
];

const allItems = nav.flatMap(n => n.items);

export default function App() {
  const [activeId, setActiveId] = useState('principles');
  const active = allItems.find(i => i.id === activeId);

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logoName}>OpenPath</div>
          <div className={styles.logoVersion}>Design System v0.1</div>
        </div>
        <nav className={styles.nav}>
          {nav.map(group => (
            <div key={group.section} className={styles.navGroup}>
              <div className={styles.navGroupLabel}>{group.section}</div>
              {group.items.map(item => (
                <button
                  key={item.id}
                  className={`${styles.navItem} ${activeId === item.id ? styles.navItemActive : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>{active?.label}</h1>
        {active && <active.Page />}
      </main>
    </div>
  );
}
