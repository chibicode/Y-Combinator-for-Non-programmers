import React, { Fragment } from 'react'
import FunctionCallExpression from '../components/FunctionCallExpression'
import FunctionExpression from '../components/FunctionExpression'
import InlineFlex from '../components/InlineFlex'
import NumberExpression from '../components/NumberExpression'
import VariableExpression from '../components/VariableExpression'

interface ExpressionProps {
  expression: ExpressionTypes.AnyExpression
  noWrapper?: boolean
  isOuterMost?: boolean
}

const Expression: React.SFC<ExpressionProps> = ({
  expression,
  noWrapper,
  isOuterMost
}) => (
  <Fragment>
    {(() => {
      switch (expression.type) {
        case 'number': {
          return (
            <NumberExpression noWrapper={noWrapper} expression={expression} />
          )
        }
        case 'variable': {
          return (
            <VariableExpression noWrapper={noWrapper} expression={expression} />
          )
        }
        case 'sum': {
          // TODO: Might need parans
          return (
            <InlineFlex alignItems="center">
              <InlineFlex>
                <Expression expression={expression.left} />
              </InlineFlex>
              <InlineFlex px={3} py={2}>
                +
              </InlineFlex>
              <InlineFlex>
                <Expression expression={expression.right} />
              </InlineFlex>
            </InlineFlex>
          )
        }
        case 'call': {
          return (
            <FunctionCallExpression
              expression={expression}
              isOuterMost={isOuterMost}
            />
          )
        }
        case 'function': {
          return (
            <FunctionExpression
              expression={expression}
              isOuterMost={isOuterMost}
            />
          )
        }
      }
    })()}
  </Fragment>
)

export default Expression
