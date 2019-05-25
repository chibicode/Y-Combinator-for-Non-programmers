/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, fontSizes, spaces } from 'src/lib/theme'

const ExpressionRunnerCaptionWrapper = (
  props: JSX.IntrinsicElements['div']
) => (
  <div
    css={css`
      text-align: center;
      margin: ${spaces('-0.75')} -2px ${spaces(0.5)} -2px;
      font-size: ${fontSizes(0.85)};
      color: ${colors('indigo400')};
    `}
    {...props}
  />
)

export default ExpressionRunnerCaptionWrapper
