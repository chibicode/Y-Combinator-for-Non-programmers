import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import React from 'react'
import Flex from '../components/Flex'
import FunctionCallStyles from '../components/FunctionCallStyles'
import InlineFlex from '../components/InlineFlex'
import ShadedSquare from '../components/ShadedSquare'

const FunctionCall: React.SFC<{}> = () => (
  <FunctionCallStyles>
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
          <ShadedSquare>3</ShadedSquare>
        </Flex>
        <Flex
          p={3}
          flexDirection="column"
          borderTop={1}
          borderColor="darkYellow"
        >
          <Flex mb={2}>
            <ShadedSquare>x</ShadedSquare>
          </Flex>
          <Flex ml={2} alignItems="top">
            <InlineFlex color="darkYellow" p={2} mr={2} mt={2}>
              <FontAwesomeIcon
                icon={['fas', 'level-up']}
                transform={{ rotate: 90 }}
              />
            </InlineFlex>
            <ShadedSquare noPadding>
              <Flex flexDirection="column">
                <Flex>
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
                    n
                  </InlineFlex>
                </Flex>
                <Flex ml={2} alignItems="top">
                  <InlineFlex color="darkYellow" py={2} pr={2} pl={1} mx={2}>
                    <FontAwesomeIcon
                      icon={['fas', 'level-up']}
                      transform={{ rotate: 90 }}
                    />
                  </InlineFlex>
                  <Flex bg="lightYellow" py={1} pl={1} pr={3} borderRadius={5}>
                    x + n
                  </Flex>
                </Flex>
              </Flex>
            </ShadedSquare>
          </Flex>
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
