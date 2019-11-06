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
import populateMaxNestedFunctionDepths from 'scripts/lib/populateMaxNestedFunctionDepths'

function prioritizeCallExpressionHelper<E extends CallExpression>({
  expression,
  priority,
  applicativeOrder
}: {
  expression: E
  priority: number
  applicativeOrder?: boolean
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
        priority,
        applicativeOrder
      })
    } else if (isConditional(expression.func)) {
      funcResult = prioritizeConditionalExpressionHelper({
        expression: expression.func,
        priority,
        applicativeOrder
      })
    } else {
      funcResult = prioritizeBinaryExpressionHelper({
        expression: expression.func,
        priority,
        applicativeOrder
      })
    }

    newFunc = funcResult.expression
    currentPriority = funcResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newFunc = prioritizeExpressionHelper(expression.func, applicativeOrder)
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
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else if (isConditional(expression.arg)) {
      argResult = prioritizeConditionalExpressionHelper({
        expression: expression.arg,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else {
      argResult = prioritizeBinaryExpressionHelper({
        expression: expression.arg,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    }

    newArg = argResult.expression
    maxDescendantPriority = argResult.maxDescendantPriority
  } else {
    newArg = prioritizeExpressionHelper(expression.arg, applicativeOrder)
  }

  return {
    expression: {
      ...expression,
      func: newFunc,
      arg: newArg,
      priority:
        currentPriority +
        (applicativeOrder &&
        (isCall(expression.arg) ||
          isConditional(expression.arg) ||
          isBinary(expression.arg))
          ? 1
          : 0)
    },
    maxDescendantPriority
  }
}

function prioritizeBinaryExpressionHelper<E extends BinaryExpression>({
  expression,
  priority,
  applicativeOrder
}: {
  expression: E
  priority: number
  applicativeOrder?: boolean
}): {
  expression: E
  maxDescendantPriority: number
} {
  let newSecond: Expression
  let newFirst: Expression
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
        priority,
        applicativeOrder
      })
    } else if (isConditional(expression.first)) {
      funcResult = prioritizeConditionalExpressionHelper({
        expression: expression.first,
        priority,
        applicativeOrder
      })
    } else {
      funcResult = prioritizeBinaryExpressionHelper({
        expression: expression.first,
        priority,
        applicativeOrder
      })
    }

    newFirst = funcResult.expression
    currentPriority = funcResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newFirst = prioritizeExpressionHelper(expression.first, applicativeOrder)
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
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else if (isConditional(expression.second)) {
      argResult = prioritizeConditionalExpressionHelper({
        expression: expression.second,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else {
      argResult = prioritizeBinaryExpressionHelper({
        expression: expression.second,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    }

    newSecond = argResult.expression
    maxDescendantPriority = argResult.maxDescendantPriority
  } else {
    newSecond = prioritizeExpressionHelper(expression.second, applicativeOrder)
  }

  return {
    expression: {
      ...expression,
      first: newFirst,
      second: newSecond,
      priority:
        currentPriority +
        (applicativeOrder &&
        (isCall(expression.second) ||
          isConditional(expression.second) ||
          isBinary(expression.second))
          ? 1
          : 0)
    },
    maxDescendantPriority
  }
}

function prioritizeConditionalExpressionHelper<
  E extends ConditionalExpression
>({
  expression,
  priority,
  applicativeOrder
}: {
  expression: E
  priority: number
  applicativeOrder?: boolean
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
        priority,
        applicativeOrder
      })
    } else if (isConditional(expression.condition)) {
      conditionResult = prioritizeConditionalExpressionHelper({
        expression: expression.condition,
        priority,
        applicativeOrder
      })
    } else {
      conditionResult = prioritizeBinaryExpressionHelper({
        expression: expression.condition,
        priority,
        applicativeOrder
      })
    }
    newCondition = conditionResult.expression
    currentPriority = conditionResult.maxDescendantPriority + 1
    maxDescendantPriority = currentPriority
  } else {
    newCondition = prioritizeExpressionHelper(
      expression.condition,
      applicativeOrder
    )
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
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else if (isConditional(expression.trueCase)) {
      trueCaseResult = prioritizeConditionalExpressionHelper({
        expression: expression.trueCase,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else {
      trueCaseResult = prioritizeBinaryExpressionHelper({
        expression: expression.trueCase,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    }
    newTrueCase = trueCaseResult.expression
    maxDescendantPriority = trueCaseResult.maxDescendantPriority
  } else {
    newTrueCase = prioritizeExpressionHelper(
      expression.trueCase,
      applicativeOrder
    )
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
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else if (isConditional(expression.falseCase)) {
      falseCaseResult = prioritizeConditionalExpressionHelper({
        expression: expression.falseCase,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    } else {
      falseCaseResult = prioritizeBinaryExpressionHelper({
        expression: expression.falseCase,
        priority: currentPriority + (applicativeOrder ? 0 : 1),
        applicativeOrder
      })
    }
    newFalseCase = falseCaseResult.expression
    maxDescendantPriority = falseCaseResult.maxDescendantPriority
  } else {
    newFalseCase = prioritizeExpressionHelper(
      expression.falseCase,
      applicativeOrder
    )
  }

  return {
    expression: {
      ...expression,
      condition: newCondition,
      trueCase: newTrueCase,
      falseCase: newFalseCase,
      priority:
        currentPriority +
        (applicativeOrder &&
        (isCall(expression.falseCase) ||
          isConditional(expression.falseCase) ||
          isBinary(expression.falseCase))
          ? 1
          : 0) +
        (applicativeOrder &&
        (isCall(expression.trueCase) ||
          isConditional(expression.trueCase) ||
          isBinary(expression.trueCase))
          ? 1
          : 0)
    },
    maxDescendantPriority
  }
}

function prioritizeExpressionHelper<E extends Expression = Expression>(
  expression: E,
  applicativeOrder?: boolean
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
      expression,
      applicativeOrder
    }).expression
  } else if (isFunction(expression)) {
    return {
      ...expression,
      arg: prioritizeExpressionHelper(expression.arg, applicativeOrder),
      body: prioritizeExpressionHelper(expression.body, applicativeOrder)
    }
  } else if (isConditional(expression)) {
    return prioritizeConditionalExpressionHelper({
      priority: 1,
      expression,
      applicativeOrder
    }).expression
  } else if (isRepeat(expression)) {
    return {
      ...expression,
      child: prioritizeExpressionHelper(expression.child, applicativeOrder)
    }
  } else if (isBinary(expression)) {
    return prioritizeBinaryExpressionHelper({
      priority: 1,
      expression,
      applicativeOrder
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
  expression: E,
  applicativeOrder?: boolean
): E {
  return populatePriorityAggs({
    expression: populateMaxNestedFunctionDepths(
      prioritizeExpressionHelper(expression, applicativeOrder)
    ),
    argPriorityAgg: [] as number[],
    funcPriorityAgg: [] as number[]
  })
}
