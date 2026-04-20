Audit an existing component against OpenPath DS rules.

## Context
Read `LLMs.txt` first to load the semantic token spec and component rules.

## Audit checklist

For the component specified in $ARGUMENTS (or all components if unspecified), check:

### Token compliance
- [ ] No imports from `tokens/primitives` (only `../../tokens`)
- [ ] No hardcoded hex/px values — all colors use `alias.*` or `component.*`
- [ ] Typography uses `typography.scale.<name>.size` and `.weight`
- [ ] Border-radius uses `shape.*`
- [ ] Shadows use `elevation[n]`
- [ ] Spacing uses `spacing[n]`

### Interaction
- [ ] Hover is implemented via state, not CSS pseudo-selector in inline style
- [ ] Disabled state has `opacity: 0.4` and `cursor: 'not-allowed'`
- [ ] Focus state is visible (border or ring)

### Code quality
- [ ] No unused imports (run eslint)
- [ ] Props match the spec in `LLMs.txt`
- [ ] Component and page are registered in `App.jsx`

## Output
Report each violation with: file path, line number, rule broken, suggested fix.
If clean, confirm with "✓ compliant".

$ARGUMENTS
