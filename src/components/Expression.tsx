import React from 'react'
import CallExpression from 'src/components/CallExpression'
import FunctionExpression from 'src/components/FunctionExpression'
import VariableExpression from 'src/components/VariableExpression'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'

interface ExpressionProps {
  expression: DecoratedExpression
}

const Expression: React.SFC<ExpressionProps> = ({ expression }) => {
  if (expression.type === 'variable') {
    return <VariableExpression expression={expression} />
  } else if (expression.type === 'call') {
    return <CallExpression expression={expression} />
  } else {
    return <FunctionExpression expression={expression} />
  }
}

export default Expression
