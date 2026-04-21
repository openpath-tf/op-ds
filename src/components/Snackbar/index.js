export { default as Snackbar } from './Snackbar';

export const meta = {
  name: 'Snackbar',
  description: 'Transient feedback toast — auto-dismiss or persistent with action.',
  types: ['default', 'success', 'error', 'info'],
  props: {
    open: { type: 'boolean', required: true },
    message: { type: 'string', required: true },
    type: { type: 'string', default: 'default', options: ['default', 'success', 'error', 'info'] },
    action: { type: '{ label: string, onClick: function }', note: 'Required when duration is null' },
    onClose: { type: 'function', required: true },
    duration: { type: 'number | null', default: 3000, note: 'null disables auto-close' },
  },
  when: 'Non-blocking feedback after a user action (saved, deleted, error).',
  whenNot: 'Do not stack multiple snackbars. Do not use for critical errors (use Modal). Do not use duration={null} without an action.',
};
