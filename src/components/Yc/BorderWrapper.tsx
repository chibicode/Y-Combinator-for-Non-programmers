/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionRunnerContext, {
  HighlightOverrides
} from 'src/components/Yc/ExpressionRunnerContext'
import crossSvg from 'src/images/cross.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  highlightType: HighlightOverrides
  bottomRightBadgeType: VariableExpression['bottomRightBadgeType']
  topRightBadgeType: VariableExpression['topRightBadgeType']
  children: React.ReactNode
}

const background = (
  highlightType: BorderWrapperProps['highlightType'],
  isDoneOrReady: boolean,
  topRightBadgeType: BorderWrapperProps['topRightBadgeType']
): SerializedStyles | undefined => {
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
    case 'forceYellowHighlight': {
      return css`
        background: ${colors('yellow100')};
      `
    }
    case 'highlighted': {
      if (topRightBadgeType === 'match') {
        return css`
          background: ${colors('teal50')};
        `
      } else if (topRightBadgeType === 'unmatch') {
        return css`
          background: ${colors('pink50')};
        `
      } else if (
        topRightBadgeType === 'betaReduced' ||
        topRightBadgeType === 'betaReduceCallArg'
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
  }
}

const Cross: React.FunctionComponent<{}> = () => (
  <div
    css={css`
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

const BorderWrapper: React.FunctionComponent<BorderWrapperProps> = ({
  highlightType,
  bottomRightBadgeType,
  topRightBadgeType,
  children
}) => (
  <ExpressionRunnerContext.Consumer>
    {({ isDoneOrReady, highlightOverrides }) => (
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
            topRightBadgeType
          ),
          highlightType === 'highlighted' &&
            bottomRightBadgeType === 'funcBound' &&
            topRightBadgeType === 'none' &&
            css`
              border-right: 5px solid ${colors('yellow900')};
            `,
          highlightType === 'highlighted' &&
            bottomRightBadgeType === 'funcArg' &&
            topRightBadgeType === 'none' &&
            css`
              border-left: 5px solid ${colors('pink400')};
            `
        ]}
      >
        {highlightType === 'removed' && <Cross />}
        {children}
      </Flex>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default BorderWrapper
