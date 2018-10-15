import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  ExpressionContainerState,
  isDoneExpressionContainer,
  PreviouslyChangedExpressionState,
  previouslyChangedExpressionStateOrdered,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

export type ExpressionContainerSkipOptions = Partial<
  { [K in PreviouslyChangedExpressionState]: boolean }
>

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
  public skipOptions: ExpressionContainerSkipOptions = {}
  public lastAllowedExpressionState?: PreviouslyChangedExpressionState

  constructor({
    expressionContainer,
    skipOptions,
    lastAllowedExpressionState
  }: {
    expressionContainer: SteppedExpressionContainer
    skipOptions?: ExpressionContainerSkipOptions
    lastAllowedExpressionState?: PreviouslyChangedExpressionState
  }) {
    this.expressionContainers.push(expressionContainer)
    this.skipOptions = skipOptions || {}
    this.lastAllowedExpressionState = lastAllowedExpressionState
  }

  public stepBackward() {
    if (this.canStepBackward) {
      this.currentIndex--
    }
  }

  public stepForwardUntilPreviouslyChangedExpressionState(
    state: PreviouslyChangedExpressionState
  ) {
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

      previouslyChangedExpressionStateOrdered.map(key => {
        if (
          this.skipOptions[key] &&
          expressionContainer.previouslyChangedExpressionState === key &&
          !isDoneExpressionContainer(expressionContainer)
        ) {
          expressionContainer = stepExpressionContainer(expressionContainer)
        }
      })

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

  public stepForwardMultiple(count: number) {
    ;[...Array(count)].forEach(_ => {
      this.stepForward()
    })
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
