/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import locale from 'src/lib/locale'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

export interface CardProps {
  children: React.ReactNode
  color: 'white' | 'pink' | 'yellow'
  slideNumber?: number
  slideCount?: number
}

const backgroundColor = (color: CardProps['color']) =>
  ({
    white: colors('white'),
    pink: colors('pink5050'),
    yellow: colors('yellow50')
  }[color])

const slideLabelColor = (color: CardProps['color']) =>
  ({
    white: colors('grey100'),
    pink: colors('pink5050'),
    yellow: colors('yellow50')
  }[color])

const emBackgroundColor = (color: CardProps['color']) =>
  ({
    white: colors('yellow100'),
    pink: colors('white'),
    yellow: colors('yellow200')
  }[color])

const Card = ({ children, color, slideNumber, slideCount }: CardProps) => (
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
          position: relative;
          background: ${backgroundColor(color)};
          border-radius: ${radii(0.5)};
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
              background: ${slideLabelColor(color)};
              padding: ${spaces(0.25)} ${spaces(0.5)};
              border-radius: 9999px;
            `}
          >
            <>
              {slideNumber === 1 && (
                <>
                  <span
                    css={css`
                      opacity: 0.5;
                    `}
                  >
                    {locale === 'jp' ? 'スライド' : 'Slide'}
                  </span>{' '}
                </>
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
                  opacity: 0.5;
                `}
              >
                /
              </span>{' '}
              {slideCount}
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
          background: ${colors('indigo100')};
        `}
      />
    )}
  </>
)

Card.defaultProps = {
  color: 'white'
}

export default Card
