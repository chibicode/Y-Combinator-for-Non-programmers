import React from 'react'

interface SectionContextProps {
  emBackgroundColor?: string
}

export const sectionContextDefault: SectionContextProps = {}

export default React.createContext<SectionContextProps>(sectionContextDefault)
