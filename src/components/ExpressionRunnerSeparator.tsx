/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'
import { P } from 'src/components/ContentTags'

const ExpressionRunnerSeparator = () => (
  <P
    css={css`
      text-align: center;
      margin: ${spaces('-1.25')} 0 ${spaces('-1')};
    `}
  >
    <Emoji size="mdlg">⬇️</Emoji>
  </P>
)

export default ExpressionRunnerSeparator
