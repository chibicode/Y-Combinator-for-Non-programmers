import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import React from 'react'
import Expression from '../components/Expression'
import Flex from '../components/Flex'
import FunctionCallStyles from '../components/FunctionCallStyles'
import InlineFlex from '../components/InlineFlex'
import ShadedSquare from '../components/ShadedSquare'
import { expressionToString } from '../lib/functionUtils'

interface FunctionCallProps {
  expression: CallExpression
}

const FunctionCall: React.SFC<FunctionCallProps> = ({ expression }) => (
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
        >
          {expression.args &&
            expression.args.map((arg, index) => (
              <InlineFlex px={1} key={`${expressionToString(arg)}-${index}`}>
                <ShadedSquare>
                  <Expression expression={arg} />
                </ShadedSquare>
              </InlineFlex>
            ))}
        </Flex>
        <Flex
          p={3}
          flexDirection="column"
          borderTop={1}
          borderColor="darkYellow"
        >
          <Expression expression={expression.func} />
        </Flex>
        <Flex
          p={3}
          alignItems="center"
          justifyContent="center"
          color="darkYellow"
          bg="lightYellow"
          borderTop={2}
          borderColor="darkYellow"
        >
          {/* Switch to "times" icon if it's inside some other function */}
          <FontAwesomeIcon icon="check" />
        </Flex>
      </Flex>
    </InlineFlex>
  </FunctionCallStyles>
)

export default FunctionCall
