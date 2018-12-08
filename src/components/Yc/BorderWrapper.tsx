import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import crossSvg from 'src/images/cross.url.svg'
import starSvg from 'src/images/star.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  highlightType: VariableExpression['highlightType'] | 'none'
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
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
    case 'semiTransparent': {
      return css`
        background: ${colors('grey200')};
      `
    }
    case 'highlighted': {
      return css`
        background: ${colors('yellow100')};
      `
    }
    case 'unmatch': {
      return css`
        background: ${colors('pink50')};
      `
    }
    case 'highlightedNoEmphBorder': {
      return css`
        background: ${colors('yellow100')};
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
              border-right: 5px solid ${colors('yellow900')};
            `]:
              highlightType === 'highlighted' &&
              bottomRightBadgeType === 'funcBound',
            [css`
              border-left: 5px solid ${colors('pink400')};
            `]:
              highlightType === 'highlighted' &&
              bottomRightBadgeType === 'funcArg'
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
