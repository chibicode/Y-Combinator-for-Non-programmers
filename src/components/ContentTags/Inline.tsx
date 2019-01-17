/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
export const jsxBabelFix = jsx
import React from 'react'
import CardContext from 'src/components/CardContext'

export const Strong = styled.strong`
  font-weight: bold;
`

export const Em: React.FC<JSX.IntrinsicElements['em']> = ({ ...props }) => (
  <CardContext.Consumer>
    {({ emBackgroundColor, emForegroundColor }) => (
      <em
        {...props}
        css={css`
          font-style: normal;
          background: ${emBackgroundColor};
          color: ${emForegroundColor || 'inherit'};
        `}
      />
    )}
  </CardContext.Consumer>
)
