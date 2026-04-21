export { default as FAB } from './FAB';

export const meta = {
  name: 'FAB',
  description: 'Floating action button for the primary action on a screen.',
  sizes: ['sm', 'md', 'lg', 'extended'],
  props: {
    icon: { type: 'ReactNode', required: true },
    label: { type: 'string', note: 'Required when size is extended' },
    size: { type: 'string', default: 'md', options: ['sm', 'md', 'lg', 'extended'] },
    onClick: { type: 'function' },
  },
  when: 'The single most important action on a screen (create, compose, add).',
  whenNot: 'Do not use more than one FAB per screen. Do not use for destructive actions. Do not use sm as primary action.',
};
