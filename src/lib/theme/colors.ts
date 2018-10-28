import { grey, indigo, pink, yellow } from '@material-ui/core/colors'
import Color from 'color'

export const allColors = {
  enSocialBackground: indigo[500],
  grey200: grey[200],
  grey300: grey[300],
  grey500: grey[500],
  grey800: grey[800],
  grey900: grey[900],
  indigo50: indigo[50],
  indigo100: indigo[100],
  indigo200: indigo[200],
  indigo300: indigo[300],
  indigo500: indigo[500],
  jpSocialBackground: grey[300],
  pink50: pink[50],
  pink400: pink[400],
  pink500: pink[500],
  pink700: pink[700],
  transparent: 'transparent',
  white: 'white',
  white66: Color('#fff')
    .alpha(0.66)
    .hsl()
    .string(),
  yellow100: yellow[100],
  yellow200: yellow[200],
  yellow800: yellow[800]
}

const colors = (x: keyof typeof allColors) => allColors[x]

export default colors
