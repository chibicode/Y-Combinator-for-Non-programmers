import { css, cx } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface TopLeftBadgeProps {
  topLeftBadgeType: Exclude<VariableExpression['topLeftBadgeType'], 'none'>
  inline?: boolean
}

const topLeftBadgeTypeToEmoji = (x: TopLeftBadgeProps['topLeftBadgeType']) =>
  ({
    betaReduced: '🆕',
    match: '☑️',
    unmatch: '❌',
    conflict: '🔀',
    conflictResolved: '🆕'
  }[x])

const TopLeftBadge: React.SFC<TopLeftBadgeProps> = ({
  topLeftBadgeType,
  inline
}) => (
  <span
    className={cx(
      css`
        align-items: center;
        justify-content: center;
      `,
      {
        [css`
          display: flex;
          font-size: 0.5em;
        `]: !inline,
        [css`
          display: inline-flex;
          font-size: 1em;
          transform: translateY(0.15em);
        `]: inline
      }
    )}
  >
    <Emoji noVerticalTransform>
      {topLeftBadgeTypeToEmoji(topLeftBadgeType)}
    </Emoji>
  </span>
)

export default TopLeftBadge
