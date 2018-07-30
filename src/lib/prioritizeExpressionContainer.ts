import produce from 'immer'
import {
  PrioritizedExpressionContainer,
  UnprioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  isCallExpression,
  isVariableExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'
import {
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/PrioritizedExpressionTypes'

const mutablePrioritizeExpressionRecurserForOtherExpression = (
  expression: Expression
): void => {
  switch (expression.type) {
    case 'variable': {
      return
    }
    case 'call': {
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression,
        priority: 1
      })
      return
    }
    case 'function': {
      mutablePrioritizeExpressionRecurserForOtherExpression(
        expression.value.arg
      )
      mutablePrioritizeExpressionRecurserForOtherExpression(
        expression.value.body
      )
      return
    }
  }
}

const mutablePrioritizeExpressionRecurserForCallExpression = ({
  expression,
  priority
}: {
  expression: CallExpression
  priority: number
}): number => {
  if (expression.value.arg.type === 'call') {
    priority =
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression: expression.value.arg,
        priority
      }) + 1
  } else {
    mutablePrioritizeExpressionRecurserForOtherExpression(expression.value.arg)
  }
  if (expression.value.func.type === 'call') {
    priority =
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression: expression.value.func,
        priority
      }) + 1
  } else {
    mutablePrioritizeExpressionRecurserForOtherExpression(expression.value.func)
  }

  ;(expression as PrioritizedCallExpression).priority = priority
  return priority
}

function prioritizeExpression(
  expression: VariableExpression
): PrioritizedVariableExpression
function prioritizeExpression(
  expression: CallExpression
): PrioritizedCallExpression
function prioritizeExpression(
  expression: FunctionExpression
): PrioritizedFunctionExpression
function prioritizeExpression(expression: Expression): PrioritizedExpression
function prioritizeExpression(expression: Expression) {
  if (isVariableExpression(expression)) {
    return expression
  } else if (isCallExpression(expression)) {
    return produce<CallExpression>(expression, draftExpression => {
      mutablePrioritizeExpressionRecurserForCallExpression({
        priority: 1,
        expression: draftExpression
      })
    }) as PrioritizedCallExpression
  } else {
    return produce<FunctionExpression>(expression, draftExpression => {
      mutablePrioritizeExpressionRecurserForOtherExpression(draftExpression)
    }) as PrioritizedFunctionExpression
  }
}

export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<VariableExpression>
): PrioritizedExpressionContainer<PrioritizedVariableExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<CallExpression>
): PrioritizedExpressionContainer<PrioritizedCallExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<FunctionExpression>
): PrioritizedExpressionContainer<PrioritizedFunctionExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<Expression>
): PrioritizedExpressionContainer<PrioritizedExpression> {
  return {
    prioritized: true,
    needsReset: expressionContainer.needsReset,
    expression: prioritizeExpression(expressionContainer.expression)
  }
}
