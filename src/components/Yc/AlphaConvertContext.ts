import React from 'react'
import { VariableNames } from 'src/types/yc/VariableNames'

export interface AlphaConvertContextProps {
  conflictingVariableNames?: ReadonlyArray<VariableNames>
}

export const alphaConvertContextPropsDefault: AlphaConvertContextProps = {}

export default React.createContext<AlphaConvertContextProps>(
  alphaConvertContextPropsDefault
)
