/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, fontSizes, spaces } from 'src/lib/theme'

const ExpressionRunnerCaptionWrapper = ({
  skipMargin,
  ...props
}: {
  skipMargin?: boolean
} & JSX.IntrinsicElements['div']) => (
  <div
    css={[
      css`
        text-align: center;
        font-size: ${fontSizes(0.85)};
        color: ${colors('indigo400')};
      `,
      skipMargin &&
        css`
          margin: ${spaces('-0.75')} -2px ${spaces(0.5)} -2px;
        `
    ]}
    {...props}
  />
)

export default ExpressionRunnerCaptionWrapper
