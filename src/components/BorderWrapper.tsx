/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React, { useContext } from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { zIndices, colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/ExpressionTypes'
import ConditionalContext from 'src/components/ConditionalContext'

export interface BorderWrapperProps {
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
  topLeftBadgeType: VariableExpression['topLeftBadgeType']
  children: React.ReactNode
  isQuestion: boolean
  highlightType:
    | VariableExpression['highlightType']
    | 'none'
    | 'pink'
    | 'blue'
    | 'grey'
  highlightOverridden: boolean
  topLevel: boolean
}

const background = ({
  highlightType,
  isDoneOrReady,
  topLeftBadgeType,
  isQuestion,
  started,
  conditionalActive
}: {
  highlightType: BorderWrapperProps['highlightType']
  isDoneOrReady: boolean
  topLeftBadgeType: BorderWrapperProps['topLeftBadgeType']
  isQuestion: boolean
  started: boolean
  conditionalActive?: boolean
}): SerializedStyles | undefined => {
  if (isQuestion) {
    if (highlightType === 'highlighted') {
      return css`
        background: ${colors('indigo400MixYellow')};
      `
    } else {
      return css`
        background: ${colors('indigo400')};
      `
    }
  }
  if (conditionalActive) {
    return css`
      background: ${colors('white')};
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
    case 'grey': {
      return css`
        background: ${colors('grey150')};
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
    case 'blue':
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
  isQuestion,
  topLevel
}: BorderWrapperProps) => {
  const { isDoneOrReady, started } = useContext(ExpressionRunnerContext)
  const { conditionalOutermostState } = useContext(ConditionalContext)
  return (
    <Flex
      css={[
        css`
          align-items: center;
          flex: 1;
          position: relative;
        `,
        background({
          highlightType,
          isDoneOrReady,
          topLeftBadgeType,
          isQuestion,
          started,
          conditionalActive:
            conditionalOutermostState && conditionalOutermostState !== 'default'
        })
      ]}
    >
      <span
        css={[
          css`
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-top: 2px solid ${colors('indigo300')};
            border-left: 2px solid ${colors('indigo300')};
            z-index: ${zIndices('border')};
          `,
          topLevel &&
            css`
              border-bottom: 2px solid ${colors('indigo300')};
              border-right: 2px solid ${colors('indigo300')};
            `
        ]}
      />
      {highlightType === 'highlighted' &&
        bottomRightBadgeType === 'funcBound' &&
        topLeftBadgeType === 'none' &&
        !highlightOverridden && (
          <span
            css={css`
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              width: 10px;
              background: ${colors('yellow900')};
            `}
          />
        )}
      {highlightType === 'highlighted' &&
        bottomRightBadgeType === 'funcArg' &&
        topLeftBadgeType === 'none' &&
        !highlightOverridden && (
          <span
            css={css`
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              width: 10px;
              background: ${colors('pink400')};
            `}
          />
        )}
      {children}
    </Flex>
  )
}

BorderWrapper.defaultProps = {
  topLevel: false
}

export default BorderWrapper
