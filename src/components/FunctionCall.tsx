import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import React from 'react'
import Flex from '../components/Flex'
import InlineFlex from '../components/InlineFlex'

const FunctionCall: React.SFC<{}> = () => (
  <InlineFlex
    border={2}
    borderColor="darkYellow"
    borderRadius={5}
    className={css`
      overflow: hidden;
    `}
  >
    <Flex
      p={2}
      alignItems="center"
      color="darkYellow"
      bg="lightYellow"
      borderRight={2}
      borderColor="darkYellow"
    >
      <FontAwesomeIcon icon="star" />
    </Flex>
    <Flex flexDirection="column">
      <Flex
        p={3}
        bg="lightYellow2"
        justifyContent="center"
        borderBottom={1}
        borderColor="darkYellow"
      >
        x
      </Flex>
      <Flex
        p={3}
        justifyContent="center"
        borderTop={1}
        borderColor="darkYellow"
      >
        f
      </Flex>
    </Flex>
  </InlineFlex>
)

export default FunctionCall
