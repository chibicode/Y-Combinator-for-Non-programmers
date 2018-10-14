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
import bubbleSvg from 'src/images/bubble.url.svg'
import crossSvg from 'src/images/cross.url.svg'
import starSvg from 'src/images/star.url.svg'
import stripeReverseSvg from 'src/images/stripe-reverse.url.svg'
import stripeSvg from 'src/images/stripe.url.svg'
import { colors, zIndices } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'
import { AllExpressionStates } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

interface BorderWrapperProps {
  children: React.ReactNode
  state: AllExpressionStates
  childVariableName?: VariableNames
  childVariableHighlightType?: ExpressionHighlighterContextProps['highlightType']
  childVariableJustAlphaConverted?: boolean
  childVariableWillBeBetaReduced?: boolean
  childWasJustBetaReduced?: boolean
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
  childVariableWillBeBetaReduced,
  justBetaReduced
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
  childVariableWillBeBetaReduced?: boolean
  justBetaReduced?: boolean
}) => {
  if (betaReducePreview) {
    if (
      (betaReducePreview === 'before' &&
        (childVariableHighlightType === 'callArg' ||
          childVariableHighlightType === 'funcArg')) ||
      childVariableWillBeBetaReduced
    ) {
      if (childVariableWillBeBetaReduced) {
        return css`
          background-image: url(${starSvg});
          background-size: ${variableSize === 'lg' ? 2 : 1}rem
            ${variableSize === 'lg' ? 2 : 1}rem;
          background-position: center center;
        `
      } else {
        return css`
          background-color: ${colors('yellow50')};
        `
      }
    } else if (
      ((betaReducePreview === 'after' || betaReducePreview === 'crossed') &&
        (childVariableHighlightType === 'callArg' ||
          childVariableHighlightType === 'funcArg')) ||
      justBetaReduced
    ) {
      if (justBetaReduced && betaReducePreview === 'after') {
        return css`
          background-image: url(${starSvg});
          background-size: ${variableSize === 'lg' ? 2 : 1}rem
            ${variableSize === 'lg' ? 2 : 1}rem;
          background-position: center center;
        `
      } else {
        return css`
          background-color: ${colors('yellow50')};
        `
      }
    } else {
      return css`
        background: ${colors('indigo50')};
      `
    }
  } else if (childVariableJustAlphaConverted) {
    return css`
      background-image: url(${bubbleSvg});
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
        ? stripeReverseSvg
        : stripeSvg});
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
      background-image: url(${crossSvg});
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
  childVariableWillBeBetaReduced,
  childWasJustBetaReduced
}) => (
  <ExpressionBetaReducePreviewContext.Consumer>
    {({ betaReducePreview, wasJustBetaReduced }) => (
      <ExpressionBetaReducePreviewContext.Provider
        value={{
          betaReducePreview,
          wasJustBetaReduced: wasJustBetaReduced || childWasJustBetaReduced
        }}
      >
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
                          childVariableWillBeBetaReduced,
                          justBetaReduced:
                            wasJustBetaReduced || childWasJustBetaReduced
                        })
                      )}
                    >
                      {betaReducePreview === 'crossed' &&
                        (childVariableHighlightType === 'callArg' ||
                          childVariableHighlightType === 'funcArg') && (
                          <Cross />
                        )}
                      {children}
                    </Flex>
                  )}
                </AlphaConvertContext.Consumer>
              )}
            </ExpressionReadyToHighlightContext.Consumer>
          )}
        </ExpressionRunnerContext.Consumer>
      </ExpressionBetaReducePreviewContext.Provider>
    )}
  </ExpressionBetaReducePreviewContext.Consumer>
)

export default BorderWrapper
