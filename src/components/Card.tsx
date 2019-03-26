/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import CardThemeContext from 'src/components/CardThemeContext'
import locale from 'src/lib/locale'
import { colors, fontSizes, ns, radii, spaces } from 'src/lib/theme'
import { H3 } from 'src/components/ContentTags'
import { CardAction } from 'src/components/CardWrapper'
import CardContent from 'src/components/CardContent'
export const jsxBabelFix = jsx

export interface CardProps {
  children: React.ReactNode
  footerButtonContent?: React.ReactNode
  footerButtonOnClick?: () => void
  color: 'white' | 'orange' | 'yellow' | 'brown' | 'green' | 'blue'
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  title?: React.ReactNode
  preview?: React.ReactNode
  cardActionTaken: CardAction
}

export interface CardState {
  overrideColor?: CardProps['color']
}

const backgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('green50'),
    white: colors('grey100'),
    orange: colors('deepOrange50'),
    yellow: colors('yellow100'),
    brown: colors('brown50'),
    blue: colors('blue50')
  }[color])

const backgroundDarker1 = (color: CardProps['color']) => {
  if (color === 'blue') {
    return colors('blue100')
  } else {
    backgroundColor(color)
  }
}

const backgroundDarker2 = (color: CardProps['color']) => {
  if (color === 'blue') {
    return colors('blue200')
  } else {
    backgroundColor(color)
  }
}

// First where the text is white
const slideLabelBgColor = (color: CardProps['color']) =>
  ({
    green: colors('green600'),
    white: colors('grey600'),
    orange: colors('deepOrange600'),
    yellow: colors('yellow900'),
    brown: colors('brown300'),
    blue: colors('blue600')
  }[color])

const emBackgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('white'),
    white: colors('yellow100'),
    orange: colors('white'),
    yellow: colors('yellow200'),
    brown: colors('white'),
    blue: colors('white')
  }[color])

const Card = ({
  title,
  color,
  children,
  preview,
  slideNumber,
  slideCount,
  footerButtonContent,
  footerButtonOnClick,
  isLast
}: CardProps) => (
  <>
    <CardThemeContext.Provider
      value={{
        emBackgroundColor: emBackgroundColor(color)
      }}
    >
      <div
        css={css`
          position: relative;
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
        <div
          css={css`
            border-radius: ${radii(0.5)};
            overflow: hidden;
            margin-bottom: ${slideNumber === undefined ? spaces(1.5) : 0};
          `}
        >
          <div
            css={css`
              padding-top: ${spaces(1)};
              padding-left: ${spaces(1)};
              padding-right: ${spaces(1)};
              padding-bottom: ${footerButtonContent
                ? spaces(0.25)
                : spaces(0.5)};

              ${ns} {
                padding-top: ${spaces(1.5)};
                padding-left: ${spaces(2)};
                padding-right: ${spaces(2)};
                padding-bottom: ${footerButtonContent
                  ? spaces(0.5)
                  : spaces(1)};
              }
              background: ${backgroundColor(color)};
            `}
          >
            {title && (
              <H3
                css={css`
                  text-align: center;
                `}
              >
                {title}
              </H3>
            )}
            <CardContent preview={preview}>{children}</CardContent>
          </div>
          {footerButtonContent && (
            <button
              type="button"
              onClick={footerButtonOnClick}
              css={css`
                padding-top: ${spaces(1)};
                padding-left: ${spaces(1)};
                padding-right: ${spaces(1)};
                padding-bottom: ${spaces(1)};
                border: none;
                background: ${backgroundDarker1(color)};
                width: 100%;
                outline: 0;
                font-weight: bold;
                cursor: pointer;

                ${ns} {
                  padding-top: ${spaces(1)};
                  padding-left: ${spaces(2)};
                  padding-right: ${spaces(2)};
                  padding-bottom: ${spaces(1)};
                }

                &:hover {
                  background: ${backgroundDarker2(color)};
                }
              `}
            >
              {footerButtonContent}
            </button>
          )}
        </div>{' '}
      </div>
    </CardThemeContext.Provider>
    {!isLast && slideNumber !== undefined && (
      <div
        css={css`
          width: 1.25rem;
          height: 2rem;
          margin: 0 auto;
          background: ${colors('grey300')};
        `}
      />
    )}
  </>
)

Card.defaultProps = {
  color: 'white',
  cardActionTaken: 'default'
}

export default Card
