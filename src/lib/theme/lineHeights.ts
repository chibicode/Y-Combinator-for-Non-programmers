import locale from 'src/lib/locale'

export const allLineHeights = {
  1.125: 1.125,
  1.25: 1.25,
  1.5: 1.5
}

const lineHeightJpMultiplier = 1.25
const multiplyLineHeight = (lineHeight: number) =>
  locale === 'jp' ? lineHeightJpMultiplier * lineHeight : lineHeight

const lineHeights = (x: keyof typeof allLineHeights) =>
  multiplyLineHeight(allLineHeights[x])

export default lineHeights
