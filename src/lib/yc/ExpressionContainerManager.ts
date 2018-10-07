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
      canStepBackward: this.canStepBackward
    }
  }
  public expressionContainers: SteppedExpressionContainer[] = []
  public currentIndex = 0
  public minimumIndex = 0
  public skipOptions: ExpressionContainerSkipOptions = {}

  constructor(
    expressionContainer: SteppedExpressionContainer,
    options?: ExpressionContainerSkipOptions
  ) {
    this.expressionContainers.push(expressionContainer)
    this.skipOptions = options || {}
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

  public stepBackward() {
    if (this.canStepBackward) {
      this.currentIndex -= 1
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
    if (this.currentIndex < this.expressionContainers.length - 1) {
      this.currentIndex += 1
    } else if (!isDoneExpressionContainer(this.currentExpressionContainer)) {
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

  private get canStepForward() {
    return (
      this.currentIndex < this.expressionContainers.length - 1 ||
      !isDoneExpressionContainer(this.currentExpressionContainer)
    )
  }

  private get currentExpressionContainer() {
    return this.expressionContainers[this.currentIndex]
  }
}
