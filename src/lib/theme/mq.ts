import { css } from 'emotion'

export const ns = (cls: string) => css`
  @media (min-width: 768px) {
    ${cls};
  }
`
