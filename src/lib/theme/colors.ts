import { blue, green, grey, red } from '@material-ui/core/colors'

export const allColors = {
  grey900: grey[900],
  grey800: grey[800],
  grey500: grey[500],
  grey400: grey[400],
  grey300: grey[300],
  grey200: grey[200],
  grey100: grey[100],
  red100: red[100],
  green100: green[100],
  blue100: blue[100],
  transparent: 'transparent',
  white: 'white'
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
