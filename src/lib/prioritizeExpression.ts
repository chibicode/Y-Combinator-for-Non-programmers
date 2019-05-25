import {
  isCall,
  isFunction,
  isVariable,
  isConditional
} from 'src/lib/expressionTypeGuards'
import { CallExpression, Expression } from 'src/types/yc/ExpressionTypes'

function prioritizeCallExpressionHelper<E extends CallExpression>({
  expression,
  priority
}: {
  expression: E
  priority: number
}): {
  expression: E
  maxDescendantPriority: number
} {
  let newArg: Expression
  let newFunc: Expression
  let currentPriority = priority
  let maxDescendantPriority = priority

  if (isCall(expression.func)) {
    const funcResult = prioritizeCallExpressionHelper({
      expression: expression.func,
      priority
    })
    newFunc = funcResult.expression
    currentPriority = funcResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newFunc = prioritizeExpressionHelper(expression.func)
  }

  if (isCall(expression.arg)) {
    const argResult = prioritizeCallExpressionHelper({
      expression: expression.arg,
      priority: currentPriority + 1
    })
    newArg = argResult.expression
    maxDescendantPriority = argResult.maxDescendantPriority
  } else {
    newArg = prioritizeExpressionHelper(expression.arg)
  }

  return {
    expression: {
      ...expression,
      func: newFunc,
      arg: newArg,
      priority: currentPriority
    },
    maxDescendantPriority
  }
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
    }).expression
  } else if (isFunction(expression)) {
    return {
      ...expression,
      arg: prioritizeExpressionHelper(expression.arg),
      body: prioritizeExpressionHelper(expression.body)
    }
  } else if (isConditional(expression)) {
    return {
      ...expression,
      condition: prioritizeExpressionHelper(expression.condition),
      trueCase: prioritizeExpressionHelper(expression.trueCase),
      falseCase: prioritizeExpressionHelper(expression.falseCase)
    }
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
        argPriorityAgg: [...argPriorityAgg, expression.priority],
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
  } else if (isConditional(expression)) {
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
