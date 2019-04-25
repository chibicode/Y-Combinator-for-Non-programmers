import locale from 'src/lib/locale'

export const allLetterSpacings = {
  title: locale === 'jp' ? '-.06em' : '-0.01em'
}

const letterSpacings = (x: keyof typeof allLetterSpacings) =>
  allLetterSpacings[x]

export default letterSpacings
