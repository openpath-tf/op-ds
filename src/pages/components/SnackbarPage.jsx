import { useState } from 'react';
import { Snackbar } from '../../components/Snackbar';
import s from '../showcase.module.css';

const types = ['default', 'success', 'error', 'info'];

export default function SnackbarPage() {
  const [active, setActive] = useState(null);

  return (
    <div className={s.page}>
      <div className={s.row}>
        <span className={s.rowLabel}>Type</span>
        <div className={s.rowContent}>
          {types.map(type => (
            <button
              key={type}
              onClick={() => setActive(type)}
              style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--color-border-default)', cursor: 'pointer', fontFamily: 'var(--font-sans)', background: 'var(--color-surface-base)', fontSize: '0.875rem' }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className={s.row}>
        <span className={s.rowLabel}>With Action</span>
        <div className={s.rowContent}>
          <button
            onClick={() => setActive('action')}
            style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--color-border-default)', cursor: 'pointer', fontFamily: 'var(--font-sans)', background: 'var(--color-surface-base)', fontSize: '0.875rem' }}
          >
            액션 포함
          </button>
        </div>
      </div>
      <Snackbar open={!!active && active !== 'action'} message={`${active} 메시지입니다`} type={active || 'default'} onClose={() => setActive(null)} />
      <Snackbar open={active === 'action'} message="저장되었습니다" action={{ label: '실행 취소', onClick: () => setActive(null) }} onClose={() => setActive(null)} />
    </div>
  );
}
