export { TabBar } from './Tab';

export const meta = {
  name: 'TabBar',
  description: 'Horizontal tab navigation for switching between top-level views.',
  props: {
    items: { type: 'string[]', required: true, note: '2–5 items' },
    activeIndex: { type: 'number', required: true },
    onChange: { type: 'function', required: true },
  },
  when: 'Switching between 2–5 parallel, non-sequential views.',
  whenNot: 'Do not use more than 5 tabs. Do not use for sequential steps (use stepper). Do not use for filtering (use Chips).',
};
