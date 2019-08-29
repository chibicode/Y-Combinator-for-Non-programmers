import {
  blue,
  deepOrange,
  grey,
  indigo,
  pink,
  purple,
  green,
  yellow,
  brown
} from '@material-ui/core/colors'
import Color from 'color'

// https://material.io/design/color/the-color-system.html
export const allColors = {
  secretCode: '#3B88C3',
  grey100: grey[100],
  grey300: grey[300],
  grey500: grey[500],
  grey600: grey[600],
  grey700: grey[700],
  grey800: grey[800],
  grey900: grey[900],
  purple50: purple[50],
  purple100: purple[100],
  purple300: purple[300],
  purple700: purple[700],
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo200: indigo[200],
  indigo300: indigo[300],
  indigo400MixYellow: Color(indigo[400])
    .mix(Color(yellow[100]), 0.25)
    .hsl()
    .string(),
  grey50033: Color(grey[500])
    .alpha(0.33)
    .hsl()
    .string(),
  indigo30090: Color(indigo[300])
    .alpha(0.9)
    .hsl()
    .string(),
  indigo400: indigo[400],
  indigo500: indigo[500],
  brown50: brown[50],
  brown400: brown[400],
  pink50: pink[50],
  pink100: pink[100],
  pink400: pink[400],
  pink500: pink[500],
  pink600: pink[600],
  transparent: 'transparent',
  white: 'white',
  white66: Color('#fff')
    .alpha(0.66)
    .hsl()
    .string(),
  green50: green[50],
  green300: green[300],
  green400: green[400],
  green600: green[600],
  blue50: blue[50],
  blue100: blue[100],
  blue400: blue[400],
  blue600: blue[600],
  yellow100: yellow[100],
  yellow400: yellow[400],
  yellow900: yellow[900],
  deepOrange50: deepOrange[50],
  deepOrange400: deepOrange[400],
  deepOrange600: deepOrange[600],
  deepOrange800: deepOrange[800]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
