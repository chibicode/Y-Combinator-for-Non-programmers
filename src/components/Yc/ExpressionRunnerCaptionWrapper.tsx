/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { colors, fontSizes, lineHeights, spaces } from 'src/lib/theme'

const ExpressionRunnerCaptionWrapper: React.FunctionComponent<{
  pinkText?: boolean
  children: React.ReactNode
}> = ({ pinkText, children }) => (
  <div
    css={css`
      text-align: center;
      margin: ${spaces('-0.5')} -2px ${spaces(0.5)} -2px;
      font-size: ${fontSizes(0.85)};
      color: ${colors(pinkText ? 'pink400' : 'indigo300')};
      /* Use bigger line height to compensate for badges */
      line-height: ${lineHeights(2)};
    `}
  >
    {children}
  </div>
)

export default ExpressionRunnerCaptionWrapper
