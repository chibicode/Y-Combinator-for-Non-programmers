import React from 'react'

interface GlobalContextProps {
  initialRender: boolean
}

export const globalContextDefault: GlobalContextProps = {
  initialRender: true
}

export default React.createContext<GlobalContextProps>(globalContextDefault)
