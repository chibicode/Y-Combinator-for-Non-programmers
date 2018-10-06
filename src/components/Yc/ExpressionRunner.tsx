import { css } from 'emotion'
import React from 'react'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/Yc/ExpressionRunnerControls'
import { lineHeights } from 'src/lib/theme'
import ExpressionContainerManager, {
  ExpressionContainerManagerOptions
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
  initializeInstructions?: ReadonlyArray<InitializeInstruction>
  allowGoingBack: boolean
  expressionContainerManagerOptions?: ExpressionContainerManagerOptions
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
    allowGoingBack: false
  }
  private expressionContainerManager: ExpressionContainerManager

  constructor(props: ExpressionRunnerProps) {
    super(props)
    this.expressionContainerManager = new ExpressionContainerManager(
      props.expressionContainer,
      props.expressionContainerManagerOptions
    )

    this.state = {
      expressionContainerManagerState: this.expressionContainerManager
        .currentState
    }
  }

  public componentDidMount() {
    const { initializeInstructions, allowGoingBack } = this.props
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
    const { showControls, showPriorities, variableSize } = this.props
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
          <ExpressionBox
            expression={
              expressionContainerManagerState.expressionContainer.expression
            }
          />
          {showControls && (
            <ExpressionRunnerControls
              onNextClick={this.stepForward}
              onPreviousClick={this.stepBackward}
              canStepForward={expressionContainerManagerState.canStepForward}
              canStepBackward={expressionContainerManagerState.canStepBackward}
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
