const allSpaces = {
  0: 0,
  0.25: 0.25,
  0.5: 0.5,
  0.75: 0.75,
  1: 1,
  1.25: 1.25,
  1.5: 1.5,
  1.75: 1.75,
  2: 2,
  2.5: 2.5,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8
}

const spaces = (x: keyof typeof allSpaces) => `${allSpaces[x]}rem`

export default spaces
