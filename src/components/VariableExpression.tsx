import React, { Fragment } from 'react'
import ExpressionWrapper from '../components/ExpressionWrapper'

interface VariableExpressionProps {
  expression: ExpressionTypes.VariableExpression
  noWrapper?: boolean
  highlightVariables?: string[]
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression,
  highlightVariables,
  noWrapper
}) =>
  noWrapper ? (
    <Fragment>{expression.name}</Fragment>
  ) : (
    <ExpressionWrapper
      borderStyle={
        (highlightVariables || []).indexOf(expression.name) >= 0
          ? 'solid'
          : 'dashed'
      }
    >
      {expression.name}
    </ExpressionWrapper>
  )

export default VariableExpression
