import repeat from 'lodash/repeat'
import React from 'react'
import BorderWrapper from 'src/components/BorderWrapper'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import ExpressionTypes from 'src/types/UndecoratedExpressionTypes'

interface FunctionCallProps {
  expression: ExpressionTypes.UndecoratedCallExpression
  callNestLevel?: number
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression,
  callNestLevel,
}) => (
  <BorderWrapper>
    <Flex flexDirection="column">
      {callNestLevel > 0 && (
        <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
          {repeat('↓', callNestLevel)}
        </Flex>
      )}
      {expression
        .slice(0)
        .reverse()
        .map((e, index) => (
          <Flex
            justifyContent="center"
            borderBottom={
              index < expression.length - 1 || callNestLevel > 0 ? 2 : 0
            }
            borderColor="darkYellow"
          >
            <Expression expression={e} callNestLevel={callNestLevel + 1} />
          </Flex>
        ))}
      {callNestLevel > 0 && (
        <Flex justifyContent="center" borderColor="darkYellow">
          {repeat('↑', callNestLevel)}
        </Flex>
      )}
    </Flex>
  </BorderWrapper>
)

FunctionCallExpression.defaultProps = {
  callNestLevel: 0,
}

export default FunctionCallExpression
