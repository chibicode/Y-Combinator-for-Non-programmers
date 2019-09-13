/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, fontSizes, spaces } from 'src/lib/theme'
import locale from 'src/lib/locale'

const ExpressionRunnerCaptionWrapper = ({
  t8d,
  ...props
}: JSX.IntrinsicElements['div'] & { t8d?: boolean }) => (
  <div
    css={[
      css`
        text-align: center;
        font-size: ${fontSizes(0.85)};
        color: ${colors('indigo500')};
        margin: ${spaces('-0.75')} -2px ${spaces(0.5)} -2px;
      `,
      !t8d &&
        locale === 'en' &&
        css`
          opacity: 0.1;
        `
    ]}
    {...props}
  />
)

export default ExpressionRunnerCaptionWrapper
