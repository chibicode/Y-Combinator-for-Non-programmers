import React from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import h from 'src/lib/h'

interface EpisodeCardType {
  type?: 'yesNoQuiz'
  content: React.ReactNode
}

export type EpisodeCardListType = ReadonlyArray<EpisodeCardType>

const typeToColor = (type: EpisodeCardType['type']): CardProps['color'] =>
  type
    ? {
        yesNoQuiz: 'blue' as 'blue'
      }[type]
    : 'white'

const hasFooterButton = (type: EpisodeCardType['type']) => type === 'yesNoQuiz'

const FooterButtonContent = ({ type }: { type: EpisodeCardType['type'] }) =>
  type === 'yesNoQuiz' ? <>{h('yesNoQuizSeeAnswer')}</> : null

const EpisodeCardList = ({ cards }: { cards: EpisodeCardListType }) => (
  <>
    <EpisodePageInitialRenderWarning />
    {cards.map(({ type, content }, index) => (
      <Card
        slideNumber={index + 1}
        slideCount={cards.length}
        key={`card${index}`}
        color={typeToColor(type)}
        footerButton={
          hasFooterButton(type) && <FooterButtonContent type={type} />
        }
      >
        {content}
      </Card>
    ))}
  </>
)

export default EpisodeCardList
