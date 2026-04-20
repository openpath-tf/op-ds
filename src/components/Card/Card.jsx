import { alias, elevation, spacing, shape } from '../../tokens';

const variants = {
  elevated: { background: alias.surface.base, boxShadow: elevation[2], border: 'none' },
  outlined: { background: alias.surface.base, boxShadow: 'none', border: `1px solid ${alias.border.default}` },
  filled:   { background: alias.surface.subtle, boxShadow: 'none', border: 'none' },
};

export default function Card({ children, variant = 'elevated', padding = spacing[6], style: extStyle }) {
  return (
    <div style={{
      ...variants[variant],
      borderRadius: shape.lg,
      padding,
      ...extStyle,
    }}>
      {children}
    </div>
  );
}
