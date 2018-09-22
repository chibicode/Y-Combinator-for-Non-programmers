export const allFontWeights = {
  300: 300,
  400: 400,
  600: 600,
  700: 700,
  800: 800
}

const fontWeights = (x: keyof typeof allFontWeights) => `${allFontWeights[x]}`

export default fontWeights
