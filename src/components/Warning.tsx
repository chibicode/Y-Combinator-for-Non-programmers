/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ns, radii, colors, spaces } from 'src/lib/theme'

export const warningSpacing = css`
  padding: ${spaces(0.75)} ${spaces(0.75)};

  ${ns} {
    padding: ${spaces(1)} ${spaces(1.25)};
  }
`

const Warning = ({ children }: { children: React.ReactNode }) => (
  <div
    css={[
      warningSpacing,
      css`
        border-radius: ${radii(0.5)};
        background: ${colors('yellow100')};
      `
    ]}
  >
    {children}
  </div>
)

export default Warning
