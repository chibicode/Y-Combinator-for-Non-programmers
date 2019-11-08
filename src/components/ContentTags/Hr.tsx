/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import { maxWidths, spaces, colors } from 'src/lib/theme'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'

export const Hr = (props: JSX.IntrinsicElements['hr']) => {
  const { inQuote } = useContext(BubbleQuoteContext)
  return (
    <hr
      {...props}
      css={css`
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 5px solid ${inQuote ? colors('codeBg') : colors('white')};
        margin: ${spaces(2)} auto ${spaces(2)};
        max-width: ${maxWidths('xxxs')};
      `}
    />
  )
}
