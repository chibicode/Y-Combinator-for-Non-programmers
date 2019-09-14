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
  const { initialRender, setEpisodeAsFurthest } = useContext(GlobalContext)
  useEffect(() => {
    if (initialRender) {
      setEpisodeAsFurthest(episodeNumber)
    }
  }, [episodeNumber, initialRender, setEpisodeAsFurthest])
  return <React.Fragment>{children}</React.Fragment>
}

export default GlobalContextSetter
