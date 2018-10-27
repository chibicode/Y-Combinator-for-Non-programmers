import { isDoneExpressionContainer } from 'src/lib/yc/expressionContainerGuards'
import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  ExpressionContainerState,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

export default class ExpressionContainerManager {
  public get currentState() {
    return {
      expressionContainer: this.currentExpressionContainer,
      canStepForward: this.canStepForward,
      canStepBackward: this.canStepBackward,
      isDone: this.isDone,
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
  public maximumIndex = 999
  public lastAllowedExpressionState?: CallStates

  constructor({
    expressionContainer,
    lastAllowedExpressionState
  }: {
    expressionContainer: SteppedExpressionContainer
    lastAllowedExpressionState?: CallStates
  }) {
    this.expressionContainers.push(expressionContainer)
    this.lastAllowedExpressionState = lastAllowedExpressionState
  }

  public stepBackward() {
    if (this.canStepBackward) {
      this.currentIndex--
    }
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

  public stepForwardUntilContainerState(state: ExpressionContainerState) {
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
    } else if (
      this.isUnderMaxIndex &&
      !isDoneExpressionContainer(this.currentExpressionContainer)
    ) {
      let expressionContainer: SteppedExpressionContainer = this
        .currentExpressionContainer
      expressionContainer = stepExpressionContainer(expressionContainer)

      if (
        !expressionContainer.matchExists &&
        expressionContainer.previouslyChangedExpressionState ===
          'betaReducePreviewAfter' &&
        !isDoneExpressionContainer(expressionContainer)
      ) {
        expressionContainer = stepExpressionContainer(expressionContainer)
      }
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
  }

  private get canStepBackward() {
    return this.currentIndex > (this.minimumIndex || 0)
  }

  private get canRedo() {
    return this.currentIndex < this.expressionContainers.length - 1
  }

  private get canStepForward() {
    return this.canRedo || (!this.isDone && this.isUnderMaxIndex)
  }

  private get isDone() {
    return isDoneExpressionContainer(this.currentExpressionContainer)
  }

  private get isUnderMaxIndex() {
    return this.currentIndex < this.maximumIndex
  }

  private get currentExpressionContainer() {
    return this.expressionContainers[this.currentIndex]
  }
}
