import { withRouter, WithRouterProps } from 'next/router'
import React, { useState, useEffect } from 'react'
import GlobalContext, {
  InitialEpisode,
  globalContextDefault
} from 'src/components/GlobalContext'

const GlobalState = ({
  children,
  router
}: { children: React.ReactNode } & WithRouterProps) => {
  const [initialRender, setInitialRender] = useState(
    globalContextDefault.initialRender
  )
  const [initialEpisode, setInitialEpisode] = useState<InitialEpisode>(
    globalContextDefault.initialEpisode
  )
  useEffect(() => {
    const handleRouteChange = () => {
      setInitialRender(false)
    }
    if (router) {
      router.events.on('routeChangeComplete', handleRouteChange)
    }
    return () => {
      if (router) {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router])
  return (
    <GlobalContext.Provider
      value={{
        initialRender,
        setInitialRender,
        initialEpisode,
        setInitialEpisode
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default withRouter(GlobalState)
