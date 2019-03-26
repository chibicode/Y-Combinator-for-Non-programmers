export const allLetterSpacings = {
  title: '-.025em'
}

const letterSpacings = (x: keyof typeof allLetterSpacings) =>
  allLetterSpacings[x]

export default letterSpacings
