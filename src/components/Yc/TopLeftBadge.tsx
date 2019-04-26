/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface TopLeftBadgeProps {
  topLeftBadgeType: Exclude<VariableExpression['topLeftBadgeType'], 'none'>
  inline?: boolean
}

const topLeftBadgeTypeToEmoji = (x: TopLeftBadgeProps['topLeftBadgeType']) =>
  ({
    betaReduced: '↘',
    match: '✅',
    unmatch: '❌',
    conflict: '⚠️️',
    conflictResolved: undefined
  }[x])

const TopLeftBadge = ({ topLeftBadgeType, inline }: TopLeftBadgeProps) => (
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
    {topLeftBadgeTypeToEmoji(topLeftBadgeType) && (
      <Emoji size="sm" noVerticalTransform>
        {topLeftBadgeTypeToEmoji(topLeftBadgeType)}
      </Emoji>
    )}
  </span>
)

export default TopLeftBadge
