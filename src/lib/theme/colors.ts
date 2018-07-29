import {
  blue,
  brown,
  green,
  grey,
  orange,
  purple,
  red,
  yellow
} from '@material-ui/core/colors'
import Color from 'color'

const toGrey = colorString =>
  Color(colorString)
    .desaturate(0.8)
    .lighten(0.05)
    .string()

const colors = {
  black: grey[800],
  lightYellow: toGrey(yellow[100]),
  darkYellow: toGrey(yellow[400]),
  lightBrown: brown[100],
  lightGray: grey[300],
  lightRed: red[100],
  lightGreen: green[100],
  lightBlue: blue[100],
  lightOrange: orange[100],
  lightPurple: purple[100]
}

export default colors
