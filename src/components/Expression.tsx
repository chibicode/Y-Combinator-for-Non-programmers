import React, { Fragment } from 'react'
import FunctionCallExpression from '../components/FunctionCallExpression'
import FunctionExpression from '../components/FunctionExpression'
import VariableExpression from '../components/VariableExpression'

interface ExpressionProps {
  expression: ExpressionTypes.AnyExpression
}

const Expression: React.SFC<ExpressionProps> = ({ expression }) => (
  <Fragment>
    {(() => {
      if (typeof expression === 'string') {
        return <VariableExpression expression={expression} />
      } else if (Array.isArray(expression)) {
        return <FunctionCallExpression expression={expression} />
      } else {
        return <FunctionExpression expression={expression} />
      }
    })()}
  </Fragment>
)

export default Expression
