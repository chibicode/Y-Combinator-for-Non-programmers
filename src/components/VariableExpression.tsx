import React, { Fragment } from 'react'
import ExpressionWrapper from '../components/ExpressionWrapper'

interface VariableExpressionProps {
  expression: ExpressionTypes.VariableExpression
  noWrapper?: boolean
  highlightVariable?: boolean
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression,
  highlightVariable,
  noWrapper
}) =>
  noWrapper ? (
    <Fragment>{expression.name}</Fragment>
  ) : (
    <ExpressionWrapper hasBorder={highlightVariable}>
      {expression.name}
    </ExpressionWrapper>
  )

export default VariableExpression
