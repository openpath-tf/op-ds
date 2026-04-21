export { default as Modal } from './Modal';

export const meta = {
  name: 'Modal',
  description: 'Blocking dialog requiring explicit user confirmation or cancellation.',
  props: {
    open: { type: 'boolean', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string' },
    onConfirm: { type: 'function', required: true },
    onCancel: { type: 'function', required: true },
    confirmLabel: { type: 'string', default: '확인' },
    cancelLabel: { type: 'string', default: '취소' },
  },
  when: 'Destructive or irreversible actions that require explicit confirmation.',
  whenNot: 'Do not use for non-critical notifications (use Snackbar). Do not nest modals. Always provide onCancel.',
};
