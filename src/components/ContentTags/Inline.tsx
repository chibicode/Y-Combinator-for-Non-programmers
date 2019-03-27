import styled from '@emotion/styled'
import { colors } from 'src/lib/theme'

export const Strong = styled.strong`
  font-weight: bold;
`

// Use span to allow nesting
export const Em = styled.span`
  background: ${colors('yellow50')};
`
