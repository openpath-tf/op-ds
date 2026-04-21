export { default as Input } from './Input';

export const meta = {
  name: 'Input',
  description: 'Text field with label, helper text, and error state.',
  props: {
    label: { type: 'string', required: true },
    placeholder: { type: 'string' },
    value: { type: 'string' },
    onChange: { type: 'function' },
    helperText: { type: 'string' },
    error: { type: 'string', note: 'Overrides helperText when set' },
    disabled: { type: 'boolean', default: false },
    type: { type: 'string', default: 'text' },
  },
  when: 'Any single-line text entry with a visible label.',
  whenNot: 'Do not omit label. Do not pass both helperText and error simultaneously. Use textarea for multi-line.',
};
