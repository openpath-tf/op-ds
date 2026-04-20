Create a new OpenPath DS component.

## Context
Read `LLMs.txt` first to understand token rules, typography scale, and component conventions before writing any code.

## Instructions

1. Read `LLMs.txt` to load the semantic spec.
2. Ask (or infer from $ARGUMENTS) the component name, variants, sizes, and states needed.
3. Create `src/components/<Name>/<Name>.jsx` following these rules:
   - Import ONLY from `../../tokens` (never from `../../tokens/primitives`)
   - Use `alias.*` tokens for colors, `component.*` for component-specific overrides
   - Use `typography.scale.<name>.size` and `.weight` for text
   - Use `shape.*` for border-radius
   - Use `elevation[n]` for box-shadow where needed
   - Handle hover via `useState` + `onMouseEnter/Leave` (no CSS pseudo-selectors in inline styles)
   - Handle disabled with `opacity: 0.4` and `cursor: 'not-allowed'`
4. Create `src/components/<Name>/index.js` exporting the component.
5. Create `src/pages/components/<Name>Page.jsx` with a showcase:
   - Use `Row` pattern (overline label + flex row of variants)
   - Show all variants, sizes, and states
6. Register the new page in `src/App.jsx` under the Components nav section.
7. Run `npx eslint src/components/<Name>/ src/pages/components/<Name>Page.jsx` and fix any errors.

$ARGUMENTS
