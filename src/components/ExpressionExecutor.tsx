import React from 'react'
import Expression from 'src/components/Expression'
import expressionContainerToSimpleString from 'src/lib/expressionContainerToSimpleString'
import stepExpressionContainer from 'src/lib/stepExpressionContainer'
import {
  PrioritizedDoneExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'

interface ExpressionExecutorProps {
  expressionContainer:
    | PrioritizedExpressionContainer
    | PrioritizedDoneExpressionContainer
}

type ExpressionExecutorState = Pick<
  ExpressionExecutorProps,
  'expressionContainer'
>

export default class ExpressionExecutor extends React.Component<
  ExpressionExecutorProps,
  ExpressionExecutorState
> {
  constructor(props: ExpressionExecutorProps) {
    super(props)
    this.state = {
      expressionContainer: props.expressionContainer
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
    const { expressionContainer } = this.state
    return (
      <div>
        <div style={{ maxWidth: 300 }}>
          <Expression expression={expressionContainer.expression} />
        </div>
        <div>
          <div>{expressionContainerToSimpleString(expressionContainer)}</div>
          <button onClick={this.stepExpression}>step</button>
        </div>
      </div>
    )
  }
}
