import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import stepExpressionContainer from 'src/lib/stepExpressionContainer'
import {
  ExpressionContainerStates,
  SteppedExpressionContainer,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'

export interface StepOptions {
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
}

const DEFAULT_MAX_INDEX = 300

export default class ExpressionContainerManager {
  public get currentState() {
    return {
      expressionContainer: this.currentExpressionContainer,
      canStepForward: this.canStepForward,
      canStepBackward: this.canStepBackward,
      numStepsRemaining: this.numStepsRemaining,
      numStepsRemainingDefaultAndActiveOnly: this
        .numStepsRemainingDefaultAndActiveOnly,
      numStepsTaken: this.currentIndex - this.minimumIndex,
      maxIndexSet: this.maximumIndex !== DEFAULT_MAX_INDEX
    }
  }

  public expressionContainers: SteppedExpressionContainer[] = []
  public currentIndex = 0
  public minimumIndex = 0
  public maximumIndex = DEFAULT_MAX_INDEX
  public stepOptions: StepOptions

  public constructor({
    expressionContainer,
    stepOptions
  }: {
    expressionContainer: SteppedExpressionContainer
    stepOptions: StepOptions
  }) {
    this.expressionContainers.push(expressionContainer)
    this.stepOptions = stepOptions
    this.precompute()
  }

  public stepBackward() {
    if (this.canStepBackward) {
      this.currentIndex--
    }
  }

  public reset() {
    this.currentIndex = this.minimumIndex
  }

  public stepForwardUntilActiveOrDefault() {
    do {
      if (this.canStepForward) {
        this.stepForward()
      }
    } while (
      this.currentExpressionContainer.previouslyChangedExpressionState !==
        'default' &&
      this.currentExpressionContainer.previouslyChangedExpressionState !==
        'active' &&
      this.canStepForward
    )
  }

  public stepForwardUntilPreviouslyChangedExpressionState(
    state: ExpressionContainer['previouslyChangedExpressionState']
  ) {
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

  public stepForwardUntilTheEnd() {
    while (this.canStepForward) {
      this.stepForward()
    }
  }

  private precompute() {
    let becameDefaultCount = 0
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

      if (
        this.stepOptions.lastAllowedExpressionState &&
        this.stepOptions.lastAllowedExpressionState ===
          expressionContainer.previouslyChangedExpressionState &&
        (this.stepOptions.lastAllowedExpressionStateAfterIterations || 0) <=
          becameDefaultCount
      ) {
        this.maximumIndex = this.currentIndex
      }

      if (expressionContainer.previouslyChangedExpressionState === 'default') {
        becameDefaultCount += 1
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

  private get numStepsRemainingDefaultAndActiveOnly() {
    return this.expressionContainers
      .slice(this.currentIndex + 1)
      .filter(
        container =>
          container.previouslyChangedExpressionState === 'default' ||
          container.previouslyChangedExpressionState === 'active'
      ).length
  }
}
