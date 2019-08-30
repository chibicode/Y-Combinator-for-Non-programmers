import styled from '@emotion/styled'
import { colors, spaces } from 'src/lib/theme'

export const Blockquote = styled.blockquote`
  border-left: ${spaces(0.25)} solid ${colors('grey100')};
  padding-left: ${spaces(0.5)};
  padding-right: 0;
  margin: 0 0 ${spaces(1)};
  color: ${colors('grey700')};
`
