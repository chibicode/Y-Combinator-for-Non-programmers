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
  blue100: blue[100],
  enSocialBackground: indigo[500],
  green100: green[100],
  grey100: grey[100],
  grey200: grey[200],
  grey300: grey[300],
  grey400: grey[400],
  grey500: grey[500],
  grey800: grey[800],
  grey900: grey[900],
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo200: indigo[200],
  indigo300: indigo[300],
  indigo400: indigo[400],
  indigo500: indigo[500],
  jpSocialBackground: grey[300],
  pink50: pink[50],
  pink300: pink[300],
  pink400: pink[400],
  pink500: pink[500],
  pink700: pink[700],
  red100: red[100],
  red300: red[300], // Logo heart
  red500: red[500],
  transparent: 'transparent',
  white: 'white',
  yellow50: yellow[50],
  yellow100: yellow[100],
  yellow200: yellow[200],
  yellow700: yellow[700]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
