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
      <Flex
        p={3}
        justifyContent="center"
        alignItems="center"
        borderTop={1}
        borderColor="darkYellow"
      >
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
        <InlineFlex color="darkYellow" p={2}>
          <FontAwesomeIcon icon={['fas', 'arrow-alt-right']} />
        </InlineFlex>
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
        <InlineFlex p={2}>+ 5</InlineFlex>
      </Flex>
    </Flex>
    <Flex
      p={2}
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
