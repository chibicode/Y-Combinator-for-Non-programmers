import React, { useState } from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import { EpisodeCardType } from 'src/components/EpisodeCardList'
import h from 'src/lib/h'
import CardActionContext from 'src/components/CardActionContext'
import useCardScroll from 'src/hooks/useCardScroll'

interface CardWrapperProps {
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  children: React.ReactNode
  preview?: React.ReactNode
  type?: EpisodeCardType['type']
  title?: React.ReactNode
  setLastVisibleCardIndex: () => void
}

export type CardAction = 'default' | 'yesSelected' | 'noSelected' | 'skipped'

export type CardActionResult = 'default' | 'correct' | 'incorrect'

const cardActionToColor = (
  cardAction: CardAction,
  cardActionResult: CardActionResult
): CardProps['color'] | undefined =>
  cardAction === 'skipped'
    ? 'green'
    : {
        default: undefined,
        correct: 'green' as 'green',
        incorrect: 'orange' as 'orange'
      }[cardActionResult]

const typeToColor = (type: EpisodeCardType['type']): CardProps['color'] =>
  type
    ? {
        yesNoQuiz: 'blue' as 'blue',
        sideNote: 'indigo' as 'indigo',
        warning: 'yellow' as 'yellow'
      }[type]
    : 'white'

const hasFooterButton = (
  type: EpisodeCardType['type'],
  cardActionTaken: CardAction
) => type === 'yesNoQuiz' && cardActionTaken === 'default'

const FooterButtonContent = ({ type }: { type: EpisodeCardType['type'] }) =>
  type === 'yesNoQuiz' ? <>{h('yesNoQuizSeeAnswer')}</> : null

const CardWrapper = ({
  slideNumber,
  slideCount,
  isLast,
  children,
  preview,
  type,
  setLastVisibleCardIndex,
  title
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
            title
          }}
          color={
            cardActionToColor(cardActionTaken, cardActionResult) ||
            typeToColor(type)
          }
          footerButtonContent={
            hasFooterButton(type, cardActionTaken) && (
              <FooterButtonContent type={type} />
            )
          }
          footerButtonOnClick={() => takeCardAction('skipped')}
        />
      </div>
    </CardActionContext.Provider>
  )
}

export default CardWrapper
