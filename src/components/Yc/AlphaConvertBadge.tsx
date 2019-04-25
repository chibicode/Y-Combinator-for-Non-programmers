/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'

interface AlphaConvertBadge {
  inline?: boolean
  count: number
}

const AlphaConvertBadge = ({ count, inline }: AlphaConvertBadge) => (
  <span
    css={[
      css`
        align-items: center;
        justify-content: center;
      `,
      !inline &&
        css`
          display: flex;
          position: relative;
          font-size: ${count > 1 ? '0.5em' : '0.6em'};
          top: ${count > 1 ? '0.15em' : 0};
          left: ${count > 1 ? '-0.05em' : '0.05em'};
        `,
      inline &&
        css`
          display: inline-flex;
          font-size: 1em;
          transform: translateY(0.15em);
        `
    ]}
  >
    <Emoji size="sm" noVerticalTransform>
      {count > 1 ? '🍵' : '🥤'}
    </Emoji>
  </span>
)

export default AlphaConvertBadge
