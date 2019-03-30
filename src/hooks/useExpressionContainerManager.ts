import { useState, useRef } from 'react'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import { ExpressionRunnerProps } from 'src/components/Yc/ExpressionRunner'

const initializeExpressionManager = ({
  initializeInstructions,
  maxStepsAllowed,
  resetIndex,
  expressionContainerManager
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  maxStepsAllowed: ExpressionRunnerProps['maxStepsAllowed']
  resetIndex: ExpressionRunnerProps['resetIndex']
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

    if (resetIndex) {
      expressionContainerManager.startIndex =
        expressionContainerManager.currentIndex
    }
    expressionContainerManager.minimumIndex =
      expressionContainerManager.currentIndex
  }

  if (maxStepsAllowed) {
    expressionContainerManager.maximumIndex =
      expressionContainerManager.currentIndex + maxStepsAllowed
  }

  return expressionContainerManager
}

const useExpressionContainerManager = ({
  initializeInstructions,
  maxStepsAllowed,
  resetIndex,
  expressionContainer,
  lastAllowedExpressionState,
  showAllShowSteps
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  maxStepsAllowed: ExpressionRunnerProps['maxStepsAllowed']
  resetIndex: ExpressionRunnerProps['resetIndex']
  expressionContainer: SteppedExpressionContainer
  lastAllowedExpressionState?: CallStates
  showAllShowSteps?: boolean
}) => {
  const ref = useRef<ExpressionContainerManager>()
  const getExpressionContainerManager = () => {
    let manager = ref.current
    if (manager) {
      return manager
    }
    let expressionContainerManager = new ExpressionContainerManager({
      expressionContainer,
      lastAllowedExpressionState,
      stepOptions: {
        showAllShowSteps
      }
    })
    expressionContainerManager = initializeExpressionManager({
      initializeInstructions,
      maxStepsAllowed,
      resetIndex,
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
