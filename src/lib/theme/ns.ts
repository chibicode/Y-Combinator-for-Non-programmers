import { css } from 'emotion'

export const NOT_SMALL = '48em'

const ns = (cls: string) => css`
  @media screen and (min-width: ${NOT_SMALL}) {
    ${cls};
  }
`

export default ns
