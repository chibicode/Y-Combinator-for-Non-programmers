import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import AlphaConvertContext, {
  AlphaConvertContextProps
} from 'src/components/Yc/AlphaConvertContext'
import { ExpressionHighlighterContextProps } from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionReadyToHighlightContext, {
  ExpressionReadyToHighlightContextProps
} from 'src/components/Yc/ExpressionReadyToHighlightContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import colors, { allColors } from 'src/lib/theme/colors'
import { AllExpressionStates } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

interface BorderWrapperProps {
  children: React.ReactNode
  state: AllExpressionStates
  childVariableName?: VariableNames
  childVariableHighlightType?: ExpressionHighlighterContextProps['highlightType']
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
  childVariableHighlightType
}: {
  state: BorderWrapperProps['state']
  readyToHighlight?: ExpressionReadyToHighlightContextProps['readyToHighlight']
  disableReadyToHighlightColoring?: ExpressionReadyToHighlightContextProps['disableReadyToHighlightColoring']
  conflictingVariableNames?: AlphaConvertContextProps['conflictingVariableNames']
  childVariableName?: BorderWrapperProps['childVariableName']
  variableSize: ExpressionRunnerContextProps['variableSize']
  childVariableHighlightType?: BorderWrapperProps['childVariableHighlightType']
}) => {
  if (
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
      background-color: ${colors('yellow50')};
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

const BorderWrapper: React.SFC<BorderWrapperProps> = ({
  children,
  state,
  childVariableName,
  childVariableHighlightType
}) => (
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
                  `,
                  background({
                    state,
                    disableReadyToHighlightColoring,
                    readyToHighlight,
                    conflictingVariableNames,
                    childVariableName,
                    variableSize,
                    childVariableHighlightType
                  })
                )}
              >
                {children}
              </Flex>
            )}
          </AlphaConvertContext.Consumer>
        )}
      </ExpressionReadyToHighlightContext.Consumer>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default BorderWrapper
