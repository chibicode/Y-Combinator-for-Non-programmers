import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import React from 'react'
import Flex from '../components/Flex'
import FunctionCallStyles from '../components/FunctionCallStyles'
import InlineFlex from '../components/InlineFlex'
import ShadedSquare from '../components/ShadedSquare'

interface FunctionCallProps {
  args: () => number[]
  definition: () => React.ReactNode
}

const FunctionCall: React.SFC<FunctionCallProps> = ({ args, definition }) => (
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
          {args().map((argument, index) => (
            <InlineFlex px={1} key={`${argument}-${index}`}>
              <ShadedSquare>{argument}</ShadedSquare>
            </InlineFlex>
          ))}
        </Flex>
        <Flex
          p={3}
          flexDirection="column"
          borderTop={1}
          borderColor="darkYellow"
        >
          {definition()}
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
