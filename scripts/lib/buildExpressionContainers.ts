import { ExpressionRunnerConfig } from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import stepExpressionContainer from 'scripts/lib/stepExpressionContainer'
import prioritizeExpressionContainer from 'scripts/lib/prioritizeExpressionContainer'
import {
  ExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/ExpressionContainerTypes'

const buildExpressionContainers = ({
  initialExpressionContainer,
  initialExpressionContainers,
  initializeInstructions,
  showAllShowSteps,
  skipAlphaConvert,
  skipActive,
  showDefaultAndActiveOnly,
  skipToTheEnd,
  hideControls,
  lastAllowedExpressionState,
  lastAllowedExpressionStateAfterIterations,
  applicativeOrder,
  hideRunButton
}: ExpressionRunnerConfig): readonly ExpressionContainer[] => {
  if (initialExpressionContainer) {
    let currentExpressionContainer: SteppedExpressionContainer =
      initialExpressionContainer

    if (applicativeOrder) {
      currentExpressionContainer = prioritizeExpressionContainer(
        initialExpressionContainer,
        applicativeOrder
      )
    }

    const results: ExpressionContainer[] = []
    const stepOptions = {
      showAllShowSteps,
      skipAlphaConvert,
      skipActive,
      applicativeOrder
    }

    initializeInstructions.forEach(initializeInstruction => {
      if (
        initializeInstruction.type ===
        'stepForwardUntilPreviouslyChangedExpressionState'
      ) {
        while (
          currentExpressionContainer.previouslyChangedExpressionState !==
            initializeInstruction.state &&
          !isContainerWithState(currentExpressionContainer, 'done')
        ) {
          currentExpressionContainer = stepExpressionContainer(
            currentExpressionContainer,
            stepOptions
          )
        }
      } else if (initializeInstruction.type === 'nextIteration') {
        if (!isContainerWithState(currentExpressionContainer, 'done')) {
          currentExpressionContainer = stepExpressionContainer(
            currentExpressionContainer,
            stepOptions
          )
          while (
            currentExpressionContainer.previouslyChangedExpressionState !==
              'default' &&
            !isContainerWithState(currentExpressionContainer, 'done')
          ) {
            currentExpressionContainer = stepExpressionContainer(
              currentExpressionContainer,
              stepOptions
            )
          }
        }
      } else {
        while (!isContainerWithState(currentExpressionContainer, 'done')) {
          currentExpressionContainer = stepExpressionContainer(
            currentExpressionContainer,
            stepOptions
          )
        }
      }
    })

    results.push(currentExpressionContainer)

    if (hideControls) {
      return results
    }

    if (skipToTheEnd) {
      while (!isContainerWithState(currentExpressionContainer, 'done')) {
        currentExpressionContainer = stepExpressionContainer(
          currentExpressionContainer,
          stepOptions
        )
      }
      results.push(currentExpressionContainer)
      return results
    }

    let becameDefaultCount = 0
    while (!isContainerWithState(currentExpressionContainer, 'done')) {
      currentExpressionContainer = stepExpressionContainer(
        currentExpressionContainer,
        stepOptions
      )
      results.push(currentExpressionContainer)

      if (hideRunButton) {
        break
      }

      if (
        lastAllowedExpressionState &&
        lastAllowedExpressionState ===
          currentExpressionContainer.previouslyChangedExpressionState &&
        (lastAllowedExpressionStateAfterIterations || 0) <= becameDefaultCount
      ) {
        break
      }

      if (
        currentExpressionContainer.previouslyChangedExpressionState ===
        'default'
      ) {
        becameDefaultCount += 1
      }
    }

    if (showDefaultAndActiveOnly) {
      return results.filter(
        x =>
          x.previouslyChangedExpressionState === 'conditionActive' ||
          x.previouslyChangedExpressionState === 'default' ||
          x.previouslyChangedExpressionState === 'active'
      )
    } else {
      return results
    }
  } else if (initialExpressionContainers) {
    return initialExpressionContainers.map(x =>
      applicativeOrder ? prioritizeExpressionContainer(x, applicativeOrder) : x
    )
  } else {
    throw new Error()
  }
}

export default buildExpressionContainers
