import locale from 'src/lib/locale'

export const allFontWeights = {
  400: 400,
  700: 700,
  800: locale === 'en' ? 900 : 800,
  900: 900
}

const fontWeights = (x: keyof typeof allFontWeights) => allFontWeights[x]

export default fontWeights
