/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'

const ExpressionRunnerSeparator = () => (
  <div
    css={css`
      text-align: center;
      margin: ${spaces('-1.25')} 0 ${spaces('-1')};
    `}
  >
    <Emoji size="mdlg">⬇️</Emoji>
  </div>
)

export default ExpressionRunnerSeparator
