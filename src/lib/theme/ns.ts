import { css } from 'emotion'

const ns = (cls: string) => css`
  @media (min-width: 768px) {
    ${cls};
  }
`

export default ns
