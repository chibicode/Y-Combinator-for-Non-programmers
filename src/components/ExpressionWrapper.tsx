import { css } from 'emotion'
import React from 'react'
import InlineFlex from '../components/InlineFlex'

interface ExpressionWrapperProps {
  children: React.ReactNode
  hasBorder?: boolean
}

const ExpressionWrapper: React.SFC<ExpressionWrapperProps> = ({
  hasBorder,
  children
}) => (
  <InlineFlex
    bg="#fff"
    className={
      hasBorder &&
      css({
        borderStyle: 'solid'
      })
    }
    borderRadius={5}
    borderColor="darkYellow"
    border={hasBorder ? 2 : 0}
    px={hasBorder ? 3 : 0}
    py={2}
    alignItems="center"
  >
    {children}
  </InlineFlex>
)

export default ExpressionWrapper
