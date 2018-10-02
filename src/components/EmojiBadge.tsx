import { css, cx } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import { ExpressionHighlighterContextProps } from 'src/components/Yc/ExpressionHighlighterContext'
import { colors } from 'src/lib/theme'

interface EmojiBadgeProps {
  state: 'highlighted' | 'justHighlighted'
  badgeType: Required<ExpressionHighlighterContextProps>['highlightType']
}

const stateToColors = (x: EmojiBadgeProps['state']) =>
  ({
    highlighted: css`
      border-color: ${colors('indigo300')};
    `,
    justHighlighted: css`
      border-color: ${colors('yellow700')};
    `
  }[x])

const badgeTypeToEmoji = (x: EmojiBadgeProps['badgeType']) =>
  ({
    callArg: '👨‍🍳',
    funcArg: '😋',
    funcBody: '🍽'
  }[x])

const EmojiBadge: React.SFC<EmojiBadgeProps> = ({ state, badgeType }) => (
  <span
    className={cx(
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        /* Font size varies depending on emoji size */
        font-size: 0.45em;
        width: 1.6em;
        height: 1.6em;
        border-radius: 100%;
        border-width: 2px;
        border-style: solid;
        background-color: #fff;
      `,
      stateToColors(state)
    )}
  >
    <Emoji noVerticalTransform>{badgeTypeToEmoji(badgeType)}</Emoji>
  </span>
)

export default EmojiBadge
