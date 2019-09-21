import styled from '@emotion/styled'
import { colors, fontSizes, spaces, ns } from 'src/lib/theme'

export const H3 = styled.h3`
  color: ${colors('grey900')};
  margin: 0 0 ${spaces(1)};
  font-size: ${fontSizes(1.2)};

  ${ns} {
    font-size: ${fontSizes(1.4)};
  }
`
