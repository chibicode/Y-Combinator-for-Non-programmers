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
  isFunctionExpression,
  isVariableExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'
import {
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/PrioritizedExpressionTypes'

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

  expression.priority = priority
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
        expression
      })
    })
  } else {
    return {
      ...expression,
      value: {
        arg: expression.value.arg,
        body: prioritizeExpression(expression.value.body)
      }
    }
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
