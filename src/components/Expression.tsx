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
      switch (expression.type) {
        case 'variable': {
          return <VariableExpression expression={expression} />
        }
        case 'call': {
          return <FunctionCallExpression expression={expression} />
        }
        case 'function': {
          return <FunctionExpression expression={expression} />
        }
      }
    })()}
  </Fragment>
)

export default Expression
