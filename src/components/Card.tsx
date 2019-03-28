/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import locale from 'src/lib/locale'
import { colors, fontSizes, ns, radii, spaces } from 'src/lib/theme'
import { H3 } from 'src/components/ContentTags'
import { CardAction } from 'src/components/CardWrapper'
import CardContent from 'src/components/CardContent'

interface CardColorContextProps {
  color: CardProps['color']
}

const cardColorContextDefault: CardColorContextProps = {
  color: 'white'
}

export const CardColorContext = React.createContext<CardColorContextProps>(
  cardColorContextDefault
)

export interface CardProps {
  children: React.ReactNode
  color: 'white' | 'orange' | 'yellow' | 'purple' | 'green' | 'blue'
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

export const backgroundColor = (color: CardProps['color']) =>
  ({
    green: colors('green50'),
    white: colors('grey150'),
    orange: colors('deepOrange50'),
    yellow: colors('yellow100'),
    purple: colors('purple50'),
    blue: colors('blue50')
  }[color])

// First where the text is white
const slideLabelBgColor = (color: CardProps['color']) =>
  ({
    green: colors('green600'),
    white: colors('grey600'),
    orange: colors('deepOrange600'),
    yellow: colors('yellow900'),
    purple: colors('purple300'),
    blue: colors('blue600')
  }[color])

const Card = ({
  title,
  color,
  children,
  preview,
  slideNumber,
  slideCount,
  isLast
}: CardProps) => (
  <CardColorContext.Provider value={{ color }}>
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
            padding-bottom: ${spaces(0.5)};

            ${ns} {
              padding-top: ${spaces(1.5)};
              padding-left: ${spaces(2)};
              padding-right: ${spaces(2)};
              padding-bottom: ${spaces(1)};
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
      </div>{' '}
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
  color: 'white',
  cardActionTaken: 'default'
}

export default Card
