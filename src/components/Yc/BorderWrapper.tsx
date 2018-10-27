import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import bubbleGreySvg from 'src/images/bubble-grey.url.svg'
import bubbleSvg from 'src/images/bubble.url.svg'
import crossSvg from 'src/images/cross.url.svg'
import starSvg from 'src/images/star.url.svg'
import stripeReverseSvg from 'src/images/stripe-reverse.url.svg'
import stripeSvg from 'src/images/stripe.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  highlightType: VariableExpression['highlightType'] | 'none'
  children: React.ReactNode
}

const background = (
  highlightType: VariableExpression['highlightType'] | 'none',
  variableSize: ExpressionRunnerContextProps['variableSize']
): string | undefined => {
  switch (highlightType) {
    case 'default': {
      return css`
        background: ${colors('indigo50')};
      `
    }
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
        background ${colors('yellow100')}
      `
    }
    case 'unboundHighlighted': {
      return css`
        background ${colors('grey100')}
      `
    }
    case 'match': {
      return css`
        background-image: url(${starSvg});
        background-size: ${variableSize === 'lg' ? 2 : 1}rem
          ${variableSize === 'lg' ? 2 : 1}rem;
        background-position: center center;
      `
    }
    case 'conflictFuncUnbound': {
      return css`
        background-image: url(${stripeSvg});
        background-size: ${variableSize === 'lg' ? 2 : 1}rem
          ${variableSize === 'lg' ? 2 : 1}rem;
        background-position: center center;
      `
    }
    case 'conflictCallArg': {
      return css`
        background-image: url(${stripeReverseSvg});
        background-size: ${variableSize === 'lg' ? 2 : 1}rem
          ${variableSize === 'lg' ? 2 : 1}rem;
        background-position: center center;
      `
    }
    case 'conflictResolvedFuncUnbound': {
      return css`
        background-image: url(${bubbleGreySvg});
        background-size: ${variableSize === 'lg' ? 2 : 1}rem
          ${variableSize === 'lg' ? 2 : 1}rem;
        background-position: center center;
      `
    }
    case 'conflictResolvedBound': {
      return css`
        background-image: url(${bubbleSvg});
        background-size: ${variableSize === 'lg' ? 2 : 1}rem
          ${variableSize === 'lg' ? 2 : 1}rem;
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
  children
}) => (
  <ExpressionRunnerContext.Consumer>
    {({ variableSize }) => (
      <Flex
        className={cx(
          css`
            margin: -2px;
            border: 2px solid ${colors('indigo300')};
            align-items: center;
            flex: 1;
            position: relative;
          `,
          background(highlightType, variableSize)
        )}
      >
        {highlightType === 'removed' && <Cross />}
        {children}
      </Flex>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default BorderWrapper
