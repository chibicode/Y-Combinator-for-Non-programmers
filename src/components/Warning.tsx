/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ns, radii, colors, spaces } from 'src/lib/theme'

const Warning = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      padding: ${spaces(0.75)} ${spaces(1)};

      ${ns} {
        padding: ${spaces(1)} ${spaces(1.25)};
      }

      border-radius: ${radii(0.5)};
      background: ${colors('yellow100')};
    `}
  >
    {children}
  </div>
)

export default Warning
