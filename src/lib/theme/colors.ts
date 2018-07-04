import { brown, grey, yellow } from '@material-ui/core/colors'
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
  lightBrown: brown[100]
}

export default colors
