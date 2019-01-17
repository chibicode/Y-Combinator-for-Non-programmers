import React from 'react'
import { CardProps } from 'src/components/Card'

export interface CardContextProps {
  emBackgroundColor?: string
  emForegroundColor?: string
  updateColor?: (color: CardProps['color']) => void
}

export const cardContextDefault: CardContextProps = {
  updateColor: () => undefined
}

export default React.createContext<CardContextProps>(cardContextDefault)
