import React, { Fragment } from 'react'
import FunctionCallExpression from 'src/components/FunctionCallExpression'
import FunctionExpression from 'src/components/FunctionExpression'
import VariableExpression from 'src/components/VariableExpression'
import ExpressionTypes from 'src/types/UndecoratedExpressionTypes'

interface ExpressionProps {
  expression: ExpressionTypes.UndecoratedExpression
  callNestLevel?: number
}

const Expression: React.SFC<ExpressionProps> = ({
  expression,
  callNestLevel,
}) => (
  <Fragment>
    {(() => {
      if (typeof expression === 'string') {
        return <VariableExpression expression={expression} />
      } else if (Array.isArray(expression)) {
        return (
          <FunctionCallExpression
            expression={expression}
            callNestLevel={callNestLevel}
          />
        )
      } else {
        return <FunctionExpression expression={expression} />
      }
    })()}
  </Fragment>
)

export default Expression
