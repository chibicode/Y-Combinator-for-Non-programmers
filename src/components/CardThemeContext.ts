import React from 'react'

export interface CardThemeContextProps {
  emBackgroundColor?: string
  emForegroundColor?: string
}

export const cardContextDefault: CardThemeContextProps = {}

export default React.createContext<CardThemeContextProps>(cardContextDefault)
