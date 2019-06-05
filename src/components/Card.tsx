/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import locale from 'src/lib/locale'
import { colors, fontSizes, ns, radii, spaces } from 'src/lib/theme'
import { H3 } from 'src/components/ContentTags'
import { CardAction } from 'src/components/CardWrapper'
import CardContent, { CardContentProps } from 'src/components/CardContent'

interface CardColorContextProps {
  color: CardProps['color']
}

const cardColorContextDefault: CardColorContextProps = {
  color: 'grey'
}

export const CardColorContext = React.createContext<CardColorContextProps>(
  cardColorContextDefault
)

export interface CardProps {
  children: React.ReactNode
  color:
    | 'grey'
    | 'orange'
    | 'yellow'
    | 'purple'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'white'
    | 'pink'
    | 'transparent'
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  title?: React.ReactNode
  preview?: CardContentProps['preview']
  cardActionTaken: CardAction
  header?: React.ReactNode
  footer?: {
    content: React.ReactNode
    color?: CardProps['color']
  }
}

export interface CardState {
  overrideColor?: CardProps['color']
}

export const backgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('green50'),
    grey: colors('grey150'),
    white: colors('white'),
    orange: colors('deepOrange50'),
    yellow: colors('yellow100'),
    purple: colors('purple50'),
    blue: colors('blue50'),
    indigo: colors('indigo50'),
    pink: colors('pink50'),
    transparent: 'transparent'
  }[color])

// First where the text is white
const slideLabelBgColor = (color: CardProps['color']) =>
  ({
    green: colors('green600'),
    grey: colors('grey600'),
    white: colors('grey600'),
    orange: colors('deepOrange600'),
    yellow: colors('yellow900'),
    purple: colors('purple300'),
    blue: colors('blue600'),
    indigo: colors('indigo300'),
    pink: colors('pink400'),
    transparent: 'transparent'
  }[color])

const Card = ({
  title,
  color,
  children,
  preview,
  slideNumber,
  slideCount,
  isLast,
  footer,
  header
}: CardProps) => (
  <CardColorContext.Provider value={{ color }}>
    <div
      css={css`
        position: relative;
      `}
    >
      {header}
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
          margin-bottom: ${slideNumber === undefined ? spaces(1.5) : 0};
        `}
      >
        <div
          css={[
            css`
              padding-top: ${spaces(1)};
              padding-left: ${spaces(0.75)};
              padding-right: ${spaces(0.75)};
              padding-bottom: ${spaces(0.5)};

              ${ns} {
                padding-top: ${spaces(1.5)};
                padding-left: ${spaces(2)};
                padding-right: ${spaces(2)};
                padding-bottom: ${spaces(1)};
              }
              border-top-right-radius: ${radii(0.5)};
              border-top-left-radius: ${radii(0.5)};
              border-bottom-right-radius: ${footer ? 0 : radii(0.5)};
              border-bottom-left-radius: ${footer ? 0 : radii(0.5)};
              background: ${backgroundColor(color)};
            `,
            color === 'transparent' &&
              css`
                border: 2px solid ${colors('grey150')};
                color: ${colors('grey600')};
                padding-bottom: 0;
                ${ns} {
                  padding-bottom: 0;
                }
              `
          ]}
        >
          {title && (
            <H3
              css={css`
                text-align: center;
                margin-left: ${spaces('-0.25')};
                margin-right: ${spaces('-0.25')};
              `}
            >
              {title}
            </H3>
          )}
          <CardContent preview={preview}>{children}</CardContent>
        </div>
        {footer && (
          <div
            css={css`
              margin-top: ${spaces('-0.5')};
              padding-top: ${spaces(0.75)};
              padding-left: ${spaces(1)};
              padding-right: ${spaces(1)};
              padding-bottom: ${spaces(0.5)};

              ${ns} {
                margin-top: ${spaces('-0.75')};
                padding-top: ${spaces(1.25)};
                padding-left: ${spaces(2)};
                padding-right: ${spaces(2)};
                padding-bottom: ${spaces(1)};
              }
              background: ${backgroundColor(footer.color || 'purple')};
              border-bottom-right-radius: ${radii(0.5)};
              border-bottom-left-radius: ${radii(0.5)};
            `}
          >
            {footer.content}
          </div>
        )}
      </div>
    </div>
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
  </CardColorContext.Provider>
)

Card.defaultProps = {
  color: 'grey',
  cardActionTaken: 'default'
}

export default Card
