/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ns, spaces } from 'src/lib/theme'

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

export const PFullWidth = (props: JSX.IntrinsicElements['p']) => (
  <p
    {...props}
    css={[
      css`
        margin: 0 ${spaces('-1')} ${spaces(1)};

        ${ns} {
          margin: 0 ${spaces('-2')} ${spaces(1)};
        }
      `
    ]}
  />
)
