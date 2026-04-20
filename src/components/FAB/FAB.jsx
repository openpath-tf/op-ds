import { alias, elevation, shape, spacing, typography } from '../../tokens';

const sizes = {
  sm:      { size: '40px', iconSize: '18px', borderRadius: shape.md },
  md:      { size: '56px', iconSize: '24px', borderRadius: shape.lg },
  lg:      { size: '96px', iconSize: '36px', borderRadius: shape.xl },
  extended:{ height: '56px', padding: `0 ${spacing[5]}`, borderRadius: shape.full },
};

export default function FAB({ icon, label, size = 'md', onClick }) {
  const isExtended = size === 'extended';
  const dim = sizes[size];

  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isExtended ? spacing[2] : undefined,
        width: isExtended ? 'auto' : dim.size,
        height: isExtended ? dim.height : dim.size,
        padding: isExtended ? dim.padding : undefined,
        background: alias.brand.primary,
        color: alias.text.inverse,
        border: 'none',
        borderRadius: isExtended ? dim.borderRadius : dim.borderRadius,
        boxShadow: elevation[3],
        cursor: 'pointer',
        fontSize: isExtended ? typography.scale.label.size : dim.iconSize,
        fontWeight: 600,
        fontFamily: typography.fontFamily.sans,
        transition: 'box-shadow 0.15s',
      }}
    >
      <span style={{ fontSize: isExtended ? '20px' : dim.iconSize, display: 'flex' }}>{icon}</span>
      {isExtended && label && <span>{label}</span>}
    </button>
  );
}
