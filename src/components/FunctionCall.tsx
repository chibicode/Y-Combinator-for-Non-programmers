import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import React from 'react'
import { Box } from 'rebass/emotion'
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
      p={3}
      alignItems="center"
      color="darkYellow"
      bg="lightYellow"
      borderRight={2}
      borderColor="darkYellow"
    >
      <Box>
        <FontAwesomeIcon icon="star" />
      </Box>
    </Flex>
    <Box>
      <div
        className={css({
          width: 200,
          height: 200
        })}
      >
        Test
      </div>
    </Box>
  </InlineFlex>
)

export default FunctionCall
