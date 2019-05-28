import React from 'react'

export interface ConditionalContextProps {
  conditionalActive: boolean
}

export const conditionalContextDefault: ConditionalContextProps = {
  conditionalActive: false
}

export default React.createContext<ConditionalContextProps>(
  conditionalContextDefault
)
