import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionReadyToHighlightContext from 'src/components/Yc/ExpressionReadyToHighlightContext'
import colors, { allColors } from 'src/lib/theme/colors'
import { AllExpressionStates } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  children: React.ReactNode
  // TODO: Make state a type
  // Use lookup types https://stackoverflow.com/a/49286056/114157
  state: AllExpressionStates
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
    case 'justBetaReduced':
      return 'yellow100'
  }
}

const BorderWrapper: React.SFC<BorderWrapperProps> = ({ children, state }) => (
  <ExpressionReadyToHighlightContext.Consumer>
    {({ readyToHighlight, disableReadyToHighlightColoring }) => (
      <Flex
        className={css`
          margin: -2px;
          border: 2px solid ${colors('indigo300')};
          align-items: center;
          background: ${colors(
            stateToColor(state) ||
              readyToHighlightToColor(
                disableReadyToHighlightColoring || readyToHighlight
              )
          )};
          flex: 1;
        `}
      >
        {children}
      </Flex>
    )}
  </ExpressionReadyToHighlightContext.Consumer>
)

export default BorderWrapper
