import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from 'emotion'
import { injectGlobal } from 'emotion'
import React from 'react'
import { Container } from 'rebass/emotion'
import Flex from '../components/Flex'
import FunctionCall from '../components/FunctionCall'
import InlineFlex from '../components/InlineFlex'
import ShadedSquare from '../components/ShadedSquare'
import ThemeProvider from '../components/ThemeProvider'
import '../lib/fontAwesome'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const args = () => [3, 4]
const definition = () => (
  <>
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
              borderRadius={2}
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
            <Flex bg="lightYellow" py={1} pl={1} pr={3} borderRadius={2}>
              x + n
            </Flex>
          </Flex>
        </Flex>
      </ShadedSquare>
    </Flex>
  </>
)

const Home: React.SFC<{}> = () => (
  <ThemeProvider>
    <Container pt={4} color="black">
      <Flex>
        <Flex mr={2}>
          <FunctionCall args={args} definition={definition} />
        </Flex>
      </Flex>
    </Container>
  </ThemeProvider>
)

export default Home
