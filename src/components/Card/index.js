export { default as Card } from './Card';

export const meta = {
  name: 'Card',
  description: 'Content surface with three visual elevation variants.',
  variants: ['elevated', 'outlined', 'filled'],
  props: {
    variant: { type: 'string', default: 'elevated', options: ['elevated', 'outlined', 'filled'] },
    padding: { type: 'string', default: '24px', note: 'Use spacing[n] values' },
    style: { type: 'object' },
  },
  when: 'elevated — standalone content. outlined — form sections. filled — subtle background grouping.',
  whenNot: 'Do not nest elevated cards. Do not use as a button wrapper.',
};
