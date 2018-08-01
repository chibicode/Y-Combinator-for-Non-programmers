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

function prioritizeCallExpression({
  expression,
  priority
}: {
  expression: CallExpression
  priority: number
}): PrioritizedCallExpression {
  let newArg: PrioritizedExpression
  let newFunc: PrioritizedExpression

  if (isCallExpression(expression.arg)) {
    const argResult = prioritizeCallExpression({
      expression: expression.arg,
      priority
    })
    newArg = argResult
    priority = argResult.priority + 1
  } else {
    newArg = prioritizeExpression(expression.arg)
  }

  if (isCallExpression(expression.func)) {
    const funcResult = prioritizeCallExpression({
      expression: expression.func,
      priority
    })
    newFunc = funcResult
    priority = funcResult.priority + 1
  } else {
    newFunc = prioritizeExpression(expression.func)
  }

  return {
    ...expression,
    func: newFunc,
    arg: newArg,
    priority
  }
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
    return {
      ...expression,
      argPriorityAgg: new Array<number>(),
      funcPriorityAgg: new Array<number>()
    }
  } else if (isCallExpression(expression)) {
    return prioritizeCallExpression({
      priority: 1,
      expression
    })
  } else {
    return {
      ...expression,
      arg: prioritizeExpression(expression.arg),
      body: prioritizeExpression(expression.body)
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
): PrioritizedExpressionContainer<PrioritizedExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: UnprioritizedExpressionContainer<Expression>
) {
  return {
    prioritized: true,
    needsReset: expressionContainer.needsReset,
    expression: prioritizeExpression(expressionContainer.expression)
  }
}
