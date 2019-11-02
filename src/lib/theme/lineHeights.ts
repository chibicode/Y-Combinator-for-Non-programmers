import locale from 'src/lib/locale'

export const allLineHeights = {
  1: 1,
  1.1: 1.1,
  1.2: 1.2,
  1.3: 1.3,
  1.55: 1.55,
  2: 2
}

const lineHeightJpMultiplier = 1.15
const multiplyLineHeight = (lineHeight: number) =>
  locale === 'jp' ? lineHeightJpMultiplier * lineHeight : lineHeight

const lineHeights = (
  x: keyof typeof allLineHeights,
  options?: { ignoreLocale: boolean }
) =>
  options && options.ignoreLocale
    ? allLineHeights[x]
    : multiplyLineHeight(allLineHeights[x])

export default lineHeights
