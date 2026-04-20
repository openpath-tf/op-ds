import { alias, elevation, spacing, shape, typography } from '../../tokens';
import { Button } from '../Button';

export default function Modal({ open, title, description, onConfirm, onCancel, confirmLabel = '확인', cancelLabel = '취소' }) {
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: alias.surface.overlay,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: alias.surface.base,
        borderRadius: shape.xl,
        padding: spacing[8],
        minWidth: 320,
        maxWidth: 480,
        width: '90vw',
        boxShadow: elevation[4],
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[5],
      }}>
        {title && (
          <h2 style={{
            margin: 0,
            fontSize: typography.scale.heading3.size,
            fontWeight: typography.scale.heading3.weight,
            color: alias.text.primary,
            fontFamily: typography.fontFamily.sans,
          }}>
            {title}
          </h2>
        )}
        {description && (
          <p style={{
            margin: 0,
            fontSize: typography.scale.body2.size,
            color: alias.text.secondary,
            lineHeight: typography.scale.body2.lineHeight,
            fontFamily: typography.fontFamily.sans,
          }}>
            {description}
          </p>
        )}
        <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'flex-end' }}>
          {onCancel && <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>}
          {onConfirm && <Button variant="filled" onClick={onConfirm}>{confirmLabel}</Button>}
        </div>
      </div>
    </div>
  );
}
