import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import AlphaConvertContext, {
  AlphaConvertContextProps
} from 'src/components/Yc/AlphaConvertContext'
import ExpressionReadyToHighlightContext, {
  ExpressionReadyToHighlightContextProps
} from 'src/components/Yc/ExpressionReadyToHighlightContext'
import colors, { allColors } from 'src/lib/theme/colors'
import { AllExpressionStates } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'

interface BorderWrapperProps {
  children: React.ReactNode
  state: AllExpressionStates
  childVariableName?: VariableNames
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
  variableSize
}: {
  state: BorderWrapperProps['state']
  readyToHighlight?: ExpressionReadyToHighlightContextProps['readyToHighlight']
  disableReadyToHighlightColoring?: ExpressionReadyToHighlightContextProps['disableReadyToHighlightColoring']
  conflictingVariableNames?: AlphaConvertContextProps['conflictingVariableNames']
  childVariableName?: BorderWrapperProps['childVariableName']
  variableSize: ExpressionRunnerContextProps['variableSize']
}) => {
  if (
    conflictingVariableNames &&
    conflictingVariableNames.length &&
    childVariableName &&
    conflictingVariableNames.includes(childVariableName)
  ) {
    return css`
      background-image: url(/static/images/bubble.svg);
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
  childVariableName
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
                    variableSize
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
