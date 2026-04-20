import { useEffect } from 'react';
import { alias, elevation, spacing, shape, typography } from '../../tokens';

const typeStyles = {
  default: { background: alias.surface.inverse, color: alias.text.inverse },
  success: { background: alias.feedback.success, color: alias.text.inverse },
  error:   { background: alias.feedback.error,   color: alias.text.inverse },
  info:    { background: alias.brand.primary,     color: alias.text.inverse },
};

export default function Snackbar({ open, message, type = 'default', action, onClose, duration = 3000 }) {
  useEffect(() => {
    if (open && duration && onClose) {
      const t = setTimeout(onClose, duration);
      return () => clearTimeout(t);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: spacing[8],
      left: '50%',
      transform: 'translateX(-50%)',
      ...typeStyles[type],
      padding: `${spacing[3]} ${spacing[5]}`,
      borderRadius: shape.md,
      boxShadow: elevation[3],
      display: 'flex',
      alignItems: 'center',
      gap: spacing[4],
      minWidth: 280,
      maxWidth: 480,
      fontSize: typography.scale.body2.size,
      fontFamily: typography.fontFamily.sans,
      zIndex: 1100,
    }}>
      <span style={{ flex: 1 }}>{message}</span>
      {action && (
        <button
          onClick={action.onClick}
          style={{
            background: 'transparent',
            border: 'none',
            color: alias.brand.light,
            fontWeight: 600,
            fontSize: typography.scale.label.size,
            cursor: 'pointer',
            fontFamily: typography.fontFamily.sans,
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
