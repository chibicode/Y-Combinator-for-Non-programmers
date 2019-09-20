/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces, fitWithinMobileWidth } from 'src/lib/theme'

const ExpressionRunnerCaptionOnly = (props: JSX.IntrinsicElements['div']) => (
  <div
    css={[
      css`
        text-align: center;
        color: ${colors('indigo500')};
        margin: ${spaces(2.25)} auto ${spaces(2.5)};
        max-width: ${fitWithinMobileWidth};
      `
    ]}
    {...props}
  />
)

export default ExpressionRunnerCaptionOnly
