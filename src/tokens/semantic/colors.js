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

// Tier 3 colors only — full component tokens (color+shape+spacing+elevation) are in ./component.js
