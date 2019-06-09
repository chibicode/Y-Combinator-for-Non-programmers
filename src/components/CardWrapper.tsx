import React, { useState } from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import { EpisodeCardType } from 'src/components/EpisodeCardList'
import CardActionContext from 'src/components/CardActionContext'
import useCardScroll from 'src/hooks/useCardScroll'

interface CardWrapperProps {
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  children: React.ReactNode
  preview?: CardProps['preview']
  type?: EpisodeCardType['type']
  title?: React.ReactNode
  footer?: CardProps['footer']
  setLastVisibleCardIndex: () => void
}

export type CardAction = 'default' | 'yesSelected' | 'noSelected'

export type CardActionResult = 'default' | 'correct' | 'incorrect'

const cardActionToColor = (
  cardActionResult: CardActionResult
): CardProps['color'] | undefined =>
  ({
    default: undefined,
    correct: 'green' as 'green',
    incorrect: 'orange' as 'orange'
  }[cardActionResult])

const typeToColor = (type: EpisodeCardType['type']): CardProps['color'] =>
  type
    ? {
        yesNoQuiz: 'blue' as 'blue',
        sideNote: 'purple' as 'purple',
        meta: 'indigo' as 'indigo',
        summary: 'pink' as 'pink',
        share: 'brown' as 'brown'
      }[type]
    : 'grey'

const CardWrapper = ({
  slideNumber,
  slideCount,
  isLast,
  children,
  preview,
  type,
  setLastVisibleCardIndex,
  title,
  footer
}: CardWrapperProps) => {
  const [cardActionTaken, setCardActionTaken] = useState<CardAction>('default')
  const [cardActionResult, setCardActionResult] = useState<CardActionResult>(
    'default'
  )
  const takeCardAction = (cardAction: CardAction) => {
    setCardActionTaken(cardAction)
    setLastVisibleCardIndex()
  }
  const domRef = useCardScroll<HTMLDivElement>(cardActionTaken)
  return (
    <CardActionContext.Provider
      value={{
        takeCardAction,
        cardActionTaken,
        setCardActionResult,
        cardActionResult
      }}
    >
      <div ref={domRef}>
        <Card
          {...{
            slideNumber,
            slideCount,
            isLast,
            preview,
            children,
            cardActionTaken,
            title,
            footer
          }}
          color={cardActionToColor(cardActionResult) || typeToColor(type)}
        />
      </div>
    </CardActionContext.Provider>
  )
}

export default CardWrapper
