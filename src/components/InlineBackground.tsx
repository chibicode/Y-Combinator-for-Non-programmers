/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { colors } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'

interface InlineBackgroundProps {
  bgColor: keyof typeof allColors
  size: 'md' | 'mdlg'
}

const InlineBackground = ({ bgColor, size }: InlineBackgroundProps) => (
  <span
    css={[
      css`
        display: inline-block;
        padding: ${size === 'mdlg' ? '0.6em' : '0.55em'};
        border: 2px solid ${colors('indigo300')};
        vertical-align: text-bottom;
        background-color: ${colors(bgColor)};
      `
    ]}
  />
)

InlineBackground.defaultProps = {
  size: 'md'
}

export default InlineBackground
