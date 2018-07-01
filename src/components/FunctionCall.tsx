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
    <Flex flexDirection="column">
      <Flex
        p={3}
        justifyContent="center"
        borderBottom={1}
        borderColor="darkYellow"
      >
        {/* Params have light background. Don't allow user input - that'd be better UX. Instead, just generate a new example */}
        <InlineFlex
          bg="lightYellow"
          borderRadius={5}
          className={css`
            height: 2em;
            line-height: 2em;
            min-width: 2em;
            justify-content: center;
            align-items: center;
          `}
        >
          3
        </InlineFlex>
      </Flex>
      <Flex p={3} flexDirection="column" borderTop={1} borderColor="darkYellow">
        <Flex mb={2}>
          <InlineFlex
            bg="lightYellow"
            borderRadius={5}
            className={css`
              height: 2em;
              line-height: 2em;
              min-width: 2em;
              justify-content: center;
              align-items: center;
            `}
          >
            x
          </InlineFlex>
        </Flex>
        <Flex ml={2} alignItems="center">
          <InlineFlex color="darkYellow" p={2} mr={2}>
            <FontAwesomeIcon
              icon={['fas', 'level-up']}
              transform={{ rotate: 90 }}
            />
          </InlineFlex>
          <Flex bg="lightYellow" p={3} borderRadius={5}>
            x + 5
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex
      p={3}
      alignItems="center"
      color="darkYellow"
      bg="lightYellow"
      borderLeft={2}
      borderColor="darkYellow"
    >
      {/* Switch to "times" icon if it's inside some other function */}
      <FontAwesomeIcon icon="check" />
    </Flex>
  </InlineFlex>
)

export default FunctionCall
