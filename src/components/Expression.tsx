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
  highlightVariables?: string[]
}

const Expression: React.SFC<ExpressionProps> = ({
  expression,
  noWrapper,
  isOuterMost,
  highlightVariables
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
              highlightVariables={highlightVariables}
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
                  highlightVariables={highlightVariables}
                />
              </InlineFlex>
              <InlineFlex px={3} py={2}>
                +
              </InlineFlex>
              <InlineFlex>
                <Expression
                  expression={expression.right}
                  highlightVariables={highlightVariables}
                />
              </InlineFlex>
            </InlineFlex>
          )
        }
        case 'call': {
          return (
            <FunctionCallExpression
              expression={expression}
              highlightVariables={highlightVariables}
            />
          )
        }
        case 'function': {
          return (
            <FunctionExpression
              expression={expression}
              isOuterMost={isOuterMost}
              highlightVariables={highlightVariables}
            />
          )
        }
      }
    })()}
  </Fragment>
)

export default Expression
