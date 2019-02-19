import { withRouter, WithRouterProps } from 'next/router'
import React, { useEffect, useState } from 'react'
import GlobalContext from 'src/components/GlobalContext'

interface GlobalContextProviderProps {
  children: React.ReactNode
}

const GlobalContextProvider = ({
  router,
  children
}: GlobalContextProviderProps & WithRouterProps) => {
  const [initialRender, setInitialRender] = useState(true)
  useEffect(() => {
    if (router) {
      router.events.on('routeChangeComplete', handleRouteChange)
    }
    return () => {
      if (router) {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  })
  const handleRouteChange = () => setInitialRender(false)
  return (
    <GlobalContext.Provider value={{ initialRender }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default withRouter<GlobalContextProviderProps>(GlobalContextProvider)
