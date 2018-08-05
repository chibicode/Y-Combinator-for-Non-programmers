import { Box as RebassBox } from 'rebass/emotion'
import sys from 'system-components/emotion'

const Box = sys(
  {
    is: RebassBox
  },
  'position',
  'minWidth',
  'borders',
  'borderColor',
  'borderRadius',
  'fontWeight',
  'height',
  'lineHeight'
)

export default Box
