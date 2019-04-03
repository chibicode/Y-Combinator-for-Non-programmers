/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface TopBadgeProps {
  topBadgeType: Exclude<VariableExpression['topBadgeType'], 'none'>
  inline?: boolean
}

const topBadgeTypeToEmoji = (
  x: Exclude<TopBadgeProps['topBadgeType'], 'betaReduceCallArg'>
) =>
  ({
    betaReduced: '↘',
    match: '✅',
    unmatch: '❌',
    conflict: '🔀',
    conflictResolved: '🆕'
  }[x])

const TopBadge = ({ topBadgeType, inline }: TopBadgeProps) => (
  <span
    css={[
      css`
        align-items: center;
        justify-content: center;
      `,
      !inline &&
        css`
          display: flex;
          font-size: 0.5em;
        `,
      inline &&
        css`
          display: inline-flex;
          font-size: 1em;
          transform: translateY(0.15em);
        `
    ]}
  >
    {topBadgeType !== 'betaReduceCallArg' && (
      <Emoji noVerticalTransform>{topBadgeTypeToEmoji(topBadgeType)}</Emoji>
    )}
  </span>
)

export default TopBadge
