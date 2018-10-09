import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import AlphaConvertContext, {
  AlphaConvertContextProps
} from 'src/components/Yc/AlphaConvertContext'
import ExpressionBetaReducePreviewContext, {
  ExpressionBetaReducePreviewContextProps
} from 'src/components/Yc/ExpressionBetaReducePreviewContext'
import { ExpressionHighlighterContextProps } from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionReadyToHighlightContext, {
  ExpressionReadyToHighlightContextProps
} from 'src/components/Yc/ExpressionReadyToHighlightContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { colors, zIndices } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'
import {
  AllExpressionStates,
  BetaReducePreview
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

interface BorderWrapperProps {
  children: React.ReactNode
  state: AllExpressionStates
  childVariableName?: VariableNames
  childVariableHighlightType?: ExpressionHighlighterContextProps['highlightType']
  childVariableJustAlphaConverted?: boolean
  childVariableBetaReducePreview?: BetaReducePreview
}

export const readyToHighlightToColor = (x?: boolean) =>
  x ? 'white' : 'indigo50'

const stateToColor = (
  x: AllExpressionStates
): keyof typeof allColors | undefined => {
  switch (x) {
    case 'justHighlighted':
      return 'yellow100'
    case 'highlighted':
      return 'yellow50'
  }
}

const background = ({
  state,
  disableReadyToHighlightColoring,
  readyToHighlight,
  conflictingVariableNames,
  childVariableName,
  variableSize,
  childVariableHighlightType,
  childVariableJustAlphaConverted,
  betaReducePreview,
  childVariableBetaReducePreview
}: {
  state: BorderWrapperProps['state']
  readyToHighlight?: ExpressionReadyToHighlightContextProps['readyToHighlight']
  disableReadyToHighlightColoring?: ExpressionReadyToHighlightContextProps['disableReadyToHighlightColoring']
  conflictingVariableNames?: AlphaConvertContextProps['conflictingVariableNames']
  childVariableName?: BorderWrapperProps['childVariableName']
  variableSize: ExpressionRunnerContextProps['variableSize']
  childVariableHighlightType?: BorderWrapperProps['childVariableHighlightType']
  childVariableJustAlphaConverted?: BorderWrapperProps['childVariableJustAlphaConverted']
  betaReducePreview?: ExpressionBetaReducePreviewContextProps['betaReducePreview']
  childVariableBetaReducePreview?: BetaReducePreview
}) => {
  if (betaReducePreview) {
    if (
      (betaReducePreview === 'before' &&
        (childVariableHighlightType === 'callArg' ||
          childVariableHighlightType === 'funcArg')) ||
      childVariableBetaReducePreview
    ) {
      return css`
        background: ${colors('yellow50')};
      `
    } else if (
      (betaReducePreview === 'after' &&
        (childVariableHighlightType === 'callArg' ||
          childVariableHighlightType === 'funcArg')) ||
      childVariableBetaReducePreview
    ) {
      return css`
        background: ${colors('yellow50')};
      `
    } else {
      return css`
        background: ${colors('indigo50')};
      `
    }
  } else if (childVariableJustAlphaConverted) {
    return css`
      background-image: url('/static/images/star.svg');
      background-size: ${variableSize === 'lg' ? 2 : 1}rem
        ${variableSize === 'lg' ? 2 : 1}rem;
      background-position: center center;
    `
  } else if (
    conflictingVariableNames &&
    conflictingVariableNames.length &&
    childVariableName &&
    conflictingVariableNames.includes(childVariableName) &&
    (childVariableHighlightType === 'callArg' ||
      childVariableHighlightType === 'funcBody')
  ) {
    return css`
      background-image: url(${childVariableHighlightType === 'callArg'
        ? '/static/images/bubble.svg'
        : '/static/images/stripe.svg'});
      background-size: ${variableSize === 'lg' ? 2 : 1}rem
        ${variableSize === 'lg' ? 2 : 1}rem;
      background-position: center center;
    `
  } else {
    return css`
      background: ${colors(
        stateToColor(state) ||
          readyToHighlightToColor(
            disableReadyToHighlightColoring || readyToHighlight
          )
      )};
    `
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
      background-image: url('/static/images/cross.svg');
      background-size: 100% 100%;
    `}
  />
)

const BorderWrapper: React.SFC<BorderWrapperProps> = ({
  children,
  state,
  childVariableName,
  childVariableHighlightType,
  childVariableJustAlphaConverted,
  childVariableBetaReducePreview
}) => (
  <ExpressionBetaReducePreviewContext.Consumer>
    {({ betaReducePreview }) => (
      <ExpressionRunnerContext.Consumer>
        {({ variableSize }) => (
          <ExpressionReadyToHighlightContext.Consumer>
            {({ readyToHighlight, disableReadyToHighlightColoring }) => (
              <AlphaConvertContext.Consumer>
                {({ conflictingVariableNames }) => (
                  <Flex
                    className={cx(
                      css`
                        margin: -2px;
                        border: 2px solid ${colors('indigo300')};
                        align-items: center;
                        flex: 1;
                        position: relative;
                      `,
                      background({
                        state,
                        betaReducePreview,
                        disableReadyToHighlightColoring,
                        readyToHighlight,
                        conflictingVariableNames,
                        childVariableName,
                        variableSize,
                        childVariableHighlightType,
                        childVariableJustAlphaConverted,
                        childVariableBetaReducePreview
                      })
                    )}
                  >
                    {betaReducePreview === 'after' &&
                      (childVariableHighlightType === 'callArg' ||
                        childVariableHighlightType === 'funcArg') && <Cross />}
                    {children}
                  </Flex>
                )}
              </AlphaConvertContext.Consumer>
            )}
          </ExpressionReadyToHighlightContext.Consumer>
        )}
      </ExpressionRunnerContext.Consumer>
    )}
  </ExpressionBetaReducePreviewContext.Consumer>
)

export default BorderWrapper
