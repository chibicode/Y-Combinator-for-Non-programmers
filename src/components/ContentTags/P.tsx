/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'

export const P = (props: JSX.IntrinsicElements['p']) => (
  <p
    {...props}
    css={[
      css`
        margin: 0 0 ${spaces(1)};
      `
    ]}
  />
)
