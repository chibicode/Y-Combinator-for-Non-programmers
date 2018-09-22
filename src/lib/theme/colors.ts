import { blue, green, grey, red, yellow } from '@material-ui/core/colors'

export const allColors = {
  grey900: grey[900],
  grey800: grey[800],
  grey500: grey[500],
  grey400: grey[400],
  grey300: grey[300],
  grey200: grey[200],
  grey100: grey[100],
  red100: red[100],
  red300: red[300], // Logo heart
  red500: red[500],
  green100: green[100],
  blue100: blue[100],
  transparent: 'transparent',
  white: 'white',
  yellow200: yellow[200]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
