import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
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
    case 'highlighted':
      return 'blue100'
  }
}

const BorderWrapper: React.SFC<BorderWrapperProps> = ({ children, state }) => (
  <Flex
    className={css`
      margin: -2px;
      border: 2px solid ${colors('grey300')};
      align-items: center;
      background: ${colors(stateToColor(state) || 'white')};
      flex: 1;
    `}
  >
    {children}
  </Flex>
)

export default BorderWrapper
