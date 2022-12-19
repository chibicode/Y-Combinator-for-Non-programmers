/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { colors, fontSizes, spaces } from 'src/lib/theme'

const ExpressionRunnerCaptionWrapper = (
  props: JSX.IntrinsicElements['div']
) => (
  <div
    css={css`
      text-align: center;
      font-size: ${fontSizes(0.85)};
      color: ${colors('indigo500')};
      margin: ${spaces('-0.75')} -2px ${spaces(0.5)} -2px;
    `}
    {...props}
  />
)

export default ExpressionRunnerCaptionWrapper
