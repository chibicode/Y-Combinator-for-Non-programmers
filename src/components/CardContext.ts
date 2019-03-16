import React from 'react'

export interface CardContextProps {
  emBackgroundColor?: string
  emForegroundColor?: string
}

export const cardContextDefault: CardContextProps = {}

export default React.createContext<CardContextProps>(cardContextDefault)
