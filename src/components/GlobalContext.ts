import React from 'react'
import pathHelpers from 'src/lib/pathHelpers'

export interface InitialEpisode {
  lessonName?: keyof typeof pathHelpers
  episodeNumber?: number
}

export interface GlobalContextProps {
  initialRender: boolean
  initialEpisode: InitialEpisode
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>
  setInitialEpisode: React.Dispatch<React.SetStateAction<InitialEpisode>>
}

export const globalContextDefault: GlobalContextProps = {
  initialRender: true,
  initialEpisode: {},
  setInitialRender: () => {},
  setInitialEpisode: () => {}
}

export default React.createContext<GlobalContextProps>(globalContextDefault)
