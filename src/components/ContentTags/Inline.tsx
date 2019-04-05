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

export type InlineHighlightType = 'default' | 'white' | 'none'

interface HighlightContextProps {
  inHighlight: boolean
}

const highlightContextDefault: HighlightContextProps = {
  inHighlight: false
}

const HighlightContext = React.createContext<HighlightContextProps>(
  highlightContextDefault
)

const mix = (color: CardProps['color'], base: string) =>
  Color(base)
    .mix(Color(backgroundColor(color)), 0.25)
    .hsl()
    .string()

export const InlineHeader = ({ children }: { children: React.ReactNode }) => (
  <span
    css={css`
      font-weight: bold;
    `}
  >
    {children}
  </span>
)

export const Strong = ({
  children,
  highlightType
}: {
  children: React.ReactNode
  highlightType?: InlineHighlightType
}) => {
  const { inHighlight } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  if (inHighlight || highlightType === 'none') {
    return (
      <span
        css={css`
          font-weight: bold;
        `}
      >
        {children}
      </span>
    )
  } else {
    return (
      <HighlightContext.Provider value={{ inHighlight: true }}>
        <span
          css={[
            css`
              font-weight: bold;
              background: ${highlightType === 'white'
                ? colors('white')
                : color === 'yellow'
                ? mix(color, colors('pink100'))
                : mix(color, colors('yellow100'))};
            `,
            inLink &&
              css`
                &:hover,
                &:active {
                  background: ${colors('indigo100')};
                }
              `
          ]}
        >
          {children}
        </span>
      </HighlightContext.Provider>
    )
  }
}

Strong.defaultProps = {
  highlightType: 'default'
}

export const Em = ({
  children,
  highlightType
}: {
  children: React.ReactNode
  highlightType?: InlineHighlightType
}) => {
  const { inHighlight } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  if (inHighlight || highlightType === 'none') {
    return (
      <span
        css={css`
          font-style: normal;
        `}
      >
        {children}
      </span>
    )
  } else {
    return (
      <HighlightContext.Provider value={{ inHighlight: true }}>
        <span
          css={[
            css`
              font-style: normal;
              background: ${highlightType === 'white'
                ? colors('white')
                : color === 'yellow'
                ? mix(color, colors('pink100'))
                : mix(color, colors('yellow100'))};
            `,
            inLink &&
              css`
                &:hover,
                &:active {
                  background: ${colors('pink100')};
                }
              `
          ]}
        >
          {children}
        </span>
      </HighlightContext.Provider>
    )
  }
}

Em.defaultProps = {
  highlightType: 'default'
}
