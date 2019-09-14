import React from 'react'

export interface GlobalContextProps {
  initialRender: boolean
  furthestEpisode: number
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>
  setEpisodeAsFurthest: (x: number) => void
}

export const globalContextDefault: GlobalContextProps = {
  initialRender: true,
  furthestEpisode: 0,
  setInitialRender: () => {},
  setEpisodeAsFurthest: (_: number) => {}
}

export default React.createContext<GlobalContextProps>(globalContextDefault)
