import { css } from 'emotion'
import React from 'react'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { lineHeights } from 'src/lib/theme'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import {
  ExpressionContainerState,
  PreviouslyChangedExpressionState,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

type InitializeInstructions =
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
  initializeInstructions?: InitializeInstructions
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
    variableSize: expressionRunnerContextDefault.variableSize
  }
  private expressionContainerManager: ExpressionContainerManager

  constructor(props: ExpressionRunnerProps) {
    super(props)
    this.expressionContainerManager = new ExpressionContainerManager(
      props.expressionContainer
    )

    this.state = {
      expressionContainerManagerState: this.expressionContainerManager
        .currentState
    }
  }

  public componentDidMount() {
    const { initializeInstructions } = this.props
    if (initializeInstructions) {
      if (initializeInstructions.type === 'stepForwardUntilContainerState') {
        this.expressionContainerManager.stepForwardUntilContainerState(
          initializeInstructions.state
        )
      } else if (
        initializeInstructions.type ===
        'stepForwardUntilPreviouslyChangedExpressionState'
      ) {
        this.expressionContainerManager.stepForwardUntilPreviouslyChangedExpressionState(
          initializeInstructions.state
        )
      } else {
        this.expressionContainerManager.stepForwardMultiple(
          initializeInstructions.count
        )
      }
      this.syncState()
    }
  }

  public render() {
    const { showPriorities, variableSize } = this.props
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
