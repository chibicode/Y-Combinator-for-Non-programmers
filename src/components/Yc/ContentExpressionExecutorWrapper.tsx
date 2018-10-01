import { css } from 'emotion'
import React from 'react'
import { maxWidths } from 'src/lib/theme'

const ContentExecutionExecutorWrapper: React.SFC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div
    className={css`
      max-width: ${maxWidths('xxs')};
      margin: 0 auto;
    `}
  >
    {children}
  </div>
)

export default ContentExecutionExecutorWrapper
