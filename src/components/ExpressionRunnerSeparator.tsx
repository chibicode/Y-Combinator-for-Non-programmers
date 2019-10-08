/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import CustomEmoji from 'src/components/CustomEmoji'

const ExpressionRunnerSeparator = ({ blank }: { blank?: boolean }) => (
  <div
    css={css`
      text-align: center;
      margin: ${spaces('-1.25')} 0 ${spaces('-1')};
    `}
  >
    {!blank && <CustomEmoji type="singleArrowDown" size="mdlg" />}
  </div>
)

export default ExpressionRunnerSeparator
