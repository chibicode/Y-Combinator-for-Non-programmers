/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { zIndices } from 'src/lib/theme'
import BottomRightBadge, {
  BottomRightBadgeProps
} from 'src/components/BottomRightBadge'

interface EmojiForLetterWithBottomRightBadgeWrapperProps {
  bottomRightBadgeType: BottomRightBadgeProps['bottomRightBadgeType']
  children: React.ReactNode
}

const EmojiForLetterWithBottomRightBadgeWrapper = ({
  bottomRightBadgeType,
  children
}: EmojiForLetterWithBottomRightBadgeWrapperProps) => {
  return (
    <span
      css={css`
        position: relative;
        margin-right: 0.15em;
      `}
    >
      <span
        css={[
          css`
            position: absolute;
            bottom: -0.15em;
            font-size: 1.3em;
            z-index: ${zIndices('badge')};
            right: -0.15em;
          `
        ]}
      >
        <BottomRightBadge bottomRightBadgeType={bottomRightBadgeType} />
      </span>
      {children}
    </span>
  )
}

export default EmojiForLetterWithBottomRightBadgeWrapper
