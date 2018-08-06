import { blue, green, grey, red, yellow } from '@material-ui/core/colors'

export const allColors = {
  gray800: grey[800],
  gray400: grey[400],
  gray300: grey[300],
  gray200: grey[200],
  gray100: grey[100],
  red100: red[100],
  green100: green[100],
  blue100: blue[100],
  transparent: 'transparent',
  white: 'white'
}

const colorsFn = (x: keyof typeof allColors) => allColors[x]

export default colorsFn
