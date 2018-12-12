import { css, cx } from 'emotion'
import React from 'react'
import { H3 } from 'src/components/ContentTags'
import SectionContext from 'src/components/SectionContext'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

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
    pink: colors('pink5050'),
    yellow: colors('yellow50')
  }[color])

const emBackgroundColor = (color: SideNoteProps['color']) =>
  ({
    indigo: colors('white66'),
    pink: colors('white'),
    yellow: colors('yellow200')
  }[color])

const SideNoteSection: React.FunctionComponent<SideNoteProps> = ({
  children,
  heading,
  headingNoMarginBottom,
  noPaddingBottom,
  color
}) => (
  <SectionContext.Provider
    value={{ emBackgroundColor: emBackgroundColor(color) }}
  >
    <div
      className={cx(
        css`
          padding-top: ${spaces(0.75)};
          padding-left: ${spaces(1)};
          padding-right: ${spaces(1)};
          border: 1px solid ${borderColor(color)};
          background: ${backgroundColor(color)};
          margin: 1.5rem 0;
          border-radius: ${radii(0.25)};
          font-size: ${fontSizes(0.85)};
        `,
        {
          [css`
            padding-bottom: ${spaces(0.75)};
          `]: !noPaddingBottom
        }
      )}
    >
      {heading && (
        <H3
          className={css`
            text-align: center;
            margin: 0 0 ${headingNoMarginBottom ? 0 : spaces(1)};
          `}
        >
          {heading}
        </H3>
      )}
      {children}
    </div>
  </SectionContext.Provider>
)

export default SideNoteSection
