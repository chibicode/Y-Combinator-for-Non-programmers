import { useRouter, NextRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import GlobalContext, {
  globalContextDefault
} from 'src/components/GlobalContext'

const GlobalState = ({ children }: { children: React.ReactNode }) => {
  const router: NextRouter = useRouter()
  const [initialRender, setInitialRender] = useState(
    globalContextDefault.initialRender
  )
  const [furthestEpisode, setFurthestEpisode] = useState(
    globalContextDefault.furthestEpisode
  )
  useEffect(() => {
    const handleRouteChange = () => {
      setInitialRender(false)
    }
    if (router) {
      router.events.on('routeChangeStart', handleRouteChange)
    }
    return () => {
      if (router) {
        router.events.off('routeChangeStart', handleRouteChange)
      }
    }
  }, [router])
  return (
    <GlobalContext.Provider
      value={{
        initialRender,
        setInitialRender,
        furthestEpisode,
        setEpisodeAsFurthest: (episodeNumber: number) => {
          setFurthestEpisode((prevFurthestEpisode: number) => {
            if (prevFurthestEpisode < episodeNumber) {
              return episodeNumber
            } else {
              return prevFurthestEpisode
            }
          })
        }
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
