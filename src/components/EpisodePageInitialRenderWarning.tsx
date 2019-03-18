import React from 'react'
import { useContext } from 'react'
import Card from 'src/components/Card'
import Content from 'src/components/Content'
import EpisodeContext from 'src/components/EpisodeContext'
import GlobalContext from 'src/components/GlobalContext'

const EpisodePageInitialRenderWarning = () => {
  const { lessonName, episodeNumber } = useContext(EpisodeContext)
  const { initialRender } = useContext(GlobalContext)
  return !!episodeNumber && initialRender ? (
    <Card color="yellow">
      <Content name="others/NewUser" componentProps={{ lessonName }} />
    </Card>
  ) : null
}

export default EpisodePageInitialRenderWarning
