/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import CardThemeContext from 'src/components/CardThemeContext'
import { H3 } from 'src/components/ContentTags'
import { colors, radii, spaces } from 'src/lib/theme'
export const jsxBabelFix = jsx

interface SideNoteProps {
  heading?: React.ReactNode
  headingNoMarginBottom?: boolean
  noPaddingBottom?: boolean
  children: React.ReactNode
  color: 'indigo' | 'pink' | 'yellow'
}

const borderColor = (color: SideNoteProps['color']) =>
  ({
    indigo: colors('indigo300'),
    pink: colors('pink300'),
    yellow: colors('yellow600')
  }[color])

const backgroundColor = (color: SideNoteProps['color']) =>
  ({
    indigo: colors('indigo50'),
    pink: colors('pink50'),
    yellow: colors('yellow50')
  }[color])

const emBackgroundColor = (color: SideNoteProps['color']) =>
  ({
    indigo: colors('white66'),
    pink: colors('white'),
    yellow: colors('yellow200')
  }[color])

const SideNoteSection = ({
  children,
  heading,
  headingNoMarginBottom,
  noPaddingBottom,
  color
}: SideNoteProps) => (
  <CardThemeContext.Provider
    value={{ emBackgroundColor: emBackgroundColor(color) }}
  >
    <div
      css={[
        css`
          padding-top: ${spaces(0.75)};
          padding-left: ${spaces(1)};
          padding-right: ${spaces(1)};
          border: 1px solid ${borderColor(color)};
          background: ${backgroundColor(color)};
          margin: 1.5rem 0;
          border-radius: ${radii(0.25)};
        `,
        !noPaddingBottom &&
          css`
            padding-bottom: ${spaces(0.75)};
          `
      ]}
    >
      {heading && (
        <H3
          css={css`
            text-align: center;
            margin: 0 0 ${headingNoMarginBottom ? 0 : spaces(1)};
          `}
        >
          {heading}
        </H3>
      )}
      {children}
    </div>
  </CardThemeContext.Provider>
)

export default SideNoteSection
