import {
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'

import { CallExpression, Expression } from 'src/types/yc/ExpressionTypes'

function prioritizeCallExpressionHelper<E extends CallExpression>({
  expression,
  priority
}: {
  expression: E
  priority: number
}): E {
  let newArg: Expression
  let newFunc: Expression

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

  return Object.assign({}, expression, {
    func: newFunc,
    arg: newArg,
    priority
  })
}

function prioritizeExpressionHelper<E extends Expression = Expression>(
  expression: E
): E {
  if (isVariableExpression(expression)) {
    return Object.assign({}, expression, {
      argPriorityAgg: new Array<number>(),
      funcPriorityAgg: new Array<number>()
    })
  } else if (isCallExpression(expression)) {
    return prioritizeCallExpressionHelper({
      priority: 1,
      expression
    })
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: prioritizeExpressionHelper(expression.arg),
      body: prioritizeExpressionHelper(expression.body)
    })
  } else {
    throw new Error()
  }
}

function populatePriorityAggs<E extends Expression>({
  expression,
  argPriorityAgg,
  funcPriorityAgg
}: {
  expression: E
  argPriorityAgg: number[]
  funcPriorityAgg: number[]
}): E {
  if (isCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: populatePriorityAggs<typeof expression.arg>({
        expression: expression.arg,
        argPriorityAgg: [expression.priority, ...argPriorityAgg],
        funcPriorityAgg: new Array<number>()
      }),
      func: populatePriorityAggs<typeof expression.func>({
        expression: expression.func,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: [expression.priority, ...funcPriorityAgg]
      })
    })
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: populatePriorityAggs<typeof expression.arg>({
        expression: expression.arg,
        argPriorityAgg,
        funcPriorityAgg
      }),
      body: populatePriorityAggs<typeof expression.body>({
        expression: expression.body,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: new Array<number>()
      })
    })
  } else if (isVariableExpression(expression)) {
    return Object.assign({}, expression, {
      argPriorityAgg,
      funcPriorityAgg
    })
  } else {
    throw new Error()
  }
}

export default function prioritizeExpression<E extends Expression = Expression>(
  expression: E
): E {
  return populatePriorityAggs({
    expression: prioritizeExpressionHelper(expression),
    argPriorityAgg: new Array<number>(),
    funcPriorityAgg: new Array<number>()
  })
}
