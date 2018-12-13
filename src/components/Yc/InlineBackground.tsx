import { css, cx } from 'emotion'
import React from 'react'
import crossDarkSvg from 'src/images/cross-dark.url.svg'
import { colors } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'

interface InlineBackgroundProps {
  bgColor?: keyof typeof allColors
  bgPattern?: 'cross'
  size: 'md' | 'mdlg'
}

const bgPatternToSvg = (
  pattern: InlineBackgroundProps['bgPattern']
): string => {
  switch (pattern) {
    case 'cross': {
      return crossDarkSvg
    }
  }
  throw new Error()
}

const InlineBackground: React.FunctionComponent<InlineBackgroundProps> & {
  defaultProps: Partial<InlineBackgroundProps>
} = ({ bgColor, bgPattern, size }) => (
  <span
    className={cx(
      css`
        display: inline-block;
        padding: ${size === 'mdlg' ? '0.6em' : '0.5em'};
        border: 2px solid ${colors('indigo300')};
        vertical-align: text-bottom;
      `,
      bgColor &&
        css`
          background-color: ${colors(bgColor)};
        `,
      bgPattern &&
        css`
          background-image: url(${bgPatternToSvg(bgPattern)});
          background-size: 1.5em 1.5em;
          background-position: center center;
        `
    )}
  />
)

InlineBackground.defaultProps = {
  size: 'md'
}

export default InlineBackground
