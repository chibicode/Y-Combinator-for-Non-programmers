import { css } from 'emotion'
import React from 'react'
import Expression from '../components/Expression'
import ExpressionWrapper from '../components/ExpressionWrapper'
import Flex from '../components/Flex'
import FunctionCallStyles from '../components/FunctionCallStyles'
import InlineFlex from '../components/InlineFlex'
import {
  expressionToString,
  isInnerMostImmediatelyExecutableCall
} from '../lib/functionUtils'

interface FunctionCallProps {
  expression: ExpressionTypes.CallExpression
  isOuterMost?: boolean
  highlightVariable?: string
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression,
  isOuterMost,
  highlightVariable
}) => {
  const isInnerMost = isInnerMostImmediatelyExecutableCall(expression)
  return (
    <FunctionCallStyles>
      <InlineFlex
        border={2}
        borderColor="darkYellow"
        borderRadius={2}
        className={css`
          overflow: hidden;
        `}
      >
        <Flex flexDirection="column">
          <Flex
            p={3}
            justifyContent="center"
            borderBottom={1}
            borderColor="darkYellow"
            bg={isInnerMost ? 'darkYellow' : 'lightYellow'}
          >
            {expression.arg && (
              <ExpressionWrapper hasBorder>
                <Expression expression={expression.arg} noWrapper />
              </ExpressionWrapper>
            )}
          </Flex>
          <Flex
            p={3}
            borderTop={1}
            borderColor="darkYellow"
            justifyContent="center"
          >
            <Expression
              expression={expression.func}
              isOuterMost={isOuterMost}
              highlightVariable={highlightVariable}
            />
          </Flex>
        </Flex>
      </InlineFlex>
    </FunctionCallStyles>
  )
}

export default FunctionCallExpression
