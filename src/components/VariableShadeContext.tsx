import React from 'react'

export interface VariableShadeContextProps {
  shadeNonNumbers?: true
}

export const variableShadeContextDefault: VariableShadeContextProps = {}

export default React.createContext<VariableShadeContextProps>(
  variableShadeContextDefault
)
