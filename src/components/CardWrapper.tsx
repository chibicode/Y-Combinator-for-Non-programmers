import React, { useState } from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import { EpisodeCardType } from 'src/components/EpisodeCardList'
import h from 'src/lib/h'
import CardActionContext from 'src/components/CardActionContext'

interface CardWrapperProps {
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  children: React.ReactNode
  type?: EpisodeCardType['type']
  setLastVisibleCardIndex: () => void
}

export type CardAction = 'default' | 'yesSelected' | 'noSelected' | 'skipped'

export type CardActionResult = 'default' | 'correct' | 'incorrect'

const cardActionToColor = (
  cardAction: CardAction
): CardProps['color'] | undefined =>
  ({
    default: undefined,
    yesSelected: 'green' as 'green',
    noSelected: 'orange' as 'orange',
    skipped: undefined
  }[cardAction])

const typeToColor = (type: EpisodeCardType['type']): CardProps['color'] =>
  type
    ? {
        yesNoQuiz: 'blue' as 'blue'
      }[type]
    : 'white'

const hasFooterButton = (type: EpisodeCardType['type']) => type === 'yesNoQuiz'

const FooterButtonContent = ({ type }: { type: EpisodeCardType['type'] }) =>
  type === 'yesNoQuiz' ? <>{h('yesNoQuizSeeAnswer')}</> : null

const CardWrapper = ({
  slideNumber,
  slideCount,
  isLast,
  children,
  type,
  setLastVisibleCardIndex
}: CardWrapperProps) => {
  const [cardActionTaken, setCardActionTaken] = useState<CardAction>('default')
  const [cardActionResult, setCardActionResult] = useState<CardActionResult>(
    'default'
  )
  const takeCardAction = (cardAction: CardAction) => {
    setCardActionTaken(cardAction)
    setLastVisibleCardIndex()
  }
  return (
    <CardActionContext.Provider
      value={{
        takeCardAction,
        cardActionTaken,
        setCardActionResult,
        cardActionResult
      }}
    >
      <Card
        {...{ slideNumber, slideCount, isLast, children, cardActionTaken }}
        color={cardActionToColor(cardActionTaken) || typeToColor(type)}
        footerButtonContent={
          hasFooterButton(type) && <FooterButtonContent type={type} />
        }
        footerButtonOnClick={() => takeCardAction('skipped')}
      />
    </CardActionContext.Provider>
  )
}

export default CardWrapper
