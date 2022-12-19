import { css } from '@emotion/react'
import { spaces } from 'src/lib/theme'
import CustomEmoji from 'src/components/CustomEmoji'

const ExpressionRunnerSeparator = ({
  blank,
  halfMargin,
  halfMarginBottom,
  halfMarginTop
}: {
  blank?: boolean
  halfMargin?: boolean
  halfMarginBottom?: boolean
  halfMarginTop?: boolean
}) => (
  <div
    css={css`
      text-align: center;
      margin: ${halfMargin || halfMarginTop ? spaces('-0.25') : spaces('-1.25')}
        0 ${halfMargin || halfMarginBottom ? spaces('-0.5') : spaces('-1')};
    `}
  >
    {!blank && <CustomEmoji type="singleArrowDown" size="mdlg" />}
  </div>
)

export default ExpressionRunnerSeparator
