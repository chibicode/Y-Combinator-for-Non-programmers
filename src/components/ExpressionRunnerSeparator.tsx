/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import CustomEmoji from 'src/components/CustomEmoji'

const ExpressionRunnerSeparator = ({
  blank,
  halfMargin
}: {
  blank?: boolean
  halfMargin?: boolean
}) => (
  <div
    css={css`
      text-align: center;
      margin: ${halfMargin ? spaces('-0.25') : spaces('-1.25')} 0
        ${halfMargin ? spaces('-0.5') : spaces('-1')};
    `}
  >
    {!blank && <CustomEmoji type="singleArrowDown" size="mdlg" />}
  </div>
)

export default ExpressionRunnerSeparator
