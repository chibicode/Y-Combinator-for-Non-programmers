import React from 'react'

export interface TwoColContext {
  inTwoCol?: boolean
}

export const twoColContext: TwoColContext = {}

export default React.createContext<TwoColContext>(twoColContext)
