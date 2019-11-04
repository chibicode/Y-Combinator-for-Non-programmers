/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ns, radii, colors, spaces } from 'src/lib/theme'

export const alertSpacing = css`
  padding: ${spaces(0.75)} ${spaces(0.75)};
  margin-bottom: ${spaces(1.25)};

  ${ns} {
    padding: ${spaces(1)} ${spaces(1.25)};
  }
`

const Alert = ({
  children,
  backgroundColor
}: {
  children: React.ReactNode
  backgroundColor: 'yellow' | 'red' | 'brown'
}) => (
  <div
    css={[
      alertSpacing,
      css`
        border-radius: ${radii(0.5)};
        background: ${backgroundColor === 'yellow'
          ? colors('yellow100')
          : backgroundColor === 'brown'
          ? colors('brown50')
          : colors('pink50')};
      `
    ]}
  >
    {children}
  </div>
)

Alert.defaultProps = {
  backgroundColor: 'yellow'
}

export default Alert
