/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import { colors } from 'src/lib/theme'

export const Strong: React.FunctionComponent<
  JSX.IntrinsicElements['strong']
> = ({ ...props }) => (
  <strong
    css={css`
      font-weight: bold;
    `}
    {...props}
  />
)

export const Em: React.FunctionComponent<JSX.IntrinsicElements['em']> = ({
  ...props
}) => (
  <SectionContext.Consumer>
    {({ emBackgroundColor }) => (
      <em
        {...props}
        css={css`
          font-style: normal;
          background: ${emBackgroundColor || colors('yellow100')};
        `}
      />
    )}
  </SectionContext.Consumer>
)
