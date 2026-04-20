Compose a UI page using OpenPath DS components.

## Context
Read `LLMs.txt` first to understand which component to use for each UI pattern.

## Instructions

Given a page description in $ARGUMENTS:

1. Identify which DS components are needed (Button, Input, Card, Modal, etc.)
2. Select appropriate token decisions:
   - Which `variant` and `size` for each component
   - What `alias.surface.*` to use for page background/sections
   - What `typography.scale.*` for headings and body
3. Compose the page in `src/pages/<PageName>.jsx`:
   - Import components from `../../components/<Name>`
   - Import tokens from `../../tokens`
   - Do NOT import from `tokens/primitives`
   - Use semantic layout: header → content → actions pattern
4. Register the page in `src/App.jsx` if it should appear in the nav.
5. Describe token choices made and why (e.g. "used `card.outlined` variant for form section to group inputs without depth").

$ARGUMENTS
