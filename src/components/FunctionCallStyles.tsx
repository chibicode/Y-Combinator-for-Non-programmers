import { css } from 'emotion'
import React from 'react'

const FunctionCallStyles: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div
    className={css`
      line-height: 1;
      white-space: nowrap;
    `}
  >
    {children}
  </div>
)

export default FunctionCallStyles
