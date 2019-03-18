import React from 'react'
import pathHelpers from 'src/lib/pathHelpers'

export type FurthestEpisodes = { [k in keyof typeof pathHelpers]?: number }

export interface GlobalContextProps {
  initialRender: boolean
  furthestEpisodes: FurthestEpisodes
  setInitialRender: React.Dispatch<React.SetStateAction<boolean>>
  setFurthestEpisodes: React.Dispatch<React.SetStateAction<FurthestEpisodes>>
}

export const globalContextDefault: GlobalContextProps = {
  initialRender: true,
  furthestEpisodes: {},
  setInitialRender: () => {},
  setFurthestEpisodes: () => {}
}

export default React.createContext<GlobalContextProps>(globalContextDefault)
