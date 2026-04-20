import { primitive } from '../primitives/colors';
import { spacing } from '../primitives/spacing';
import { shape }   from '../primitives/shape';
import { elevation } from '../primitives/elevation';
import { typography } from '../primitives/typography';

export const component = {
  button: {
    // color
    primaryBg:      primitive.mint[400],
    primaryHover:   primitive.mint[500],
    primaryPressed: primitive.mint[600],
    secondaryBorder: primitive.mint[400],
    // shape
    borderRadius:   shape.full,
    // spacing
    paddingX: { sm: spacing[3], md: spacing[5], lg: spacing[6] },
    // size
    height:   { sm: '32px', md: '40px', lg: '48px' },
    // typography
    fontSize: { sm: typography.scale.label.size, md: typography.scale.body2.size, lg: typography.scale.body1.size },
    fontWeight: typography.scale.label.weight,
    // elevation
    elevation: elevation[0],
  },

  input: {
    // color
    border:      primitive.neutral[200],
    focusBorder: primitive.mint[400],
    errorBorder: primitive.feedback.error,
    disabledBg:  primitive.neutral[100],
    // shape
    borderRadius: shape.sm,
    // size
    height: '44px',
    // typography
    fontSize: typography.scale.body1.size,
    // elevation
    elevation: elevation[0],
  },

  card: {
    // shape
    borderRadius: shape.lg,
    // elevation per variant
    elevation: { elevated: elevation[2], outlined: elevation[0], filled: elevation[0] },
    // spacing
    padding: spacing[6],
  },

  modal: {
    // shape
    borderRadius: shape.xl,
    // spacing
    padding: spacing[8],
    // elevation
    elevation: elevation[4],
    // size
    minWidth: '320px',
    maxWidth: '480px',
  },

  chips: {
    // shape
    borderRadius: shape.full,
    // size
    height: '32px',
    paddingX: spacing[3],
    // typography
    fontSize: typography.scale.label.size,
    fontWeight: 500,
    // elevation
    elevation: elevation[0],
  },

  appBar: {
    // size
    height: '56px',
    paddingX: spacing[4],
    // elevation
    elevation:         elevation[1],
    elevationRaised:   elevation[2],
  },

  tab: {
    // size
    height: '48px',
    // typography
    fontSize:           typography.scale.label.size,
    fontWeightActive:   600,
    fontWeightInactive: 400,
    // indicator
    indicatorHeight: '2px',
  },

  fab: {
    // color
    bg:      primitive.mint[400],
    hover:   primitive.mint[500],
    pressed: primitive.mint[600],
    // shape per size
    borderRadius: { sm: shape.md, md: shape.lg, lg: shape.xl, extended: shape.full },
    // size
    width:   { sm: '40px', md: '56px', lg: '96px' },
    height:  { sm: '40px', md: '56px', lg: '96px' },
    extendedHeight: '56px',
    extendedPaddingX: spacing[5],
    // elevation
    elevation:      elevation[3],
    elevationHover: elevation[4],
  },

  snackbar: {
    // shape
    borderRadius: shape.md,
    // spacing
    paddingX: spacing[5],
    paddingY: spacing[3],
    // size
    minWidth: '280px',
    maxWidth: '480px',
    // elevation
    elevation: elevation[3],
    // typography
    fontSize: typography.scale.body2.size,
  },

  list: {
    // shape
    borderRadius: shape.md,
    // spacing
    itemPaddingX: spacing[4],
    itemPaddingY: spacing[3],
    // elevation
    elevation: elevation[0],
  },
};
