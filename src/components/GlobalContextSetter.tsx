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
}: GlobalContextProviderProps) => {
  const { setFurthestEpisodes } = useContext(GlobalContext)
  useEffect(() => {
    // https://overreacted.io/a-complete-guide-to-useeffect/#making-effects-self-sufficient
    setFurthestEpisodes(prevFurthestEpisodes => {
      const furthestEpisodeForThisLesson = prevFurthestEpisodes[lessonName]
      if (
        !furthestEpisodeForThisLesson ||
        (typeof furthestEpisodeForThisLesson !== 'undefined' &&
          furthestEpisodeForThisLesson < episodeNumber)
      ) {
        return {
          ...prevFurthestEpisodes,
          [lessonName]: episodeNumber
        }
      } else {
        return prevFurthestEpisodes
      }
    })
  }, [episodeNumber, lessonName, setFurthestEpisodes])
  return <React.Fragment>{children}</React.Fragment>
}

export default GlobalContextSetter
