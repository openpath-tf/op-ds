import { useState } from 'react';
import { alias, component, typography, spacing, shape } from '../../tokens';

const baseVariants = {
  filled: {
    background: component.button.primaryBg,
    color: alias.text.inverse,
    border: 'none',
  },
  outlined: {
    background: 'transparent',
    color: alias.brand.primary,
    border: `1.5px solid ${component.button.secondaryBorder}`,
  },
  ghost: {
    background: 'transparent',
    color: alias.brand.primary,
    border: 'none',
  },
  tonal: {
    background: alias.brand.light,
    color: alias.brand.pressed,
    border: 'none',
  },
};

const hoverVariants = {
  filled:   { background: component.button.primaryHover },
  outlined: { background: alias.brand.light },
  ghost:    { background: alias.brand.light },
  tonal:    { background: '#D6F5F5' },
};

const sizes = {
  sm: { padding: `${spacing[1]} ${spacing[3]}`, fontSize: typography.scale.label.size, height: '32px' },
  md: { padding: `${spacing[2]} ${spacing[5]}`, fontSize: typography.scale.body2.size, height: '40px' },
  lg: { padding: `${spacing[3]} ${spacing[6]}`, fontSize: typography.scale.body1.size, height: '48px' },
};

export default function Button({
  children,
  variant = 'filled',
  size = 'md',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);
  const base = baseVariants[variant];
  const dim = sizes[size];

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...base,
        ...(hovered && !disabled ? hoverVariants[variant] : {}),
        ...dim,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing[2],
        width: fullWidth ? '100%' : 'auto',
        borderRadius: shape.full,
        fontWeight: typography.scale.label.weight,
        fontFamily: typography.fontFamily.sans,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 0.15s, opacity 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
    </button>
  );
}
