import { css } from 'emotion'
import React from 'react'
import InlineFlex from '../components/InlineFlex'

interface ExpressionWrapperProps {
  children: React.ReactNode
  borderStyle?: 'solid' | 'dashed'
  removePaddingX?: boolean
}

const ExpressionWrapper: React.SFC<ExpressionWrapperProps> = ({
  children,
  borderStyle,
  removePaddingX
}) => (
  <InlineFlex
    bg="#fff"
    className={css({
      borderStyle
    })}
    borderRadius={5}
    borderColor="darkYellow"
    border={borderStyle ? 2 : 0}
    px={removePaddingX ? 0 : 3}
    py={2}
    alignItems="center"
  >
    {children}
  </InlineFlex>
)

export default ExpressionWrapper
