/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ns, radii, colors, spaces } from 'src/lib/theme'
import { CardColorContext } from 'src/components/Card'

export const alertSpacing = css`
  padding: ${spaces(0.75)} ${spaces(0.75)};
  margin-bottom: ${spaces(1.25)};
  margin-top: ${spaces(1.25)};

  ${ns} {
    padding: ${spaces(1)} ${spaces(1.25)};
  }
`

export interface AlertProps {
  children: React.ReactNode
  backgroundColor: 'yellow' | 'pink' | 'brown' | 'blue' | 'indigo'
}

const Alert = ({ children, backgroundColor }: AlertProps) => (
  <CardColorContext.Provider
    value={{ color: backgroundColor === 'yellow' ? 'white' : backgroundColor }}
  >
    <div
      css={[
        alertSpacing,
        css`
          border-radius: ${radii(0.5)};
          background: ${backgroundColor === 'yellow'
            ? colors('yellow100')
            : backgroundColor === 'brown'
            ? colors('brown50')
            : backgroundColor === 'blue'
            ? colors('blue50')
            : backgroundColor === 'indigo'
            ? colors('indigo50')
            : colors('pink50')};
        `
      ]}
    >
      {children}
    </div>
  </CardColorContext.Provider>
)

Alert.defaultProps = {
  backgroundColor: 'yellow'
}

export default Alert
