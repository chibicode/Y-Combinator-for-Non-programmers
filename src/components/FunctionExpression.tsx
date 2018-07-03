import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Expression from '../components/Expression'
import ExpressionWrapper from '../components/ExpressionWrapper'
import Flex from '../components/Flex'
import InlineFlex from '../components/InlineFlex'

interface FunctionExpressionProps {
  expression: ExpressionTypes.FunctionExpression
  isOuterMost?: boolean
  borderType?: 'functionArgs'
  highlightVariables?: string[]
}

const FunctionExpression: React.SFC<FunctionExpressionProps> = ({
  expression,
  isOuterMost,
  highlightVariables
}) => (
  <div>
    <Flex mb={2}>
      {expression.args &&
        expression.args.map((arg, index) => (
          <InlineFlex px={1} key={`${arg}-${index}`}>
            <ExpressionWrapper borderStyle={isOuterMost ? 'solid' : 'dashed'}>
              {arg}
            </ExpressionWrapper>
          </InlineFlex>
        ))}
    </Flex>
    <Flex ml={2} alignItems="top">
      <InlineFlex color="darkYellow" p={2} m={2}>
        <FontAwesomeIcon
          icon={['fas', 'level-up']}
          transform={{ rotate: 90 }}
        />
      </InlineFlex>
      <Expression
        expression={expression.body}
        highlightVariables={isOuterMost ? expression.args : highlightVariables}
      />
    </Flex>
  </div>
)

export default FunctionExpression
