import { isContainerWithState } from 'src/lib/yc/expressionContainerGuards'
import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  ExpressionContainerStates,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

export interface StepOptions {
  showAllShowSteps?: boolean
}

export default class ExpressionContainerManager {
  public get currentState() {
    return {
      expressionContainer: this.currentExpressionContainer,
      canStepForward: this.canStepForward,
      canStepBackward: this.canStepBackward,
      numStepsRemaining: this.numStepsRemaining,
      ...this.currentStepAndSubstep
    }
  }

  public get currentStepAndSubstep() {
    let currentStep = 1
    let currentSubstep = this.currentIndex - this.startIndex + 1

    for (const iterationBoundary of this.iterationBoundaries) {
      if (iterationBoundary <= this.currentIndex) {
        currentStep += 1
        currentSubstep = this.currentIndex - iterationBoundary + 1
      } else {
        break
      }
    }
    return {
      currentStep,
      currentSubstep
    }
  }

  public expressionContainers: SteppedExpressionContainer[] = []
  public currentIndex = 0
  public startIndex = 0
  public iterationBoundaries: number[] = []
  public minimumIndex = 0
  // TODO: Because of precomputing, if this is high the app will crash for Y Combinator.
  // The YC example should specify maximumIndex.
  public maximumIndex = 100
  public lastAllowedExpressionState?: CallStates
  public stepOptions: StepOptions

  constructor({
    expressionContainer,
    lastAllowedExpressionState,
    stepOptions
  }: {
    expressionContainer: SteppedExpressionContainer
    lastAllowedExpressionState?: CallStates
    stepOptions: StepOptions
  }) {
    this.expressionContainers.push(expressionContainer)
    this.lastAllowedExpressionState = lastAllowedExpressionState
    this.stepOptions = stepOptions
    this.precompute()
  }

  public stepBackward() {
    if (this.canStepBackward) {
      this.currentIndex--
    }
  }

  public reset() {
    this.currentIndex = this.startIndex
  }

  public stepForwardUntilPreviouslyChangedExpressionState(state: CallStates) {
    while (
      this.currentExpressionContainer.previouslyChangedExpressionState !==
        state &&
      this.canStepForward
    ) {
      this.stepForward()
    }
  }

  public stepForwardUntilContainerState(state: ExpressionContainerStates) {
    while (
      this.currentExpressionContainer.containerState !== state &&
      this.canStepForward
    ) {
      this.stepForward()
    }
  }

  public stepForward() {
    if (this.canRedo) {
      this.currentIndex++
    }
  }

  private precompute() {
    while (
      this.isUnderMaxIndex &&
      !isContainerWithState(this.currentExpressionContainer, 'done')
    ) {
      let expressionContainer: SteppedExpressionContainer = this
        .currentExpressionContainer
      expressionContainer = stepExpressionContainer(
        expressionContainer,
        this.stepOptions
      )

      this.expressionContainers.push(expressionContainer)
      this.currentIndex++

      if (expressionContainer.previouslyChangedExpressionState === 'default') {
        this.iterationBoundaries.push(this.currentIndex)
      }

      if (
        this.lastAllowedExpressionState &&
        this.lastAllowedExpressionState ===
          expressionContainer.previouslyChangedExpressionState
      ) {
        this.maximumIndex = this.currentIndex
      }
    }
    this.currentIndex = 0
  }

  private get canStepBackward() {
    return this.currentIndex > (this.minimumIndex || 0)
  }

  private get canRedo() {
    return this.currentIndex < this.expressionContainers.length - 1
  }

  private get canStepForward() {
    return (
      (this.canRedo ||
        !isContainerWithState(this.currentExpressionContainer, 'done')) &&
      this.isUnderMaxIndex
    )
  }

  private get isUnderMaxIndex() {
    return this.currentIndex < this.maximumIndex
  }

  private get currentExpressionContainer() {
    return this.expressionContainers[this.currentIndex]
  }

  private get numStepsRemaining() {
    return this.expressionContainers.length - this.currentIndex - 1
  }
}
