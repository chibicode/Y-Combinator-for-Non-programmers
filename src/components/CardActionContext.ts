import React from 'react'
import { CardAction, CardActionResult } from 'src/components/CardWrapper'

export interface CardActionContextProps {
  cardActionTaken: CardAction
  takeCardAction: (cardAction: CardAction) => void
  cardActionResult: CardActionResult
  setCardActionResult: (cardAction: CardActionResult) => void
}

export const cardActionContextDefault: CardActionContextProps = {
  takeCardAction: () => {},
  cardActionTaken: 'default',
  cardActionResult: 'default',
  setCardActionResult: () => {}
}

export default React.createContext<CardActionContextProps>(
  cardActionContextDefault
)
