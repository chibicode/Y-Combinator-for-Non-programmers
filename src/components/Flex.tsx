import { Flex as RebassFlex } from 'rebass/emotion'
import sys from 'system-components/emotion'

const Flex = sys(
  {
    is: RebassFlex
  },
  'borders',
  'borderColor',
  'borderRadius'
)

export default Flex
