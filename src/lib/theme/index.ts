export { default as fontSizes } from 'src/lib/theme/fontSizes'
export { default as colors } from 'src/lib/theme/colors'
export { default as ns } from 'src/lib/theme/ns'
export { default as maxWidths } from 'src/lib/theme/maxWidths'
export { default as spaces } from 'src/lib/theme/spaces'
export { default as zIndices } from 'src/lib/theme/zIndices'
export { default as lineHeights } from 'src/lib/theme/lineHeights'
export { default as fontWeights } from 'src/lib/theme/fontWeights'
export { default as letterSpacings } from 'src/lib/theme/letterSpacings'
export { default as radii } from 'src/lib/theme/radii'

// If within a card but not within bubble quote,
// this is the width that will fit for 375px width screen (iPhone X)
const sideSpacing = 1.25 * 2
const targetScreenWidthInRem = 375 / 18
export const fitWithinMobileWidth = `${targetScreenWidthInRem - sideSpacing}rem`
