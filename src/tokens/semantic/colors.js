import { primitive } from '../primitives/colors';

// Tier 2: Alias — "무엇에 쓰이는 색"
export const alias = {
  brand: {
    primary:  primitive.mint[400],
    hover:    primitive.mint[500],
    pressed:  primitive.mint[600],
    light:    primitive.mint[50],
  },
  text: {
    primary:   primitive.neutral[900],
    secondary: primitive.neutral[600],
    disabled:  primitive.neutral[400],
    inverse:   primitive.neutral[0],
  },
  surface: {
    base:    primitive.neutral[0],
    subtle:  primitive.neutral[50],
    inverse: primitive.neutral[800],
    overlay: 'rgba(0,0,0,0.4)',
  },
  border: {
    default: primitive.neutral[200],
    focus:   primitive.mint[400],
    error:   primitive.feedback.error,
  },
  feedback: {
    success: primitive.feedback.success,
    warning: primitive.feedback.warning,
    error:   primitive.feedback.error,
    info:    primitive.feedback.info,
  },
};

// Tier 3: Component — alias를 다시 참조
export const component = {
  button: {
    primaryBg:      alias.brand.primary,
    primaryHover:   alias.brand.hover,
    primaryPressed: alias.brand.pressed,
    secondaryBorder: alias.brand.primary,
  },
  input: {
    border:      alias.border.default,
    focusBorder: alias.border.focus,
    errorBorder: alias.border.error,
    disabledBg:  primitive.neutral[100],
  },
};
