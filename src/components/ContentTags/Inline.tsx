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

export type InlineHighlightType =
  | 'default'
  | 'white'
  | 'none'
  | 'blue'
  | 'yellow'

interface HighlightContextProps {
  inHighlightType: InlineHighlightType
}

const highlightContextDefault: HighlightContextProps = {
  inHighlightType: 'none'
}

const HighlightContext = React.createContext<HighlightContextProps>(
  highlightContextDefault
)

const mix = (color: CardProps['color'], base: string) =>
  Color(base)
    .mix(Color(backgroundColor(color)), 0.4)
    .hsl()
    .string()

export const InlineHeader = (props: JSX.IntrinsicElements['span']) => (
  <span
    css={css`
      font-weight: bold;
    `}
    {...props}
  />
)

export const Strong = ({
  highlightType,
  ...props
}: {
  highlightType: InlineHighlightType
} & JSX.IntrinsicElements['span']) => {
  const { inHighlightType } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
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
              background: ${highlightType === 'yellow'
                ? colors('yellow100')
                : highlightType === 'blue'
                ? mix(color, colors('blue50'))
                : highlightType === 'white'
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
          {...props}
        >
          {props.children}
        </span>
      </HighlightContext.Provider>
    )
  }
}

Strong.defaultProps = {
  highlightType: 'default'
}

export const Em = ({
  highlightType,
  ...props
}: {
  highlightType: InlineHighlightType
} & JSX.IntrinsicElements['span']) => {
  const { inHighlightType } = useContext(HighlightContext)
  const { inLink } = useContext(LinkContext)
  const { color } = useContext(CardColorContext)
  if (inHighlightType === 'white' || highlightType === 'none') {
    return (
      <span
        css={css`
          font-style: normal;
        `}
        {...props}
      />
    )
  } else {
    return (
      <HighlightContext.Provider value={{ inHighlightType: highlightType }}>
        <span
          css={[
            css`
              font-style: normal;
              background: ${highlightType === 'yellow'
                ? colors('yellow100')
                : highlightType === 'blue'
                ? mix(color, colors('blue50'))
                : highlightType === 'white'
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
          {...props}
        />
      </HighlightContext.Provider>
    )
  }
}

Em.defaultProps = {
  highlightType: 'default'
}
