import { alias, typography, spacing, shape } from '../../tokens';

export default function Chips({ label, selected = false, onClose, onClick, disabled = false }) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: spacing[1],
        height: '32px',
        padding: `0 ${spacing[3]}`,
        borderRadius: shape.full,
        border: `1.5px solid ${selected ? alias.brand.primary : alias.border.default}`,
        background: selected ? alias.brand.light : alias.surface.base,
        color: selected ? alias.brand.pressed : alias.text.secondary,
        fontSize: typography.scale.label.size,
        fontWeight: 500,
        fontFamily: typography.fontFamily.sans,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        userSelect: 'none',
        transition: 'all 0.15s',
      }}
    >
      {label}
      {onClose && (
        <span
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          style={{ fontSize: '14px', lineHeight: 1, cursor: 'pointer', opacity: 0.6 }}
        >
          ✕
        </span>
      )}
    </div>
  );
}
