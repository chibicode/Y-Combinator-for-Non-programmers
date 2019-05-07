import {
  isCall,
  isFunction,
  isVariable,
  isShorthandFunction
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

  if (isCall(expression.func)) {
    const funcResult = prioritizeCallExpressionHelper({
      expression: expression.func,
      priority
    })
    newFunc = funcResult
    priority = funcResult.priority + 1
  } else {
    newFunc = prioritizeExpressionHelper(expression.func)
  }

  if (isCall(expression.arg)) {
    const argResult = prioritizeCallExpressionHelper({
      expression: expression.arg,
      priority
    })
    newArg = argResult
    priority = argResult.priority + 1
  } else {
    newArg = prioritizeExpressionHelper(expression.arg)
  }

  return { ...expression, func: newFunc, arg: newArg, priority }
}

function prioritizeExpressionHelper<E extends Expression = Expression>(
  expression: E
): E {
  if (isVariable(expression)) {
    return {
      ...expression,
      argPriorityAgg: [] as number[],
      funcPriorityAgg: [] as number[]
    }
  } else if (isCall(expression)) {
    return prioritizeCallExpressionHelper({
      priority: 1,
      expression
    })
  } else if (isFunction(expression)) {
    return {
      ...expression,
      arg: prioritizeExpressionHelper(expression.arg),
      body: prioritizeExpressionHelper(expression.body)
    }
  } else if (isShorthandFunction(expression)) {
    return expression
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
  if (isCall(expression)) {
    return {
      ...expression,
      arg: populatePriorityAggs<typeof expression.arg>({
        expression: expression.arg,
        argPriorityAgg: [expression.priority, ...argPriorityAgg],
        funcPriorityAgg: [] as number[]
      }),
      func: populatePriorityAggs<typeof expression.func>({
        expression: expression.func,
        argPriorityAgg: [] as number[],
        funcPriorityAgg: [expression.priority, ...funcPriorityAgg]
      })
    }
  } else if (isFunction(expression)) {
    return {
      ...expression,
      arg: populatePriorityAggs<typeof expression.arg>({
        expression: expression.arg,
        argPriorityAgg,
        funcPriorityAgg
      }),
      body: populatePriorityAggs<typeof expression.body>({
        expression: expression.body,
        argPriorityAgg: [] as number[],
        funcPriorityAgg: [] as number[]
      })
    }
  } else if (isVariable(expression)) {
    return { ...expression, argPriorityAgg, funcPriorityAgg }
  } else if (isShorthandFunction(expression)) {
    return expression
  } else {
    throw new Error()
  }
}

export default function prioritizeExpression<E extends Expression = Expression>(
  expression: E
): E {
  return populatePriorityAggs({
    expression: prioritizeExpressionHelper(expression),
    argPriorityAgg: [] as number[],
    funcPriorityAgg: [] as number[]
  })
}
