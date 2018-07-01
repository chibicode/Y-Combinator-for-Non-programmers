import React from 'react'
import InlineFlex from '../components/InlineFlex'

interface ShadedSquareProps {
  children: React.ReactNode
  noPadding?: boolean
}

const ShadedSquare: React.SFC<ShadedSquareProps> = ({
  children,
  noPadding
}) => (
  <InlineFlex
    bg="lightYellow"
    borderRadius={5}
    px={noPadding ? 0 : 3}
    py={noPadding ? 0 : 2}
    alignItems="center"
  >
    {children}
  </InlineFlex>
)

ShadedSquare.defaultProps = {
  noPadding: false
}

export default ShadedSquare
