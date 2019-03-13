/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import CardContext from 'src/components/CardContext'
export const jsxBabelFix = jsx

export const Strong = styled.strong`
  font-weight: bold;
`

export const Em = (props: JSX.IntrinsicElements['em']) => (
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
