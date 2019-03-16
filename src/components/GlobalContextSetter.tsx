import { withRouter, WithRouterProps } from 'next/router'
import React, { useEffect, useContext } from 'react'
import GlobalContext from 'src/components/GlobalContext'
import pathHelpers from 'src/lib/pathHelpers'

interface GlobalContextProviderProps {
  children: React.ReactNode
  episodeNumber?: number
  lessonName: keyof typeof pathHelpers
}

const GlobalContextSetter = ({
  episodeNumber,
  lessonName,
  children
}: GlobalContextProviderProps & WithRouterProps) => {
  const { initialEpisode, setInitialEpisode } = useContext(GlobalContext)
  useEffect(() => {
    if (!initialEpisode.lessonName) {
      setInitialEpisode({
        episodeNumber,
        lessonName
      })
    }
  }, [episodeNumber, initialEpisode.lessonName, lessonName, setInitialEpisode])
  return <React.Fragment>{children}</React.Fragment>
}

export default withRouter<GlobalContextProviderProps>(GlobalContextSetter)
