/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from 'react'
import { colors } from 'src/lib/theme'
import Color from 'color'
import {
  backgroundColor,
  CardColorContext,
  CardProps
} from 'src/components/Card'
import { LinkContext } from 'src/components/ContentTags/Links'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'

export type InlineHighlightType = 'white' | 'none' | 'blue' | 'pink'

interface HighlightContextProps {
  inHighlightType: InlineHighlightType
}

const highlightContextDefault: HighlightContextProps = {
  inHighlightType: 'none'
}

const HighlightContext = React.createContext<HighlightContextProps>(
  highlightContextDefault
)

const mix = (color: CardProps['color'] | 'white', base: string) =>
  Color(base)
    .mix(Color(backgroundColor(color)), 0.45)
    .hsl()
    .string()

export const Bold = (props: JSX.IntrinsicElements['span']) => (
  <span
    css={css`
      font-weight: bold;
    `}
    {...props}
  />
)

export const Italic = (props: JSX.IntrinsicElements['span']) => (
  <span
    css={css`
      font-style: italic;
    `}
    {...props}
  />
)

export const HighlightBold = ({
  highlightType,
  ...props
}: {
  highlightType: InlineHighlightType
} & JSX.IntrinsicElements['span']) => {
  const { inHighlightType } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  const { inQuote } = useContext(BubbleQuoteContext)

  const baseColor = inQuote ? 'white' : color
  if (inHighlightType === 'white' || highlightType === 'none') {
    return (
      <span
        css={css`
          font-weight: bold;
        `}
        {...props}
      >
        {props.children}
      </span>
    )
  } else {
    return (
      <HighlightContext.Provider value={{ inHighlightType: highlightType }}>
        <span
          css={[
            css`
              font-weight: bold;
              background: ${highlightType === 'blue'
                ? mix(baseColor, colors('blue50'))
                : highlightType === 'white'
                ? colors('white')
                : baseColor === 'yellow'
                ? mix(baseColor, colors('pink100'))
                : mix(baseColor, colors('yellow100'))};
            `,
            inLink &&
              css`
                &:hover,
                &:active {
                  background: ${colors('indigo100')};
                }
              `
          ]}
          {...props}
        >
          {props.children}
        </span>
      </HighlightContext.Provider>
    )
  }
}

HighlightBold.defaultProps = {
  highlightType: 'default'
}

export const Highlight = ({
  highlightType,
  ...props
}: {
  highlightType: InlineHighlightType
} & JSX.IntrinsicElements['span']) => {
  const { inHighlightType } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  const { inQuote } = useContext(BubbleQuoteContext)

  const baseColor = inQuote ? 'white' : color

  if (inHighlightType === 'white' || highlightType === 'none') {
    return <span {...props} />
  } else {
    return (
      <HighlightContext.Provider value={{ inHighlightType: highlightType }}>
        <span
          css={[
            css`
              background: ${highlightType === 'pink'
                ? colors('pink50')
                : highlightType === 'blue'
                ? mix(baseColor, colors('blue50'))
                : highlightType === 'white'
                ? colors('white')
                : baseColor === 'yellow'
                ? mix(baseColor, colors('pink100'))
                : mix(baseColor, colors('yellow100'))};
            `,
            inLink &&
              css`
                &:hover,
                &:active {
                  background: ${colors('pink100')};
                }
              `
          ]}
          {...props}
        />
      </HighlightContext.Provider>
    )
  }
}

Highlight.defaultProps = {
  highlightType: 'default'
}
