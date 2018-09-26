import {
  blue,
  green,
  grey,
  indigo,
  pink,
  red,
  yellow
} from '@material-ui/core/colors'

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
  pink400: pink[400],
  transparent: 'transparent',
  white: 'white',
  pink50: pink[50],
  indigo50: indigo[50],
  yellow100: yellow[100],
  yellow200: yellow[200],
  indigo500: indigo[500],
  indigo200: indigo[200],
  indigo300: indigo[300],
  indigo400: indigo[400],
  enSocialBackground: indigo[500],
  jpSocialBackground: grey[300]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
