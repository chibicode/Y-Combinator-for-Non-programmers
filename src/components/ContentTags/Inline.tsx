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
    .mix(Color(backgroundColor(color)), 0.33)
    .hsl()
    .string()

export const Strong = ({
  children
}: {
  children: React.ReactNode
  pinkHighlight?: boolean
}) => {
  const { inHighlight } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  if (inHighlight) {
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
              background: ${color === 'yellow'
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

export const Em = ({
  children
}: {
  children: React.ReactNode
  pinkHighlight?: boolean
}) => {
  const { inHighlight } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  if (inHighlight) {
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
              background: ${color === 'yellow'
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
