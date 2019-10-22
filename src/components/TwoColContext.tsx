import React from 'react'

export interface TwoColContextProps {
  maxVariableSize?: 'sm' | 'md'
}

export const twoColContext: TwoColContextProps = {}

export default React.createContext<TwoColContextProps>(twoColContext)
