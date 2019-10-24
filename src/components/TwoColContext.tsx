import React from 'react'

export interface TwoColContextProps {
  maxVariableSize?: 'sm' | 'md'
  forceVariableSize?: 'xs' | 'sm' | 'md'
  leftVerticalIndent?: true
}

export const twoColContext: TwoColContextProps = {}

export default React.createContext<TwoColContextProps>(twoColContext)
