export { default as Chips } from './Chips';

export const meta = {
  name: 'Chips',
  description: 'Filter tag that can be toggled and optionally removed.',
  props: {
    label: { type: 'string', required: true },
    selected: { type: 'boolean', default: false },
    onClick: { type: 'function', note: 'Filter/toggle handler' },
    onClose: { type: 'function', note: 'Makes chip removable when provided' },
    disabled: { type: 'boolean', default: false },
  },
  when: 'Multi-select filters, tag inputs, removable selections.',
  whenNot: 'Do not use for primary navigation (use TabBar). Do not use onClose and onClick for conflicting actions.',
};
