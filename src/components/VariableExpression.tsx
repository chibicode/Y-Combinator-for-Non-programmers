import React, { Fragment } from 'react'
import ExpressionWrapper from '../components/ExpressionWrapper'

interface VariableExpressionProps {
  expression: ExpressionTypes.VariableExpression
  noWrapper?: boolean
  highlightVariable?: string
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression,
  highlightVariable,
  noWrapper
}) =>
  noWrapper ? (
    <Fragment>{expression.name}</Fragment>
  ) : (
    <ExpressionWrapper
      borderStyle={highlightVariable === expression.name ? 'solid' : 'dashed'}
    >
      {expression.name}
    </ExpressionWrapper>
  )

export default VariableExpression
