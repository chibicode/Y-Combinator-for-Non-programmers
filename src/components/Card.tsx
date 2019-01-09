/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import { colors, radii, spaces } from 'src/lib/theme'

interface CardProps {
  children: React.ReactNode
  color: 'white' | 'pink' | 'yellow'
}

const backgroundColor = (color: CardProps['color']) =>
  ({
    white: colors('white'),
    pink: colors('pink5050'),
    yellow: colors('yellow50')
  }[color])

const emBackgroundColor = (color: CardProps['color']) =>
  ({
    white: colors('yellow100'),
    pink: colors('white'),
    yellow: colors('yellow200')
  }[color])

const Card: React.FC<CardProps> & {
  defaultProps: Partial<CardProps>
} = ({ children, color }) => (
  <>
    <SectionContext.Provider
      value={{ emBackgroundColor: emBackgroundColor(color) }}
    >
      <div
        css={css`
          padding-top: ${spaces(1.5)};
          padding-left: ${spaces(1)};
          padding-right: ${spaces(1)};
          padding-bottom: ${spaces(0.5)};
          background: ${backgroundColor(color)};
          border-radius: ${radii(0.5)};
        `}
      >
        {children}
      </div>
    </SectionContext.Provider>
    <div
      css={css`
        width: 1.25rem;
        height: 2rem;
        margin: 0 auto;
        background: ${colors('indigo100')};
      `}
    />
  </>
)

Card.defaultProps = {
  color: 'white'
}

export default Card
