import styled from '@emotion/styled'
import { colors, fontWeights, fontSizes, spaces, ns } from 'src/lib/theme'

export const H3 = styled.h3`
  color: ${colors('grey900')};
  margin: 0 0 ${spaces(0.75)};
  font-size: ${fontSizes(1.25)};
  font-weight: ${fontWeights(800)};

  ${ns} {
    font-size: ${fontSizes(1.5)};
  }
`
