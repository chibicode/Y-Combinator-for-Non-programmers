import styled from '@emotion/styled'
import { maxWidths, spaces, colors } from 'src/lib/theme'

export const Hr = styled.hr`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid ${colors('white')};
  margin: ${spaces(2)} auto ${spaces(2)};
  max-width: ${maxWidths('xxxs')};
`
