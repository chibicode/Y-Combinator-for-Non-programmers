import React from 'react'
import Expression from 'src/components/Expression'
import transitionExpressionState from 'src/lib/transitionExpressionState'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'

interface ExpressionExecutorProps {
  expression: DecoratedExpression
}

interface ExpressionExecutorState {
  expression: DecoratedExpression
}

export default class ExpressionExecutor extends React.Component<
  ExpressionExecutorProps,
  ExpressionExecutorState
> {
  constructor(props) {
    super(props)
    this.state = {
      expression: props.expression,
    }
  }

  public stepExpression = () => {
    if (this.state.expression.type === 'call') {
      this.setState({
        expression: transitionExpressionState(this.state.expression),
      })
    }
  }

  public render() {
    const { expression } = this.state
    return (
      <div>
        <Expression expression={expression} />
        <button onClick={this.stepExpression}>step</button>
      </div>
    )
  }
}
