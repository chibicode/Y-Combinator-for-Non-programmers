import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'
import crossSvg from 'src/images/cross.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  highlightType: VariableExpression['highlightType'] | 'none'
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
  topLeftBadgeType: VariableExpression['topLeftBadgeType']
  children: React.ReactNode
}

const background = (
  highlightType: VariableExpression['highlightType'] | 'none',
  isDoneOrReady: boolean
): string | undefined => {
  switch (highlightType) {
    case 'default': {
      return css`
        background: ${colors(isDoneOrReady ? 'white' : 'indigo50')};
      `
    }
    case 'removed':
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
    case 'highlighted': {
      return css`
        background: ${colors('yellow100')};
      `
    }
    case 'highlightedNoEmphBorder': {
      return css`
        background: ${colors('yellow100')};
      `
    }
    case 'conflictResolvedCallArg':
    case 'conflictFuncUnbound':
    case 'conflictFuncBound':
    case 'conflictCallArg': {
      return css`
        background: ${colors('lightBlue50')};
      `
    }
    case 'conflictResolvedFuncUnbound':
    case 'conflictResolvedBound': {
      return css`
        background: ${colors('lightGreen100')};
      `
    }
  }
}

const Cross: React.SFC<{}> = () => (
  <div
    className={css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: ${zIndices('cross')};
      background-image: url(${crossSvg});
      background-size: 100% 100%;
    `}
  />
)

const BorderWrapper: React.SFC<BorderWrapperProps> = ({
  highlightType,
  bottomRightBadgeType,
  topLeftBadgeType,
  children
}) => (
  <ExpressionRunnerContext.Consumer>
    {({ isDoneOrReady }) => (
      <Flex
        className={cx(
          css`
            margin: -2px;
            border: 2px solid ${colors('indigo300')};
            align-items: center;
            flex: 1;
            position: relative;
          `,
          background(highlightType, isDoneOrReady),
          {
            [css`
              border-right: 5px solid ${colors('yellow900')};
            `]:
              highlightType === 'highlighted' &&
              bottomRightBadgeType === 'funcBound' &&
              topLeftBadgeType === 'none',
            [css`
              border-left: 5px solid ${colors('pink400')};
            `]:
              highlightType === 'highlighted' &&
              bottomRightBadgeType === 'funcArg' &&
              topLeftBadgeType === 'none'
          }
        )}
      >
        {highlightType === 'removed' && <Cross />}
        {children}
      </Flex>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default BorderWrapper
