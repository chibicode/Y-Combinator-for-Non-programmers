import styled from 'react-emotion'
import { Box } from 'rebass/emotion'
import sys from 'system-components/emotion'

const BoxWithBorder = sys(
  {
    is: Box
  },
  'borders',
  'borderColor'
)

const InlineBox = styled(BoxWithBorder)`
  display: inline-block;
`

export default InlineBox
