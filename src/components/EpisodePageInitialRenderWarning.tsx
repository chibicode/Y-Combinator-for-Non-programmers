import React, { useContext } from 'react'
import Card from 'src/components/Card'
import Content from 'src/components/Content'
import EpisodeContext from 'src/components/EpisodeContext'
import GlobalContext from 'src/components/GlobalContext'

const EpisodePageInitialRenderWarning = () => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { initialRender } = useContext(GlobalContext)
  return !!episodeNumber && initialRender ? (
    <Card color="yellow">
      <Content name="others/NewUser" />
    </Card>
  ) : null
}

export default EpisodePageInitialRenderWarning
