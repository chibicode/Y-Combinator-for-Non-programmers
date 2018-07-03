import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  highlightVariables?: string[]
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression,
  isOuterMost,
  highlightVariables
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
            borderBottom={1}
            borderColor="darkYellow"
            bg={isInnerMost && 'lightYellow'}
          >
            <Flex flex={'auto 1'}>
              {expression.args &&
                expression.args.map((arg, index) => (
                  <InlineFlex
                    px={1}
                    key={`${expressionToString(arg)}-${index}`}
                  >
                    <ExpressionWrapper
                      borderStyle={isInnerMost ? 'solid' : 'dashed'}
                    >
                      <Expression expression={arg} noWrapper />
                    </ExpressionWrapper>
                  </InlineFlex>
                ))}
            </Flex>
            <Flex color="darkYellow" alignItems="center" py={1} pr={1} pl={5}>
              <FontAwesomeIcon
                icon={isInnerMost ? 'check' : ['far', 'exclamation-triangle']}
              />
            </Flex>
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
              highlightVariables={highlightVariables}
            />
          </Flex>
        </Flex>
      </InlineFlex>
    </FunctionCallStyles>
  )
}

export default FunctionCallExpression
