export const allFontSizes = {
  0.5: 0.5,
  0.6: 0.6,
  0.65: 0.65,
  0.7: 0.7,
  0.75: 0.75,
  0.8: 0.8, // 0.8 is for navbar only
  0.85: 0.85,
  1: 1,
  1.2: 1.2,
  1.3: 1.3, // 1.3 is for variable box emoji only
  1.4: 1.4,
  1.6: 1.6,
  2: 2,
  2.25: 2.25,
  2.5: 2.5,
  3: 3,
  4: 4
}

const fontSizes = (x: keyof typeof allFontSizes) => `${allFontSizes[x]}rem`

export default fontSizes
