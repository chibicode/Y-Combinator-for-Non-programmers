import { css } from 'emotion'

const ns = (cls: string) => css`
  @media screen and (min-width: 48em) {
    ${cls};
  }
`

export default ns
