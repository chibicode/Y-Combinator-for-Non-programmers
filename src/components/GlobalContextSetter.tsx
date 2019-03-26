import React, { useEffect, useContext } from 'react'
import GlobalContext from 'src/components/GlobalContext'

interface GlobalContextProviderProps {
  children: React.ReactNode
  episodeNumber: number
}

const GlobalContextSetter = ({
  episodeNumber,
  children
}: GlobalContextProviderProps) => {
  const { setFurthestEpisode } = useContext(GlobalContext)
  useEffect(() => {
    // https://overreacted.io/a-complete-guide-to-useeffect/#making-effects-self-sufficient
    setFurthestEpisode(prevFurthestEpisode => {
      if (prevFurthestEpisode < episodeNumber) {
        return episodeNumber
      } else {
        return prevFurthestEpisode
      }
    })
  }, [episodeNumber, setFurthestEpisode])
  return <React.Fragment>{children}</React.Fragment>
}

export default GlobalContextSetter
