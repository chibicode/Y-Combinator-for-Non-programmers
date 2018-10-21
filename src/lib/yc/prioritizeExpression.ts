import {
  isCallExpression,
  isPrioritizedCallExpression,
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'

import {
  CallExpression,
  Expression,
  FunctionExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

function prioritizeCallExpressionHelper({
  expression,
  priority
}: {
  expression: CallExpression
  priority: number
}): PrioritizedCallExpression {
  let newArg: PrioritizedExpression
  let newFunc: PrioritizedExpression

  if (isCallExpression(expression.arg)) {
    const argResult = prioritizeCallExpressionHelper({
      expression: expression.arg,
      priority
    })
    newArg = argResult
    priority = argResult.priority + 1
  } else {
    newArg = prioritizeExpressionHelper(expression.arg)
  }

  if (isCallExpression(expression.func)) {
    const funcResult = prioritizeCallExpressionHelper({
      expression: expression.func,
      priority
    })
    newFunc = funcResult
    priority = funcResult.priority + 1
  } else {
    newFunc = prioritizeExpressionHelper(expression.func)
  }

  return {
    ...expression,
    func: newFunc,
    arg: newArg,
    priority
  }
}

function prioritizeExpressionHelper(
  expression: VariableExpression
): PrioritizedVariableExpression
function prioritizeExpressionHelper(
  expression: CallExpression
): PrioritizedCallExpression
function prioritizeExpressionHelper(
  expression: FunctionExpression
): PrioritizedFunctionExpression
function prioritizeExpressionHelper(
  expression: Expression
): PrioritizedExpression
function prioritizeExpressionHelper(expression: Expression) {
  if (isVariableExpression(expression)) {
    return {
      ...expression,
      argPriorityAgg: new Array<number>(),
      funcPriorityAgg: new Array<number>()
    }
  } else if (isCallExpression(expression)) {
    return prioritizeCallExpressionHelper({
      priority: 1,
      expression
    })
  } else {
    return {
      ...expression,
      arg: prioritizeExpressionHelper(expression.arg),
      body: prioritizeExpressionHelper(expression.body)
    }
  }
}

function populatePriorityAggs<E extends PrioritizedExpression>({
  expression,
  argPriorityAgg,
  funcPriorityAgg
}: {
  expression: E
  argPriorityAgg: number[]
  funcPriorityAgg: number[]
}): E {
  if (isPrioritizedCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: populatePriorityAggs({
        expression: expression.arg,
        argPriorityAgg: [expression.priority, ...argPriorityAgg],
        funcPriorityAgg: new Array<number>()
      }),
      func: populatePriorityAggs({
        expression: expression.func,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: [expression.priority, ...funcPriorityAgg]
      })
    })
  } else if (isPrioritizedFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: populatePriorityAggs({
        expression: expression.arg,
        argPriorityAgg,
        funcPriorityAgg
      }),
      body: populatePriorityAggs({
        expression: expression.body,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: new Array<number>()
      })
    })
  } else if (isPrioritizedVariableExpression(expression)) {
    return Object.assign({}, expression, {
      argPriorityAgg,
      funcPriorityAgg
    })
  }
  throw new Error()
}

export default function prioritizeExpression(expression: Expression) {
  return populatePriorityAggs({
    expression: prioritizeExpressionHelper(expression),
    argPriorityAgg: new Array<number>(),
    funcPriorityAgg: new Array<number>()
  })
}
