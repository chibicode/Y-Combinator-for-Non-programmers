import { useContext } from 'react'
import EpisodeContext from 'src/components/EpisodeContext'
import GlobalContext from 'src/components/GlobalContext'
import H from 'src/components/H'
import Alert from 'src/components/Alert'

const EpisodePageInitialRenderWarning = () => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { initialRender } = useContext(GlobalContext)
  return !!episodeNumber && initialRender ? (
    <Alert>
      <H args={{ name: 'newUser' }} />
    </Alert>
  ) : null
}

export default EpisodePageInitialRenderWarning
