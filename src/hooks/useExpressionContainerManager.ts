import { useState, useRef } from 'react'
import ExpressionContainerManager from 'src/lib/ExpressionContainerManager'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/components/ExpressionRunner'

const initializeExpressionManager = ({
  initializeInstructions,
  resetIndex,
  expressionContainerManager
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
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

  return expressionContainerManager
}

const useExpressionContainerManager = ({
  initializeInstructions,
  resetIndex,
  expressionContainer,
  maxAllowedDefaultStateCount,
  lastAllowedExpressionState,
  lastAllowedExpressionStateAfterIterations,
  showAllShowSteps,
  skipAlphaConvert
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  resetIndex: ExpressionRunnerProps['resetIndex']
  expressionContainer: SteppedExpressionContainer
  lastAllowedExpressionState?: ExpressionRunnerProps['lastAllowedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
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
        lastAllowedExpressionStateAfterIterations,
        maxAllowedDefaultStateCount
      }
    })
    expressionContainerManager = initializeExpressionManager({
      initializeInstructions,
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
