import styled from '@emotion/styled'
import { colors, radii, fontSizes, spaces, lineHeights } from 'src/lib/theme'

export const Pre = styled.pre`
  margin: 0 0 ${spaces(1)};
  line-height: ${lineHeights(1.3)};
  padding: ${spaces(0.5)} ${spaces(0.75)};
  background: ${colors('white66')};
  border-radius: ${radii(0.5)};
`

export const Code = styled.code`
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  font-size: ${fontSizes(0.7)};
`
