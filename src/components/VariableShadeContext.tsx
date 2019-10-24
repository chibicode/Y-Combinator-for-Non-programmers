import React from 'react'

export interface VariableShadeContextProps {
  shadeNonNumbers?: true
  shadeNonHighlightedFunc?: true
}

export const variableShadeContextDefault: VariableShadeContextProps = {}

export default React.createContext<VariableShadeContextProps>(
  variableShadeContextDefault
)
