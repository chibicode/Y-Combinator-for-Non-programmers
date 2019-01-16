/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import locale from 'src/lib/locale'
import { colors, fontSizes, ns, radii, spaces } from 'src/lib/theme'

export interface CardProps {
  children: React.ReactNode
  color: 'white' | 'pink' | 'yellow' | 'indigo'
  slideNumber?: number
  slideCount?: number
}

const backgroundColor = (color: CardProps['color']) =>
  ({
    white: colors('white'),
    pink: colors('pink5050'),
    yellow: colors('yellow50'),
    indigo: colors('indigo50')
  }[color])

const slideLabelBgColor = (color: CardProps['color']) =>
  ({
    white: colors('indigo500'),
    pink: colors('pink5050'),
    yellow: colors('yellow50'),
    indigo: colors('indigo500')
  }[color])

const emBackgroundColor = (color: CardProps['color']) =>
  ({
    white: colors('yellow100'),
    pink: colors('white'),
    yellow: colors('yellow200'),
    indigo: colors('white')
  }[color])

const Card = ({ children, color, slideNumber, slideCount }: CardProps) => (
  <>
    <SectionContext.Provider
      value={{ emBackgroundColor: emBackgroundColor(color) }}
    >
      <div
        css={css`
          padding-top: ${spaces(1)};
          padding-left: ${spaces(1)};
          padding-right: ${spaces(1)};
          padding-bottom: ${spaces(0.5)};

          ${ns} {
            padding-top: ${spaces(2)};
            padding-left: ${spaces(2)};
            padding-right: ${spaces(2)};
            padding-bottom: ${spaces(1.5)};
          }
          position: relative;
          background: ${backgroundColor(color)};
          border-radius: ${radii(0.5)};
          margin-bottom: ${slideNumber === undefined ? spaces(1.5) : 0};
        `}
      >
        {slideNumber && slideCount && (
          <div
            css={css`
              position: absolute;
              bottom: -0.5rem;
              right: 1rem;
              font-size: ${fontSizes(0.75)};
              line-height: 1;
              color: ${colors('white')};
              background: ${slideLabelBgColor(color)};
              padding: ${spaces(0.25)} ${spaces(0.5)};
              border-radius: 9999px;
            `}
          >
            <>
              {slideNumber === 1 && (
                <>{locale === 'jp' ? 'スライド' : 'Slide'} </>
              )}
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                {slideNumber}
              </span>{' '}
              <span
                css={css`
                  color: ${colors('white66')};
                `}
              >
                / {slideCount}
              </span>
            </>
          </div>
        )}
        {children}
      </div>
    </SectionContext.Provider>
    {slideNumber !== slideCount && (
      <div
        css={css`
          width: 1.25rem;
          height: 2rem;
          margin: 0 auto;
          background: ${colors('indigo200')};
        `}
      />
    )}
  </>
)

Card.defaultProps = {
  color: 'white'
}

export default Card
