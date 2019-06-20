import { useState, useRef } from 'react'
import ExpressionContainerManager from 'src/lib/ExpressionContainerManager'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'

const initializeExpressionManager = ({
  initializeInstructions,
  expressionContainerManager
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  expressionContainerManager: ExpressionContainerManager
}) => {
  if (initializeInstructions) {
    initializeInstructions.forEach(initializeInstruction => {
      if (initializeInstruction.type === 'stepForwardUntilContainerState') {
        expressionContainerManager.stepForwardUntilContainerState(
          initializeInstruction.state
        )
      } else if (
        initializeInstruction.type ===
        'stepForwardUntilPreviouslyChangedExpressionState'
      ) {
        expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
          initializeInstruction.state
        )
      } else if (initializeInstruction.type === 'nextIteration') {
        expressionContainerManager.stepForward()
        expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
          'default'
        )
      } else if (initializeInstruction.type === 'stepForwardUntilTheEnd') {
        expressionContainerManager.stepForwardUntilTheEnd()
      }
    })

    expressionContainerManager.minimumIndex =
      expressionContainerManager.currentIndex
  }

  return expressionContainerManager
}

const useExpressionContainerManager = ({
  initializeInstructions,
  expressionContainer,
  lastAllowedExpressionState,
  lastAllowedExpressionStateAfterIterations,
  showAllShowSteps,
  skipAlphaConvert
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  expressionContainer: SteppedExpressionContainer
  lastAllowedExpressionState?: ExpressionRunnerProps['lastAllowedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
}) => {
  const ref = useRef<ExpressionContainerManager>()
  const getExpressionContainerManager = () => {
    let manager = ref.current
    if (manager) {
      return manager
    }
    let expressionContainerManager = new ExpressionContainerManager({
      expressionContainer,
      stepOptions: {
        showAllShowSteps,
        skipAlphaConvert,
        lastAllowedExpressionState,
        lastAllowedExpressionStateAfterIterations
      }
    })
    expressionContainerManager = initializeExpressionManager({
      initializeInstructions,
      expressionContainerManager
    })
    ref.current = expressionContainerManager
    return expressionContainerManager
  }
  const [
    expressionContainerManagerState,
    setExpressionContainerManagerState
  ] = useState(getExpressionContainerManager().currentState)
  return {
    getExpressionContainerManager,
    expressionContainerManagerState,
    setExpressionContainerManagerState
  }
}

export default useExpressionContainerManager
