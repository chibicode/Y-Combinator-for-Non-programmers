import { isCall, isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { CallExpression, Expression } from 'src/types/yc/ExpressionTypes'

function helperWrapper<PE extends Expression = Expression>(
  wrapperExpression: PE
): PE {
  let priority = 0

  function prioritizeCallExpressionHelper<E extends CallExpression>(
    expression: E
  ): E {
    let newArg: Expression | null = null
    let newFunc: Expression | null = null

    if (isCall(expression.func)) {
      const funcResult = prioritizeCallExpressionHelper(expression.func)
      newFunc = funcResult
    }

    if (isCall(expression.arg)) {
      const argResult = prioritizeCallExpressionHelper(expression.arg)
      newArg = argResult
    }

    const finalPriority = ++priority

    if (!isCall(expression.func)) {
      newFunc = prioritizeExpressionHelper(expression.func)
    }

    if (!isCall(expression.arg)) {
      newArg = prioritizeExpressionHelper(expression.arg)
    }

    if (!newFunc || !newArg) {
      throw new Error()
    }

    return {
      ...expression,
      func: newFunc,
      arg: newArg,
      priority: finalPriority
    }
  }

  function prioritizeExpressionHelper<E extends Expression = Expression>(
    expression: E
  ): E {
    if (isVariable(expression)) {
      return {
        ...expression,
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: new Array<number>()
      }
    } else if (isCall(expression)) {
      return prioritizeCallExpressionHelper(expression)
    } else if (isFunction(expression)) {
      return {
        ...expression,
        arg: prioritizeExpressionHelper(expression.arg),
        body: prioritizeExpressionHelper(expression.body)
      }
    } else {
      throw new Error()
    }
  }

  return prioritizeExpressionHelper(wrapperExpression)
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
        funcPriorityAgg: new Array<number>()
      }),
      func: populatePriorityAggs<typeof expression.func>({
        expression: expression.func,
        argPriorityAgg: new Array<number>(),
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
        argPriorityAgg: new Array<number>(),
        funcPriorityAgg: new Array<number>()
      })
    }
  } else if (isVariable(expression)) {
    return { ...expression, argPriorityAgg, funcPriorityAgg }
  } else {
    throw new Error()
  }
}

export default function prioritizeExpression<E extends Expression = Expression>(
  expression: E
): E {
  return populatePriorityAggs({
    expression: helperWrapper(expression),
    argPriorityAgg: new Array<number>(),
    funcPriorityAgg: new Array<number>()
  })
}
