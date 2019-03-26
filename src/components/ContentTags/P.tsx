import styled from '@emotion/styled'
import { ns, spaces } from 'src/lib/theme'

export const P = styled.p`
  margin: 0 0 ${spaces(1)};
`

export const PFullWidth = styled.p`
  margin: 0 ${spaces('-1')} ${spaces(1)};

  ${ns} {
    margin: 0 ${spaces('-2')} ${spaces(1)};
  }
`
