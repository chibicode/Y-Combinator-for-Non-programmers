import {
  isCall,
  isFunction,
  isVariable,
  isConditional,
  isRepeat,
  isBinary
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  ConditionalExpression,
  BinaryExpression
} from 'src/types/ExpressionTypes'

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

  if (
    isCall(expression.func) ||
    isConditional(expression.func) ||
    isBinary(expression.func)
  ) {
    let funcResult
    if (isCall(expression.func)) {
      funcResult = prioritizeCallExpressionHelper({
        expression: expression.func,
        priority
      })
    } else if (isConditional(expression.func)) {
      funcResult = prioritizeConditionalExpressionHelper({
        expression: expression.func,
        priority
      })
    } else {
      funcResult = prioritizeBinaryExpressionHelper({
        expression: expression.func,
        priority
      })
    }

    newFunc = funcResult.expression
    currentPriority = funcResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newFunc = prioritizeExpressionHelper(expression.func)
  }

  if (
    isCall(expression.arg) ||
    isConditional(expression.arg) ||
    isBinary(expression.arg)
  ) {
    let argResult
    if (isCall(expression.arg)) {
      argResult = prioritizeCallExpressionHelper({
        expression: expression.arg,
        priority: currentPriority + 1
      })
    } else if (isConditional(expression.arg)) {
      argResult = prioritizeConditionalExpressionHelper({
        expression: expression.arg,
        priority: currentPriority + 1
      })
    } else {
      argResult = prioritizeBinaryExpressionHelper({
        expression: expression.arg,
        priority: currentPriority + 1
      })
    }

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

function prioritizeBinaryExpressionHelper<E extends BinaryExpression>({
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

  if (
    isCall(expression.first) ||
    isConditional(expression.first) ||
    isBinary(expression.first)
  ) {
    let funcResult
    if (isCall(expression.first)) {
      funcResult = prioritizeCallExpressionHelper({
        expression: expression.first,
        priority
      })
    } else if (isConditional(expression.first)) {
      funcResult = prioritizeConditionalExpressionHelper({
        expression: expression.first,
        priority
      })
    } else {
      funcResult = prioritizeBinaryExpressionHelper({
        expression: expression.first,
        priority
      })
    }

    newFunc = funcResult.expression
    currentPriority = funcResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newFunc = prioritizeExpressionHelper(expression.first)
  }

  if (
    isCall(expression.second) ||
    isConditional(expression.second) ||
    isBinary(expression.second)
  ) {
    let argResult
    if (isCall(expression.second)) {
      argResult = prioritizeCallExpressionHelper({
        expression: expression.second,
        priority: currentPriority + 1
      })
    } else if (isConditional(expression.second)) {
      argResult = prioritizeConditionalExpressionHelper({
        expression: expression.second,
        priority: currentPriority + 1
      })
    } else {
      argResult = prioritizeBinaryExpressionHelper({
        expression: expression.second,
        priority: currentPriority + 1
      })
    }

    newArg = argResult.expression
    maxDescendantPriority = argResult.maxDescendantPriority
  } else {
    newArg = prioritizeExpressionHelper(expression.second)
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

function prioritizeConditionalExpressionHelper<
  E extends ConditionalExpression
>({
  expression,
  priority
}: {
  expression: E
  priority: number
}): {
  expression: E
  maxDescendantPriority: number
} {
  let newCondition: Expression
  let newTrueCase: Expression
  let newFalseCase: Expression
  let currentPriority = priority
  let maxDescendantPriority = priority

  if (
    isCall(expression.condition) ||
    isConditional(expression.condition) ||
    isBinary(expression.condition)
  ) {
    let conditionResult
    if (isCall(expression.condition)) {
      conditionResult = prioritizeCallExpressionHelper({
        expression: expression.condition,
        priority
      })
    } else if (isConditional(expression.condition)) {
      conditionResult = prioritizeConditionalExpressionHelper({
        expression: expression.condition,
        priority
      })
    } else {
      conditionResult = prioritizeBinaryExpressionHelper({
        expression: expression.condition,
        priority
      })
    }
    newCondition = conditionResult.expression
    currentPriority = conditionResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newCondition = prioritizeExpressionHelper(expression.condition)
  }

  if (
    isCall(expression.trueCase) ||
    isConditional(expression.trueCase) ||
    isBinary(expression.trueCase)
  ) {
    let trueCaseResult
    if (isCall(expression.trueCase)) {
      trueCaseResult = prioritizeCallExpressionHelper({
        expression: expression.trueCase,
        priority: currentPriority + 1
      })
    } else if (isConditional(expression.trueCase)) {
      trueCaseResult = prioritizeConditionalExpressionHelper({
        expression: expression.trueCase,
        priority: currentPriority + 1
      })
    } else {
      trueCaseResult = prioritizeBinaryExpressionHelper({
        expression: expression.trueCase,
        priority: currentPriority + 1
      })
    }
    newTrueCase = trueCaseResult.expression
    maxDescendantPriority = trueCaseResult.maxDescendantPriority
  } else {
    newTrueCase = prioritizeExpressionHelper(expression.trueCase)
  }

  if (
    isCall(expression.falseCase) ||
    isConditional(expression.falseCase) ||
    isBinary(expression.falseCase)
  ) {
    let falseCaseResult
    if (isCall(expression.falseCase)) {
      falseCaseResult = prioritizeCallExpressionHelper({
        expression: expression.falseCase,
        priority: currentPriority + 1
      })
    } else if (isConditional(expression.falseCase)) {
      falseCaseResult = prioritizeConditionalExpressionHelper({
        expression: expression.falseCase,
        priority: currentPriority + 1
      })
    } else {
      falseCaseResult = prioritizeBinaryExpressionHelper({
        expression: expression.falseCase,
        priority: currentPriority + 1
      })
    }
    newFalseCase = falseCaseResult.expression
    maxDescendantPriority = falseCaseResult.maxDescendantPriority
  } else {
    newFalseCase = prioritizeExpressionHelper(expression.falseCase)
  }

  return {
    expression: {
      ...expression,
      condition: newCondition,
      trueCase: newTrueCase,
      falseCase: newFalseCase,
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
    return prioritizeConditionalExpressionHelper({
      priority: 1,
      expression
    }).expression
  } else if (isRepeat(expression)) {
    return {
      ...expression,
      child: prioritizeExpressionHelper(expression.child)
    }
  } else if (isBinary(expression)) {
    return prioritizeBinaryExpressionHelper({
      priority: 1,
      expression
    }).expression
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
    return {
      ...expression,
      falseCase: populatePriorityAggs<typeof expression.falseCase>({
        expression: expression.falseCase,
        argPriorityAgg: [...argPriorityAgg, expression.priority],
        funcPriorityAgg: [] as number[]
      }),
      condition: populatePriorityAggs<typeof expression.trueCase>({
        expression: expression.condition,
        argPriorityAgg: [] as number[],
        funcPriorityAgg: [] as number[]
      }),
      trueCase: populatePriorityAggs<typeof expression.trueCase>({
        expression: expression.trueCase,
        argPriorityAgg: [] as number[],
        funcPriorityAgg: [expression.priority, ...funcPriorityAgg]
      })
    }
  } else if (isRepeat(expression)) {
    return {
      ...expression,
      child: populatePriorityAggs({
        expression: expression.child,
        argPriorityAgg,
        funcPriorityAgg
      })
    }
  } else if (isBinary(expression)) {
    return {
      ...expression,
      first: populatePriorityAggs<typeof expression.first>({
        expression: expression.first,
        argPriorityAgg: [...argPriorityAgg, expression.priority],
        funcPriorityAgg: [] as number[]
      }),
      second: populatePriorityAggs<typeof expression.second>({
        expression: expression.second,
        argPriorityAgg: [] as number[],
        funcPriorityAgg: [expression.priority, ...funcPriorityAgg]
      })
    }
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
