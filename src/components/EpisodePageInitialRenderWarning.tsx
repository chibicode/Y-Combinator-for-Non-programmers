import React, { useContext } from 'react'
import Card from 'src/components/Card'
import EpisodeContext from 'src/components/EpisodeContext'
import GlobalContext from 'src/components/GlobalContext'
import H from 'src/components/H'

const EpisodePageInitialRenderWarning = () => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { initialRender } = useContext(GlobalContext)
  return !!episodeNumber && initialRender ? (
    <Card color="yellow">
      <H args={{ name: 'newUser' }} />
    </Card>
  ) : null
}

export default EpisodePageInitialRenderWarning
