export const allFontSizes = {
  0.6: 0.6,
  0.7: 0.7,
  0.75: 0.75,
  0.85: 0.85,
  1: 1,
  1.25: 1.25,
  1.5: 1.5,
  1.75: 1.75,
  2: 2,
  2.5: 2.5,
  3: 3,
  4: 4,
  5: 5,
  6: 6
}

const fontSizes = (x: keyof typeof allFontSizes) => `${allFontSizes[x]}rem`

export default fontSizes
