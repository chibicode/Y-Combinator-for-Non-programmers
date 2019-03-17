import { withRouter, WithRouterProps } from 'next/router'
import React, { useEffect, useContext } from 'react'
import GlobalContext from 'src/components/GlobalContext'
import pathHelpers from 'src/lib/pathHelpers'

interface GlobalContextProviderProps {
  children: React.ReactNode
  episodeNumber: number
  lessonName: keyof typeof pathHelpers
}

const GlobalContextSetter = ({
  episodeNumber,
  lessonName,
  children
}: GlobalContextProviderProps & WithRouterProps) => {
  const { furthestEpisodes, setFurthestEpisodes } = useContext(GlobalContext)
  useEffect(() => {
    const furthestEpisodeForThisLesson = furthestEpisodes[lessonName]
    if (
      !furthestEpisodeForThisLesson ||
      (typeof furthestEpisodeForThisLesson !== 'undefined' &&
        furthestEpisodeForThisLesson < episodeNumber)
    ) {
      setFurthestEpisodes({
        ...furthestEpisodes,
        [lessonName]: episodeNumber
      })
    }
  }, [episodeNumber, furthestEpisodes, lessonName, setFurthestEpisodes])
  return <React.Fragment>{children}</React.Fragment>
}

export default withRouter<GlobalContextProviderProps>(GlobalContextSetter)
