export const allFontSizes = {
  0.6: 0.6,
  0.7: 0.7,
  0.75: 0.75,
  0.85: 0.85,
  1: 1,
  1.2: 1.2,
  1.4: 1.4,
  1.7: 1.7,
  2: 2,
  2.5: 2.5,
  3: 3,
  4: 4
}

const fontSizes = (x: keyof typeof allFontSizes) => `${allFontSizes[x]}rem`

export default fontSizes
