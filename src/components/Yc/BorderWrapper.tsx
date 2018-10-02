import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import ExpressionHighlighterContext, {
  ExpressionHighlighterContextProps
} from 'src/components/Yc/ExpressionHighlighterContext'
import colors, { allColors } from 'src/lib/theme/colors'
import { AllExpressionStates } from 'src/types/yc/ExpressionTypes'

interface BorderWrapperProps {
  children: React.ReactNode
  // TODO: Make state a type
  // Use lookup types https://stackoverflow.com/a/49286056/114157
  state: AllExpressionStates
}

const stateToColor = (
  x: AllExpressionStates
): keyof typeof allColors | undefined => {
  switch (x) {
    case 'justHighlighted':
      return 'yellow100'
    case 'highlighted':
      return 'yellow100'
  }
}

const contextState = (
  x: AllExpressionStates
): ExpressionHighlighterContextProps['state'] => {
  switch (x) {
    case 'justHighlighted':
    case 'highlighted':
      return x
    default:
      return 'default'
  }
}

const BorderWrapper: React.SFC<BorderWrapperProps> = ({ children, state }) => (
  <ExpressionHighlighterContext.Provider
    value={{
      state: contextState(state)
    }}
  >
    <Flex
      className={css`
        margin: -2px;
        border: 2px solid ${colors('indigo300')};
        align-items: center;
        background: ${colors(stateToColor(state) || 'white')};
        flex: 1;
      `}
    >
      {children}
    </Flex>
  </ExpressionHighlighterContext.Provider>
)

export default BorderWrapper
