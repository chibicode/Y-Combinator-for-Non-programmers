import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import crossSvg from 'src/images/cross.url.svg'
import devilReverseSvg from 'src/images/devil-reverse.url.svg'
import devilSvg from 'src/images/devil.url.svg'
import starSvg from 'src/images/star.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  highlightType: VariableExpression['highlightType'] | 'none'
  badgeType: VariableExpression['badgeType']
  children: React.ReactNode
}

const background = (
  highlightType: VariableExpression['highlightType'] | 'none',
  variableSize: ExpressionRunnerContextProps['variableSize'],
  isDoneOrReady: boolean
): string | undefined => {
  switch (highlightType) {
    case 'default': {
      return css`
        background: ${colors(isDoneOrReady ? 'white' : 'indigo50')};
      `
    }
    case 'conflictResolvedCallArg':
    case 'removed':
    case 'active': {
      return css`
        background: ${colors('white')};
      `
    }
    case 'activeEmphasizePriorityOne': {
      return css`
        background: ${colors('white')};
      `
    }
    case 'highlighted': {
      return css`
        background ${colors('yellow100')};
      `
    }
    case 'highlightedNoEmphBorder': {
      return css`
        background ${colors('yellow100')};
      `
    }
    case 'unboundHighlighted': {
      return css`
        background ${colors('grey200')};
      `
    }
    case 'match': {
      return css`
        background-image: url(${starSvg});
        background-size: ${variableSize === 'lg' ? 2 : 1.5}rem
          ${variableSize === 'lg' ? 2 : 1.5}rem;
        background-position: center center;
      `
    }
    case 'conflictFuncUnbound':
    case 'conflictFuncBound':
    case 'conflictCallArg':
    case 'conflictResolvedFuncUnbound':
    case 'conflictResolvedBound': {
      return css`
        background-image: url(${devilSvg});
        background-size: ${variableSize === 'lg' ? 4 : 3}rem
          ${variableSize === 'lg' ? 4 : 3}rem;
        background-position: center center;
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
  badgeType,
  children
}) => (
  <ExpressionRunnerContext.Consumer>
    {({ variableSize, isDoneOrReady }) => (
      <Flex
        className={cx(
          css`
            margin: -2px;
            border: 2px solid ${colors('indigo300')};
            align-items: center;
            flex: 1;
            position: relative;
          `,
          background(highlightType, variableSize, isDoneOrReady),
          {
            [css`
              border-right: 5px solid ${colors('pink400')};
            `]: highlightType === 'highlighted' && badgeType === 'funcBound',
            [css`
              border-left: 5px solid ${colors('pink400')};
            `]: highlightType === 'highlighted' && badgeType === 'funcArg'
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
