import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'

interface BorderWrapperProps {
  children: React.ReactNode
  // TODO: Make state a type
  // Use lookup types https://stackoverflow.com/a/49286056/114157
  state: string
}

const stateToColor = {
  highlighted: 'lightBlue'
}

const BorderWrapper: React.SFC<BorderWrapperProps> = ({ children, state }) => (
  <Flex
    border={2}
    bg={stateToColor[state] || 'transparent'}
    className={css`
      margin: -2px;
    `}
    borderColor="lightGray"
    alignItems="center"
    flex={1}
  >
    {children}
  </Flex>
)

export default BorderWrapper
