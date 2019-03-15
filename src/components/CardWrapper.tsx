import React from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import { EpisodeCardType } from 'src/components/EpisodeCardList'
import h from 'src/lib/h'

interface CardWrapperProps {
  slideNumber?: number
  slideCount?: number
  isLast?: boolean
  children: React.ReactNode
  type?: EpisodeCardType['type']
  setLastVisibleCardIndex: () => void
}

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
}: CardWrapperProps) => (
  <Card
    {...{ slideNumber, slideCount, isLast, children }}
    color={typeToColor(type)}
    footerButtonContent={
      hasFooterButton(type) && <FooterButtonContent type={type} />
    }
    footerButtonOnClick={
      hasFooterButton(type) ? setLastVisibleCardIndex : undefined
    }
  />
)

export default CardWrapper
