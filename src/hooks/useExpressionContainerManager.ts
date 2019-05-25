import { useState, useRef } from 'react'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/components/ExpressionRunner'

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
  maxAllowedDefaultStateCount,
  lastAllowedExpressionState,
  showAllShowSteps,
  skipAlphaConvert
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  maxStepsAllowed: ExpressionRunnerProps['maxStepsAllowed']
  resetIndex: ExpressionRunnerProps['resetIndex']
  expressionContainer: SteppedExpressionContainer
  lastAllowedExpressionState?: ExpressionRunnerProps['lastAllowedExpressionState']
  maxAllowedDefaultStateCount?: ExpressionRunnerProps['maxAllowedDefaultStateCount']
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
        maxAllowedDefaultStateCount
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
