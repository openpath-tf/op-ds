export { default as Button } from './Button';

export const meta = {
  name: 'Button',
  description: 'Primary interactive element for triggering actions.',
  variants: ['filled', 'outlined', 'tonal', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  props: {
    variant: { type: 'string', default: 'filled', options: ['filled', 'outlined', 'tonal', 'ghost'] },
    size: { type: 'string', default: 'md', options: ['sm', 'md', 'lg'] },
    disabled: { type: 'boolean', default: false },
    fullWidth: { type: 'boolean', default: false },
    leftIcon: { type: 'ReactNode' },
    rightIcon: { type: 'ReactNode' },
    onClick: { type: 'function' },
  },
  when: 'Use filled for the single primary action. outlined for secondary. tonal for soft emphasis. ghost for tertiary/inline.',
  whenNot: 'Do not place two filled buttons side by side. Do not use ghost as the sole action.',
};
