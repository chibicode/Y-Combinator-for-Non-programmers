import { css } from 'emotion'
import React from 'react'
import { Box, Flex } from 'rebass/emotion'
import Emoji from '../components/Emoji'
import InlineBox from '../components/InlineBox'

const FunctionCall: React.SFC<{}> = () => (
  <InlineBox border={2} borderColor="darkYellow">
    <Flex>
      <Flex alignItems="center" bg="blue">
        <Box>
          <Emoji>⭐️</Emoji>
        </Box>
      </Flex>
      <Box>
        <div
          className={css({
            width: 200,
            height: 200,
            background: 'red'
          })}
        >
          Test
        </div>
      </Box>
    </Flex>
  </InlineBox>
)

export default FunctionCall
