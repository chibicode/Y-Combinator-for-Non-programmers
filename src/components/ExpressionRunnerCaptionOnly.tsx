/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces } from 'src/lib/theme'
import locale from 'src/lib/locale'

const ExpressionRunnerCaptionOnly = ({
  t8d,
  ...props
}: JSX.IntrinsicElements['div'] & {
  t8d?: boolean
}) => (
  <div
    css={[
      css`
        text-align: center;
        color: ${colors('indigo500')};
        margin: ${spaces(2.25)} 0 ${spaces(2.5)};
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

export default ExpressionRunnerCaptionOnly
