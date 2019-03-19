import locale from 'src/lib/locale'

export const allLineHeights = {
  1: 1,
  1.1: 1.1,
  1.3: 1.3,
  1.5: 1.5,
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
