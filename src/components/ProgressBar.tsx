/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces, radii, maxWidths } from 'src/lib/theme'

const ProgressBar = ({ percent }: { percent: number }) => (
  <div
    css={css`
      border: 1px solid ${colors('indigo400')};
      height: ${spaces(0.25)};
      border-radius: ${radii(0.25)};
      background: ${colors('white')};
      margin: ${spaces(0.25)} auto ${spaces(1)};
      max-width: ${maxWidths('xxxs')};
    `}
  >
    <div
      css={css`
        height: 100%;
        width: ${percent}%;
        background: ${colors('indigo200')};
      `}
    />
  </div>
)

export default ProgressBar
