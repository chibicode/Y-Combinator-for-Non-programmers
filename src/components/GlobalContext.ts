import React from 'react'

export interface GlobalContextProps {
  initialRender: boolean
  furthestEpisode: number
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>
  setFurthestEpisode: React.Dispatch<React.SetStateAction<number>>
}

export const globalContextDefault: GlobalContextProps = {
  initialRender: true,
  furthestEpisode: 0,
  setInitialRender: () => {},
  setFurthestEpisode: () => {}
}

export default React.createContext<GlobalContextProps>(globalContextDefault)
