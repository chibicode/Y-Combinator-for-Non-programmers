import { css } from 'emotion'
import React from 'react'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import expressionContainerToSimpleString from 'src/lib/yc/expressionContainerToSimpleString'
import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  PrioritizedDoneExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

interface ExpressionRunnerProps {
  expressionContainer:
    | PrioritizedExpressionContainer
    | PrioritizedDoneExpressionContainer
  showPriorities: ExpressionRunnerContextProps['showPriorities']
  showControls: boolean
  variableSize: ExpressionRunnerContextProps['variableSize']
  initialStep: number
}

type ExpressionRunnerState = Pick<ExpressionRunnerProps, 'expressionContainer'>

export default class ExpressionRunner extends React.Component<
  ExpressionRunnerProps,
  ExpressionRunnerState
> {
  public static defaultProps = {
    showPriorities: expressionRunnerContextDefault.showPriorities,
    showControls: true,
    variableSize: expressionRunnerContextDefault.variableSize,
    initialStep: 0
  }

  constructor(props: ExpressionRunnerProps) {
    super(props)
    let expressionContainer = props.expressionContainer
    if (props.initialStep > 0) {
      ;[...Array(props.initialStep)].forEach(_ => {
        expressionContainer = stepExpressionContainer(expressionContainer)
      })
    }
    this.state = {
      expressionContainer
    }
  }

  public stepExpression = () => {
    if (!this.state.expressionContainer.done) {
      const x = stepExpressionContainer(this.state.expressionContainer)
      this.setState({
        expressionContainer: x
      })
    }
  }

  public render() {
    const { showControls, showPriorities, variableSize } = this.props
    const { expressionContainer } = this.state
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
          `}
        >
          <ExpressionBox expression={expressionContainer.expression} />
          {showControls && (
            <>
              <div>
                {expressionContainerToSimpleString(expressionContainer)}
              </div>
              <button onClick={this.stepExpression}>step</button>{' '}
            </>
          )}
        </div>
      </ExpressionRunnerContext.Provider>
    )
  }
}
