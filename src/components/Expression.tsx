import React, { Fragment } from 'react'
import InlineFlex from '../components/InlineFlex'

const Expression: React.SFC<{ expression: AnyExpression }> = ({
  expression
}) => {
  switch (expression.type) {
    case 'number': {
      return <Fragment>{expression.value}</Fragment>
    }
    case 'variable': {
      return <Fragment>{expression.name}></Fragment>
    }
    case 'sum': {
      // TODO: Might need parans
      return (
        <InlineFlex alignItems="center">
          <InlineFlex>
            <Expression expression={expression.left} />
          </InlineFlex>
          <InlineFlex>+</InlineFlex>
          <InlineFlex>
            <Expression expression={expression.right} />
          </InlineFlex>
        </InlineFlex>
      )
    }
  }
  return null
}

export default Expression
