import { css } from 'emotion'
import React from 'react'
import BorderWrapper from 'src/components/BorderWrapper'
import CallExpression from 'src/components/CallExpression'
import Flex from 'src/components/Flex'
import FunctionExpression from 'src/components/FunctionExpression'
import VariableExpression from 'src/components/VariableExpression'
import ExpressionTypes from 'src/types/ExpressionTypes'

interface ExpressionProps {
  expression: ExpressionTypes.Expression
}

const Expression: React.SFC<ExpressionProps> = ({ expression }) => (
  <Flex
    width={1}
    className={css`
      height: 100%;
    `}
  >
    <BorderWrapper state={expression.state}>
      {(() => {
        if (expression.type === 'variable') {
          return <VariableExpression expression={expression} />
        } else if (expression.type === 'call') {
          return <CallExpression expression={expression} />
        } else {
          return <FunctionExpression expression={expression} />
        }
      })()}
    </BorderWrapper>
  </Flex>
)

export default Expression
