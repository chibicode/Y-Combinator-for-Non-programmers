import React from 'react'

interface SectionContextProps {
  currentSection?: 'sideNote'
}

export const sectionContextDefault: SectionContextProps = {}

export default React.createContext<SectionContextProps>(sectionContextDefault)
