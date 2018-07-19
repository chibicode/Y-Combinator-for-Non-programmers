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
  highlightVariable?: string
}

const Expression: React.SFC<ExpressionProps> = ({
  expression,
  noWrapper,
  isOuterMost,
  highlightVariable
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
            <VariableExpression
              noWrapper={noWrapper}
              expression={expression}
              highlightVariable={highlightVariable}
            />
          )
        }
        case 'sum': {
          // TODO: Might need parans
          return (
            <InlineFlex alignItems="center">
              <InlineFlex>
                <Expression
                  expression={expression.left}
                  highlightVariable={highlightVariable}
                />
              </InlineFlex>
              <InlineFlex px={3} py={2}>
                +
              </InlineFlex>
              <InlineFlex>
                <Expression
                  expression={expression.right}
                  highlightVariable={highlightVariable}
                />
              </InlineFlex>
            </InlineFlex>
          )
        }
        case 'call': {
          return (
            <FunctionCallExpression
              expression={expression}
              isOuterMost={isOuterMost}
              highlightVariable={highlightVariable}
            />
          )
        }
        case 'function': {
          return (
            <FunctionExpression
              expression={expression}
              isOuterMost={isOuterMost}
              highlightVariable={highlightVariable}
            />
          )
        }
      }
    })()}
  </Fragment>
)

export default Expression
