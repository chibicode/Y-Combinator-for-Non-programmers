/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React, { useContext } from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext, {
  HighlightOverrides
} from 'src/components/Yc/ExpressionRunnerContext'
import { colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  highlightType: HighlightOverrides
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
  topBadgeType: VariableExpression['topBadgeType']
  children: React.ReactNode
}

const background = (
  highlightType: BorderWrapperProps['highlightType'],
  isDoneOrReady: boolean,
  topBadgeType: BorderWrapperProps['topBadgeType']
): SerializedStyles | undefined => {
  switch (highlightType) {
    case 'default': {
      return css`
        background: ${colors(isDoneOrReady ? 'white' : 'indigo50')};
      `
    }
    case 'removed': {
      return css`
        background: ${colors('deepOrange50')};
      `
    }
    case 'active': {
      return css`
        background: ${colors('white')};
      `
    }
    case 'activeEmphasizePriority': {
      return css`
        background: ${colors('white')};
      `
    }
    case 'forceYellowHighlight': {
      return css`
        background: ${colors('yellow100')};
      `
    }
    case 'highlighted': {
      if (topBadgeType === 'match') {
        return css`
          background: ${colors('green50')};
        `
      } else if (topBadgeType === 'unmatch') {
        return css`
          background: ${colors('purple50')};
        `
      } else if (
        topBadgeType === 'betaReduced' ||
        topBadgeType === 'betaReduceCallArg'
      ) {
        return css`
          background: ${colors('blue50')};
        `
      } else {
        return css`
          background: ${colors('yellow100')};
        `
      }
    }
    default: {
      return undefined
    }
  }
}

const BorderWrapper = ({
  highlightType,
  bottomRightBadgeType,
  topBadgeType,
  children
}: BorderWrapperProps) => {
  const { isDoneOrReady, highlightOverrides } = useContext(
    ExpressionRunnerContext
  )
  return (
    <Flex
      css={[
        css`
          margin: -2px;
          border: 2px solid ${colors('indigo300')};
          align-items: center;
          flex: 1;
          position: relative;
        `,
        background(
          highlightOverrides[bottomRightBadgeType] || highlightType,
          isDoneOrReady,
          topBadgeType
        ),
        highlightType === 'highlighted' &&
          bottomRightBadgeType === 'funcBound' &&
          topBadgeType === 'none' &&
          css`
            border-right: 10px solid ${colors('yellow900')};
          `,
        highlightType === 'highlighted' &&
          bottomRightBadgeType === 'funcArg' &&
          topBadgeType === 'none' &&
          css`
            border-left: 10px solid ${colors('pink400')};
          `
      ]}
    >
      {children}
    </Flex>
  )
}

export default BorderWrapper
