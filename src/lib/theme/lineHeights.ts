export const allLineHeights = {
  1.125: 1.125,
  1.25: 1.25,
  1.5: 1.5
}

const lineHeights = (x: keyof typeof allLineHeights) => `${allLineHeights[x]}`

export default lineHeights
