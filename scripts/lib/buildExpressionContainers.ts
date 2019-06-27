import { ExpressionRunnerConfig } from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import stepExpressionContainer from 'scripts/lib/stepExpressionContainer'
import {
  ExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import * as lessonExpressions from 'scripts/lib/initialExpressionContainers'

const buildExpressionContainers = ({
  lessonExpressionsKey,
  predefinedExpressionsKeys,
  initializeInstructions,
  showAllShowSteps,
  skipAlphaConvert,
  skipToTheEnd,
  hideControls,
  lastAllowedExpressionState,
  lastAllowedExpressionStateAfterIterations,
  hidePlayButton
}: ExpressionRunnerConfig): readonly ExpressionContainer[] => {
  if (lessonExpressionsKey) {
    let currentExpressionContainer: SteppedExpressionContainer =
      lessonExpressions[lessonExpressionsKey]
    let results: ExpressionContainer[] = []
    const stepOptions = { showAllShowSteps, skipAlphaConvert }

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

      if (hidePlayButton) {
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

    return results
  } else if (predefinedExpressionsKeys) {
    return predefinedExpressionsKeys.map(key => lessonExpressions[key])
  } else {
    throw new Error()
  }
}

export default buildExpressionContainers
