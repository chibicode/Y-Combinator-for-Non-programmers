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
      currentStep: this.currentIndex - this.startIndex + this.indexOffset + 1
    }
  }
  public expressionContainers: SteppedExpressionContainer[] = []
  public currentIndex = 0
  public startIndex = 0
  public minimumIndex = 0
  public indexOffset = 0
  public maximumIndex = 999
  public skipOptions: ExpressionContainerSkipOptions = {}
  public lastAllowedExpressionState?: PreviouslyChangedExpressionState

  constructor({
    expressionContainer,
    skipOptions,
    lastAllowedExpressionState,
    indexOffset
  }: {
    expressionContainer: SteppedExpressionContainer
    skipOptions?: ExpressionContainerSkipOptions
    lastAllowedExpressionState?: PreviouslyChangedExpressionState
    indexOffset?: number
  }) {
    this.expressionContainers.push(expressionContainer)
    this.skipOptions = skipOptions || {}
    this.lastAllowedExpressionState = lastAllowedExpressionState
    this.indexOffset = indexOffset || 0
  }

  public stepBackward() {
    if (this.canStepBackward) {
      this.currentIndex -= 1
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
      this.currentIndex += 1
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
      this.currentIndex += 1

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
