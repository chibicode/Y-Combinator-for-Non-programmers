import React from 'react'
import { useContext } from 'react'
import Card from 'src/components/Card'
import { CardProps } from 'src/components/Card'
import Content from 'src/components/Content'
import EpisodeHeroContext from 'src/components/EpisodeHeroContext'
import GlobalContext from 'src/components/GlobalContext'

const EpisodePageInitialRenderWarning = () => {
  const { lessonName, episodeNumber } = useContext(EpisodeHeroContext)
  const { initialRender } = useContext(GlobalContext)
  if (!episodeNumber) {
    throw new Error('error')
  }
  return !!episodeNumber && initialRender ? (
    <Card color="yellow">
      <Content name="others/NewUser" componentProps={{ lessonName }} />
    </Card>
  ) : null
}

export type EpisodeCardListType = ReadonlyArray<{
  color?: CardProps['color']
  content: React.ReactNode
}>

const EpisodeCardList = ({ cards }: { cards: EpisodeCardListType }) => (
  <>
    <EpisodePageInitialRenderWarning />
    {cards.map(({ color, content }, index) => (
      <Card
        slideNumber={index + 1}
        slideCount={cards.length}
        key={`card${index}`}
        color={color}
      >
        {content}
      </Card>
    ))}
  </>
)

export default EpisodeCardList
