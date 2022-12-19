import { css } from '@emotion/react'
import { colors, lineHeights, radii } from 'src/lib/theme'
import CustomEmoji from 'src/components/CustomEmoji'

const MultiplyIcon = ({ revert }: { revert?: boolean }) => (
  <span
    css={css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.6em;
      height: 1.6em;
      border-radius: ${radii(0.25)};
      color: ${colors(revert ? 'white' : 'indigo300')};
      font-size: 0.7em;
      font-weight: bold;
      line-height: ${lineHeights(1.3, { ignoreLocale: true })};
      border: 2px solid ${colors('indigo300')};
      background: ${colors(revert ? 'pink400' : 'white')};
    `}
  >
    <CustomEmoji
      noVerticalTransform
      type={revert ? 'multiplyWhite' : 'multiply'}
    />
  </span>
)

export default MultiplyIcon
