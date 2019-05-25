/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React, { useContext } from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/ExpressionTypes'

export interface BorderWrapperProps {
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
  topLeftBadgeType: VariableExpression['topLeftBadgeType']
  children: React.ReactNode
  isQuestion: boolean
  highlightType: VariableExpression['highlightType'] | 'none' | 'pink'
  highlightOverridden: boolean
}

const background = (
  highlightType: BorderWrapperProps['highlightType'],
  isDoneOrReady: boolean,
  topLeftBadgeType: BorderWrapperProps['topLeftBadgeType'],
  isQuestion: boolean,
  started: boolean
): SerializedStyles | undefined => {
  if (isQuestion) {
    return css`
      background: ${colors('indigo400')};
    `
  }
  switch (highlightType) {
    case 'initialHighlighted': {
      return css`
        background: ${colors(
          started ? (isDoneOrReady ? 'white' : 'indigo50') : 'yellow100'
        )};
      `
    }
    case 'pink': {
      return css`
        background: ${colors('pink50')};
      `
    }
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
    case 'betaReduceCallArgHighlighted': {
      return css`
        background: ${colors('blue50')};
      `
    }
    case 'conflictResolvedHighlighted': {
      return css`
        background: ${colors('cyan50')};
      `
    }
    case 'highlighted': {
      if (topLeftBadgeType === 'match') {
        return css`
          background: ${colors('green50')};
        `
      } else if (topLeftBadgeType === 'unmatch') {
        return css`
          background: ${colors('purple50')};
        `
      } else if (topLeftBadgeType === 'betaReduced') {
        return css`
          background: ${colors('blue50')};
        `
      } else if (topLeftBadgeType === 'conflict') {
        return css`
          background: ${colors('brown50')};
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
  highlightOverridden,
  bottomRightBadgeType,
  topLeftBadgeType,
  children,
  isQuestion
}: BorderWrapperProps) => {
  const { isDoneOrReady, started } = useContext(ExpressionRunnerContext)
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
          highlightType,
          isDoneOrReady,
          topLeftBadgeType,
          isQuestion,
          started
        ),
        highlightType === 'highlighted' &&
          bottomRightBadgeType === 'funcBound' &&
          topLeftBadgeType === 'none' &&
          !highlightOverridden &&
          css`
            border-right: 10px solid ${colors('yellow900')};
          `,
        highlightType === 'highlighted' &&
          bottomRightBadgeType === 'funcArg' &&
          topLeftBadgeType === 'none' &&
          !highlightOverridden &&
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
