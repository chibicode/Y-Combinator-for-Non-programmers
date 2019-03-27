/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from 'react'
import { colors } from 'src/lib/theme'
import { CardColorContext } from 'src/components/Card'

interface HighlightContextProps {
  inHighlight: boolean
}

const highlightContextDefault: HighlightContextProps = {
  inHighlight: false
}

const HighlightContext = React.createContext<HighlightContextProps>(
  highlightContextDefault
)

export const Strong = ({
  children
}: {
  children: React.ReactNode
  pinkHighlight?: boolean
}) => {
  const { inHighlight } = useContext(HighlightContext)
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
          css={css`
            font-weight: bold;
            background: ${colors(
              color === 'yellow' ? 'pink10050' : 'yellow10050'
            )};
          `}
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
          css={css`
            font-style: normal;
            background: ${colors(
              color === 'yellow' ? 'pink10050' : 'yellow10050'
            )};
          `}
        >
          {children}
        </span>
      </HighlightContext.Provider>
    )
  }
}
