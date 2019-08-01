import React from 'react'

export interface BubbleQuoteContextProps {
  inQuote?: boolean
}

export const bubbleQuoteContextDefault: BubbleQuoteContextProps = {}

export default React.createContext<BubbleQuoteContextProps>(
  bubbleQuoteContextDefault
)
