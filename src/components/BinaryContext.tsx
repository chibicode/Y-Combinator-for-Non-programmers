import React from 'react'
import { BinaryExpression } from 'src/types/ExpressionTypes'

export interface BinaryContextProps {
  binaryState?: BinaryExpression['state']
  inBinaryActive?: boolean
}

export const binaryContextDefault: BinaryContextProps = {}

export default React.createContext<BinaryContextProps>(binaryContextDefault)
