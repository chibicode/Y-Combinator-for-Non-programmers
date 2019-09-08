/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces } from 'src/lib/theme'

const ExpressionRunnerCaptionOnly = (props: JSX.IntrinsicElements['div']) => (
  <div
    css={css`
      text-align: center;
      color: ${colors('indigo500')};
      margin: ${spaces(2.25)} 0 ${spaces(2.5)};
    `}
    {...props}
  />
)

export default ExpressionRunnerCaptionOnly
