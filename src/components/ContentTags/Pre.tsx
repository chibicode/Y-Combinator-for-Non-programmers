/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fontSizes, radii, spaces, lineHeights } from 'src/lib/theme'

export const Pre = styled.pre`
  margin: 0 0 ${spaces(1)};
  line-height: ${lineHeights(1.3)};
  padding: ${spaces(0.5)} ${spaces(0.75)};
  background: ${colors('white')};
  border-radius: ${radii(0.5)};
`

export const Code = styled.code`
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
`

export const CenteredCode = ({
  size,
  children
}: {
  size: 'md' | 'sm'
  children: React.ReactNode
}) => (
  <div
    css={css`
      text-align: center;
      font-size: ${fontSizes(size === 'md' ? 1.6 : 1.2)};
      letter-spacing: -0.075em;
      margin: ${spaces(1.75)} 0;
    `}
  >
    <Code
      css={css`
        padding: ${spaces(0.25)};
        background: ${colors('white')};
      `}
    >
      {children}
    </Code>
  </div>
)
