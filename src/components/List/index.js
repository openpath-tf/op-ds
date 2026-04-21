export { List, ListItem } from './List';

export const meta = {
  name: 'List / ListItem',
  description: 'Structured list container with leading, trailing, and divider slots.',
  props: {
    List: {
      children: { type: 'ReactNode' },
      style: { type: 'object' },
    },
    ListItem: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string' },
      leading: { type: 'ReactNode', note: 'Icon, avatar' },
      trailing: { type: 'ReactNode', note: 'Icon, badge, metadata' },
      onClick: { type: 'function', note: 'Adds hover state when provided' },
      divider: { type: 'boolean', default: true, note: 'Set false on the last item' },
    },
  },
  when: '2 or more structured rows with consistent leading/trailing slots.',
  whenNot: 'Do not use for fewer than 2 items. Do not put inputs or buttons inside ListItem. Always set divider={false} on the last item.',
};
