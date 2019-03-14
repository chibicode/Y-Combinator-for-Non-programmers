import { useState, useRef, useEffect } from 'react'
import useScrollAdjuster from 'src/hooks/useScrollAdjuster'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import { ExpressionRunnerProps } from 'src/components/Yc/ExpressionRunnerNew'

const initializeExpressionManager = ({
  initializeInstructions,
  maxStepsAllowed,
  resetIndex,
  expressionContainerManager,
  setExpressionContainerManagerState
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  maxStepsAllowed: ExpressionRunnerProps['maxStepsAllowed']
  resetIndex: ExpressionRunnerProps['resetIndex']
  expressionContainerManager: ExpressionContainerManager
  setExpressionContainerManagerState: React.Dispatch<
    React.SetStateAction<ExpressionContainerManager['currentState']>
  >
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

    setExpressionContainerManagerState(expressionContainerManager.currentState)
  }

  if (maxStepsAllowed) {
    expressionContainerManager.maximumIndex =
      expressionContainerManager.currentIndex + maxStepsAllowed
    setExpressionContainerManagerState(expressionContainerManager.currentState)
  }
}

const useExpressionContainerManager = ({
  initializeInstructions,
  maxStepsAllowed,
  resetIndex,
  expressionContainer,
  lastAllowedExpressionState,
  showAllShowSteps,
  controlsRef
}: {
  initializeInstructions: ExpressionRunnerProps['initializeInstructions']
  maxStepsAllowed: ExpressionRunnerProps['maxStepsAllowed']
  resetIndex: ExpressionRunnerProps['resetIndex']
  expressionContainer: SteppedExpressionContainer
  lastAllowedExpressionState?: CallStates
  showAllShowSteps?: boolean
  controlsRef: React.MutableRefObject<HTMLDivElement | null>
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
    initializeExpressionManager({
      initializeInstructions,
      maxStepsAllowed,
      resetIndex,
      expressionContainerManager,
      setExpressionContainerManagerState
    })
    ref.current = expressionContainerManager
    return expressionContainerManager
  }
  const [shouldAdjustScroll, setShouldAdjustScroll] = useState(false)
  const [
    expressionContainerManagerState,
    setExpressionContainerManagerState
  ] = useState(getExpressionContainerManager().currentState)
  useScrollAdjuster({
    controlsRef,
    shouldAdjustScroll,
    setShouldAdjustScroll
  })
  return {
    getExpressionContainerManager,
    expressionContainerManagerState,
    setExpressionContainerManagerState,
    setShouldAdjustScroll
  }
}

export default useExpressionContainerManager
