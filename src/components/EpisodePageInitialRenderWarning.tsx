import React from 'react'
import { useContext } from 'react'
import Card from 'src/components/Card'
import Content from 'src/components/Content'
import EpisodeHeroContext from 'src/components/EpisodeHeroContext'
import GlobalContext from 'src/components/GlobalContext'

const EpisodePageInitialRenderWarning = () => {
  const { lessonName, episodeNumber } = useContext(EpisodeHeroContext)
  const { initialRender } = useContext(GlobalContext)
  return !!episodeNumber && initialRender ? (
    <Card color="yellow">
      <Content name="others/NewUser" componentProps={{ lessonName }} />
    </Card>
  ) : null
}

export default EpisodePageInitialRenderWarning
