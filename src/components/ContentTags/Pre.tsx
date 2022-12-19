import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors, fontSizes, spaces, lineHeights } from 'src/lib/theme'

const PreInner = styled.pre`
  margin: 0 auto ${spaces(1)};
  line-height: ${lineHeights(1.3)};
  padding: ${spaces(0.5)};
  background: ${colors('white')};
  font-size: ${fontSizes(0.7)};
  letter-spacing: -0.075em;
  max-width: 100%;
  overflow-x: auto;
`

export const Pre = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      margin: ${spaces(1.75)} 0;
      display: flex;
      align-items: center;
    `}
  >
    <PreInner>{children}</PreInner>
  </div>
)

export const Code = styled.code`
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  background: ${colors('white')};
  font-weight: bold;
`

export const CenteredCode = ({
  size,
  children,
  python
}: {
  size: 'md' | 'sm'
  children: React.ReactNode
  python?: true
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
        background: ${python ? colors('green800') : colors('white')};
        color: ${python ? colors('white') : 'inherit'};
      `}
    >
      {children}
    </Code>
  </div>
)
