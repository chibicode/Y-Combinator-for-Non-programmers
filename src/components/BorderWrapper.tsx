import { css, SerializedStyles } from '@emotion/react'
import React, { useContext } from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { zIndices, colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/ExpressionTypes'
import ConditionalContext from 'src/components/ConditionalContext'
import BinaryContext from 'src/components/BinaryContext'

export interface BorderWrapperProps {
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
  topLeftBadgeType: VariableExpression['topLeftBadgeType']
  children: React.ReactNode
  highlightType: VariableExpression['highlightType'] | 'none'
  highlightOverridden: boolean
  topLevel: boolean
}

const background = ({
  highlightType,
  isDoneOrReady,
  topLeftBadgeType,
  started,
  conditionalActive,
  binaryActive
}: {
  highlightType: BorderWrapperProps['highlightType']
  isDoneOrReady: boolean
  topLeftBadgeType: BorderWrapperProps['topLeftBadgeType']
  started: boolean
  conditionalActive?: boolean
  binaryActive?: boolean
}): SerializedStyles | undefined => {
  if (conditionalActive) {
    return css`
      background: ${colors('transparent')};
    `
  }
  if (binaryActive) {
    return css`
      background: ${colors('transparent')};
    `
  }
  switch (highlightType) {
    case 'initialHighlighted': {
      return css`
        background: ${colors(
          started ? (isDoneOrReady ? 'transparent' : 'indigo50') : 'yellow100'
        )};
      `
    }
    case 'default': {
      return css`
        background: ${colors(isDoneOrReady ? 'transparent' : 'indigo50')};
      `
    }
    case 'removed': {
      return css`
        background: ${colors('deepOrange50')};
      `
    }
    case 'active': {
      return css`
        background: ${colors('transparent')};
      `
    }
    case 'betaReduceCallArgHighlighted': {
      return css`
        background: ${colors('blue50')};
      `
    }
    case 'conflictResolvedHighlighted': {
      return css`
        background: ${colors('brown50')};
      `
    }
    case 'highlighted': {
      if (topLeftBadgeType === 'match') {
        return css`
          background: ${colors('green50')};
        `
      } else if (topLeftBadgeType === 'unmatch') {
        return css`
          background: ${colors('deepPurple50')};
        `
      } else if (topLeftBadgeType === 'betaReduced') {
        return css`
          background: ${colors('blue50')};
        `
      } else if (topLeftBadgeType === 'conflict') {
        return css`
          background: ${colors('yellow100')};
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
  topLevel
}: BorderWrapperProps) => {
  const { isDoneOrReady, started, highlightAllChildren } = useContext(
    ExpressionRunnerContext
  )
  const { conditionalOutermostState } = useContext(ConditionalContext)
  const { inBinaryActive } = useContext(BinaryContext)

  return (
    <Flex
      css={[
        css`
          align-items: center;
          flex: 1;
          position: relative;
        `,
        background({
          highlightType: highlightAllChildren ? 'highlighted' : highlightType,
          isDoneOrReady,
          topLeftBadgeType,
          started,
          conditionalActive:
            conditionalOutermostState &&
            conditionalOutermostState !== 'default',
          binaryActive: inBinaryActive
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
          `,
          topLevel
            ? css`
                border-bottom: 2px solid ${colors('indigo300')};
                border-right: 2px solid ${colors('indigo300')};
                z-index: ${zIndices('borderToplevel')};
              `
            : css`
                z-index: ${zIndices('border')};
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
