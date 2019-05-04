/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { zIndices } from 'src/lib/theme'
import AlphaConvertBadge from 'src/components/Yc/AlphaConvertBadge'

interface EmojiForLetterWithAlphaConvertBadgeProps {
  alphaConvertCount: number
  children: React.ReactNode
}

const EmojiForLetterWithAlphaConvertBadge = ({
  alphaConvertCount,
  children
}: EmojiForLetterWithAlphaConvertBadgeProps) => {
  return (
    <span
      css={css`
        position: relative;
      `}
    >
      <span
        css={[
          css`
            position: absolute;
            top: -0.2em;
            font-size: 1.3em;
            z-index: ${zIndices('badge')};
            right: -0.15em;
          `
        ]}
      >
        <AlphaConvertBadge count={alphaConvertCount} />
      </span>
      {children}
    </span>
  )
}

export default EmojiForLetterWithAlphaConvertBadge
