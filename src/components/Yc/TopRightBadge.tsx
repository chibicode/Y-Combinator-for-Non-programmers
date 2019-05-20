/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors } from 'src/lib/theme'

export interface TopRightBadgeProps {
  topRightBadgeType: 'pred'
  inline?: boolean
}

const topRightBadgeTypeToText = (x: TopRightBadgeProps['topRightBadgeType']) =>
  ({
    pred: '–1'
  }[x])

const TopRightBadge = ({ topRightBadgeType, inline }: TopRightBadgeProps) => (
  <span
    css={[
      css`
        align-items: center;
        justify-content: center;
        color: ${colors('white')};
        line-height: 1;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 100%;
        border-width: 2px;
        border-style: solid;
        background: ${colors('grey700')};
        border-color: ${colors('grey800')};
      `,
      !inline &&
        css`
          display: flex;
          font-size: 0.4em;
          width: 1.4em;
          height: 1.4em;
        `,
      inline &&
        css`
          display: inline-flex;
          font-size: 0.85em;
          width: 1.3em;
          height: 1.3em;
          transform: translateY(-0.1em);
        `
    ]}
  >
    {topRightBadgeTypeToText(topRightBadgeType)}
  </span>
)

export default TopRightBadge
