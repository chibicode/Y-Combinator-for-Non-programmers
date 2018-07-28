import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'

const BorderWrapper: React.SFC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Flex
    border={2}
    className={css`
      margin: -2px;
    `}
    borderColor="darkYellow"
    alignItems="center"
    flex={1}
  >
    {children}
  </Flex>
)

export default BorderWrapper
