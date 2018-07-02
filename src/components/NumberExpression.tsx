import React, { Fragment } from 'react'
import ExpressionWrapper from '../components/ExpressionWrapper'

interface NumberExpressionProps {
  expression: ExpressionTypes.NumberExpression
  noWrapper?: boolean
  highlightAndBorder?: boolean
}

const NumberExpression: React.SFC<NumberExpressionProps> = ({
  noWrapper,
  expression,
  highlightAndBorder
}) =>
  noWrapper ? (
    <Fragment>{expression.value}</Fragment>
  ) : (
    <ExpressionWrapper
      borderStyle={highlightAndBorder ? 'solid' : undefined}
      removePaddingX={!highlightAndBorder}
    >
      {expression.value}
    </ExpressionWrapper>
  )

export default NumberExpression
