import React from 'react'
import Expression from 'src/components/Expression'
import { decoratedExpressionToSimpleString } from 'src/lib/expressionUtils'
import transitionExpressionState from 'src/lib/transitionExpressionState'
import ExpressionTypes from 'src/types/ExpressionTypes'

interface ExpressionExecutorProps {
  expression: ExpressionTypes.Expression
}

interface ExpressionExecutorState {
  expression: ExpressionTypes.Expression
}

export default class ExpressionExecutor extends React.Component<
  ExpressionExecutorProps,
  ExpressionExecutorState
> {
  constructor(props) {
    super(props)
    this.state = {
      expression: props.expression
    }
  }

  public stepExpression = () => {
    if (this.state.expression.type === 'call') {
      this.setState({
        expression: transitionExpressionState(this.state.expression)
      })
    }
  }

  public render() {
    const { expression } = this.state
    return (
      <div>
        <div style={{ maxWidth: 300 }}>
          <Expression expression={expression} />
        </div>
        <div>
          <div>{decoratedExpressionToSimpleString(expression)}</div>
          <button onClick={this.stepExpression}>step</button>
        </div>
      </div>
    )
  }
}
