/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
export const jsxBabelFix = jsx
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import { colors } from 'src/lib/theme'

export const Strong = styled.strong`
  font-weight: bold;
`

export const Em: React.FunctionComponent<JSX.IntrinsicElements['em']> = ({
  ...props
}) => (
  <SectionContext.Consumer>
    {({ emBackgroundColor, emForegroundColor }) => (
      <em
        {...props}
        css={css`
          font-style: normal;
          background: ${emBackgroundColor || colors('yellow100')};
          color: ${emForegroundColor || 'inherit'};
        `}
      />
    )}
  </SectionContext.Consumer>
)
