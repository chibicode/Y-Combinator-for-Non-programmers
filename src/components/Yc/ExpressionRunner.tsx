import { css } from 'emotion'
import React from 'react'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { lineHeights } from 'src/lib/theme'
import expressionContainerToSimpleString from 'src/lib/yc/expressionContainerToSimpleString'
import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  SteppedExpressionContainer,
  isDoneExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
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
    const expressionContainer = props.expressionContainer

    this.state = {
      expressionContainer
    }
  }

  public componentDidMount() {
    const { initialStep } = this.props
    let tempExpressionContainer = this.state.expressionContainer
    if (initialStep > 0) {
      ;[...Array(initialStep)].forEach(_ => {
        if (!isDoneExpressionContainer(tempExpressionContainer)) {
          tempExpressionContainer = stepExpressionContainer(
            tempExpressionContainer
          )
        }
      })
      this.setState({
        expressionContainer: tempExpressionContainer
      })
    }
  }

  public stepExpression = () => {
    const { expressionContainer } = this.state
    if (!isDoneExpressionContainer(expressionContainer)) {
      this.setState({
        expressionContainer: stepExpressionContainer(expressionContainer)
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
            line-height: ${lineHeights(1.3, { ignoreLocale: true })};
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
