export const allLetterSpacings = {
  title: '-.05em'
}

const letterSpacings = (x: keyof typeof allLetterSpacings) =>
  allLetterSpacings[x]

export default letterSpacings
