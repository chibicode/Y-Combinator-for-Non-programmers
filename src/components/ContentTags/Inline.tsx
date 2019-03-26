/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import styled from '@emotion/styled'
import CardThemeContext from 'src/components/CardThemeContext'
export const jsxBabelFix = jsx

export const Strong = styled.strong`
  font-weight: bold;
`

export const Em = (props: JSX.IntrinsicElements['em']) => {
  const { emBackgroundColor, emForegroundColor } = useContext(CardThemeContext)
  return (
    <em
      {...props}
      css={css`
        font-style: normal;
        background: ${emBackgroundColor};
        color: ${emForegroundColor || 'inherit'};
      `}
    />
  )
}
