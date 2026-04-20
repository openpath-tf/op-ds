import { useState } from 'react';
import { alias, component, typography, spacing, shape } from '../../tokens';

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  helperText,
  error,
  disabled = false,
  type = 'text',
}) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? component.input.errorBorder
    : focused
    ? component.input.focusBorder
    : component.input.border;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1], width: '100%' }}>
      {label && (
        <label style={{
          fontSize: typography.scale.label.size,
          fontWeight: typography.scale.label.weight,
          color: disabled ? alias.text.disabled : alias.text.secondary,
          fontFamily: typography.fontFamily.sans,
        }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: '44px',
          padding: `0 ${spacing[4]}`,
          fontSize: typography.scale.body1.size,
          fontFamily: typography.fontFamily.sans,
          color: alias.text.primary,
          background: disabled ? component.input.disabledBg : alias.surface.base,
          border: `1.5px solid ${borderColor}`,
          borderRadius: shape.sm,
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'text',
          transition: 'border-color 0.15s',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
      {(helperText || error) && (
        <span style={{
          fontSize: typography.scale.caption.size,
          color: error ? component.input.errorBorder : alias.text.secondary,
          fontFamily: typography.fontFamily.sans,
        }}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
