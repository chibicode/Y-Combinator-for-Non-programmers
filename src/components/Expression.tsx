import FunctionCallExpression from 'components/FunctionCallExpression'
import FunctionExpression from 'components/FunctionExpression'
import VariableExpression from 'components/VariableExpression'
import React, { Fragment } from 'react'
import ExpressionTypes from 'types/ExpressionTypes'

interface ExpressionProps {
  expression: ExpressionTypes.AnyExpression
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
