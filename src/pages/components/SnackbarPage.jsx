import { useState } from 'react';
import { Snackbar } from '../../components/Snackbar';
import { alias, spacing, typography } from '../../tokens';

const types = ['default', 'success', 'error', 'info'];

export default function SnackbarPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3], paddingBottom: spacing[6], borderBottom: `1px solid ${alias.border.default}` }}>
        <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>Type</span>
        <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
          {types.map(type => (
            <button
              key={type}
              onClick={() => setActive(type)}
              style={{ padding: `${spacing[2]} ${spacing[4]}`, borderRadius: 8, border: `1px solid ${alias.border.default}`, cursor: 'pointer', fontFamily: typography.fontFamily.sans, background: alias.surface.base, fontSize: typography.scale.body2.size }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
        <span style={{ fontSize: typography.scale.overline.size, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: alias.text.secondary, fontFamily: typography.fontFamily.sans }}>With Action</span>
        <div style={{ display: 'flex', gap: spacing[3] }}>
          <button
            onClick={() => setActive('action')}
            style={{ padding: `${spacing[2]} ${spacing[4]}`, borderRadius: 8, border: `1px solid ${alias.border.default}`, cursor: 'pointer', fontFamily: typography.fontFamily.sans, background: alias.surface.base, fontSize: typography.scale.body2.size }}
          >
            액션 포함
          </button>
        </div>
      </div>

      <Snackbar
        open={!!active && active !== 'action'}
        message={`${active} 메시지입니다`}
        type={active || 'default'}
        onClose={() => setActive(null)}
      />
      <Snackbar
        open={active === 'action'}
        message="저장되었습니다"
        type="default"
        action={{ label: '실행 취소', onClick: () => setActive(null) }}
        onClose={() => setActive(null)}
      />
    </div>
  );
}
