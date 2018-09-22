export const allFontSizes = {
  11: 11,
  12: 12,
  14: 14,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  72: 72,
  96: 96
}

const fontSizes = (x: keyof typeof allFontSizes) => `${allFontSizes[x]}px`

export default fontSizes
