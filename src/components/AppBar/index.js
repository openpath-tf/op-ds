export { default as AppBar } from './AppBar';

export const meta = {
  name: 'AppBar',
  description: 'Top navigation bar, fixed at 56px height.',
  props: {
    title: { type: 'string' },
    leading: { type: 'ReactNode', note: 'Back icon, menu icon, or any element' },
    trailing: { type: 'ReactNode', note: 'Icon buttons or action group, max 2–3 items' },
    elevated: { type: 'boolean', default: false, note: 'elevation[1] → elevation[2]' },
  },
  when: 'Top-level page navigation with optional actions.',
  whenNot: 'Do not use as a section header inside a page. Do not put more than 3 trailing actions.',
};
