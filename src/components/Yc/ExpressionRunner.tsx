import { css } from 'emotion'
import React from 'react'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionReadyToHighlightContext from 'src/components/Yc/ExpressionReadyToHighlightContext'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/Yc/ExpressionRunnerControls'
import { lineHeights } from 'src/lib/theme'
import ExpressionContainerManager, {
  ExpressionContainerSkipOptions
} from 'src/lib/yc/ExpressionContainerManager'
import {
  ExpressionContainerState,
  PreviouslyChangedExpressionState,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

type InitializeInstruction =
  | {
      type: 'stepForwardUntilContainerState'
      state: ExpressionContainerState
    }
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: PreviouslyChangedExpressionState
    }
  | {
      type: 'stepForwardMultiple'
      count: number
    }

interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  showPriorities: ExpressionRunnerContextProps['showPriorities']
  showControls: boolean
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: ReadonlyArray<InitializeInstruction>
  allowGoingBack: boolean
  expressionContainerManagerSkipOptions: ExpressionContainerSkipOptions
  disableReadyToHighlightColoring: boolean
  maxStepsAllowed?: number
}

interface ExpressionRunnerState {
  expressionContainerManagerState: ExpressionContainerManager['currentState']
}

export default class ExpressionRunner extends React.Component<
  ExpressionRunnerProps,
  ExpressionRunnerState
> {
  public static defaultProps = {
    showPriorities: expressionRunnerContextDefault.showPriorities,
    showControls: true,
    variableSize: expressionRunnerContextDefault.variableSize,
    allowGoingBack: false,
    initializeInstructions: [],
    disableReadyToHighlightColoring: false,
    expressionContainerManagerSkipOptions: {}
  }
  private expressionContainerManager: ExpressionContainerManager

  constructor(props: ExpressionRunnerProps) {
    super(props)
    this.expressionContainerManager = new ExpressionContainerManager(
      props.expressionContainer,
      props.expressionContainerManagerSkipOptions
    )

    this.state = {
      expressionContainerManagerState: this.expressionContainerManager
        .currentState
    }
  }

  public componentDidMount() {
    const {
      initializeInstructions,
      allowGoingBack,
      maxStepsAllowed
    } = this.props
    if (initializeInstructions) {
      initializeInstructions.forEach(initializeInstruction => {
        if (initializeInstruction.type === 'stepForwardUntilContainerState') {
          this.expressionContainerManager.stepForwardUntilContainerState(
            initializeInstruction.state
          )
        } else if (
          initializeInstruction.type ===
          'stepForwardUntilPreviouslyChangedExpressionState'
        ) {
          this.expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
            initializeInstruction.state
          )
        } else {
          this.expressionContainerManager.stepForwardMultiple(
            initializeInstruction.count
          )
        }
      })
      if (!allowGoingBack) {
        this.expressionContainerManager.minimumIndex = this.expressionContainerManager.currentIndex
      }
      this.syncState()
    }

    if (maxStepsAllowed) {
      this.expressionContainerManager.maximumIndex =
        this.expressionContainerManager.currentIndex + maxStepsAllowed
      this.syncState()
    }
  }

  public stepForward = () => {
    this.expressionContainerManager.stepForward()
    this.syncState()
  }

  public stepBackward = () => {
    this.expressionContainerManager.stepBackward()
    this.syncState()
  }

  public render() {
    const {
      showControls,
      showPriorities,
      variableSize,
      disableReadyToHighlightColoring
    } = this.props
    const { expressionContainerManagerState } = this.state
    return (
      <ExpressionRunnerContext.Provider
        value={{
          showPriorities,
          variableSize
        }}
      >
        <div
          className={css`
            max-width: 100%;
            line-height: ${lineHeights(1.3, { ignoreLocale: true })};
          `}
        >
          <ExpressionReadyToHighlightContext.Provider
            value={{
              readyToHighlight: expressionContainerManagerState.isDone,
              disableReadyToHighlightColoring
            }}
          >
            <ExpressionBox
              expression={
                expressionContainerManagerState.expressionContainer.expression
              }
            />
          </ExpressionReadyToHighlightContext.Provider>
          {showControls && (
            <ExpressionRunnerControls
              onNextClick={this.stepForward}
              onPreviousClick={this.stepBackward}
              canStepForward={expressionContainerManagerState.canStepForward}
              canStepBackward={expressionContainerManagerState.canStepBackward}
              isDone={expressionContainerManagerState.isDone}
            />
          )}
        </div>
      </ExpressionRunnerContext.Provider>
    )
  }

  private syncState() {
    this.setState({
      expressionContainerManagerState: this.expressionContainerManager
        .currentState
    })
  }
}
