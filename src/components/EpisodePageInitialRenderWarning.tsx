import React, { useContext } from 'react'
import EpisodeContext from 'src/components/EpisodeContext'
import GlobalContext from 'src/components/GlobalContext'
import H from 'src/components/H'
import Warning from 'src/components/Warning'

const EpisodePageInitialRenderWarning = () => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { initialRender } = useContext(GlobalContext)
  return !!episodeNumber && initialRender ? (
    <Warning>
      <H args={{ name: 'newUser' }} />
    </Warning>
  ) : null
}

export default EpisodePageInitialRenderWarning
