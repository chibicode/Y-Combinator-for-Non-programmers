import { isContainerWithState } from 'src/lib/yc/expressionContainerGuards'
import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  ExpressionContainerStates,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

export default class ExpressionContainerManager {
  public get currentState() {
    return {
      expressionContainer: this.currentExpressionContainer,
      canStepForward: this.canStepForward,
      canStepBackward: this.canStepBackward,
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
    this.precompute()
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
      expressionContainer = stepExpressionContainer(expressionContainer)

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
      this.canRedo ||
      (!isContainerWithState(this.currentExpressionContainer, 'done') &&
        this.isUnderMaxIndex)
    )
  }

  private get isUnderMaxIndex() {
    return this.currentIndex < this.maximumIndex
  }

  private get currentExpressionContainer() {
    return this.expressionContainers[this.currentIndex]
  }
}
