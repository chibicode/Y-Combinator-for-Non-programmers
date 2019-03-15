import {
  blue,
  deepOrange,
  grey,
  indigo,
  orange,
  pink,
  green,
  yellow
} from '@material-ui/core/colors'
import Color from 'color'

// https://material.io/design/color/the-color-system.html
export const allColors = {
  socialBackground: indigo[500],
  grey100: grey[100],
  grey200: grey[200],
  grey300: grey[300],
  grey400: grey[400],
  grey500: grey[500],
  grey700: grey[700],
  grey800: grey[800],
  grey900: grey[900],
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo200: indigo[200],
  indigo300: indigo[300],
  indigo400: indigo[400],
  indigo500: indigo[500],
  pink50: pink[50],
  pink300: pink[300],
  pink400: pink[400],
  pink500: pink[500],
  pink600: pink[600],
  pink700: pink[700],
  transparent: 'transparent',
  white: 'white',
  white66: Color('#fff')
    .alpha(0.66)
    .hsl()
    .string(),
  green50: green[50],
  green100: green[100],
  green600: green[600],
  green800: green[800],
  blue50: blue[50],
  blue600: blue[600],
  blue800: blue[800],
  yellow50: yellow[50],
  yellow100: yellow[100],
  yellow200: yellow[200],
  yellow600: yellow[600],
  yellow900: yellow[900],
  deepOrange50: deepOrange[50],
  deepOrange600: deepOrange[600],
  deepOrange900: deepOrange[900],
  orange900: orange[900]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
