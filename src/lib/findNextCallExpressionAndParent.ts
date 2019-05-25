import {
  isCall,
  isExecutableCall,
  isFunction
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  Expression,
  FunctionExpression
} from 'src/types/ExpressionTypes'

export interface FindResult<
  E extends ExecutableCall,
  C extends CallExpression,
  F extends FunctionExpression
> {
  readonly expression?: E
  readonly callParent?: C
  readonly funcParent?: F
  readonly callParentKey?: 'func' | 'arg'
}

/**
 * Run DFS on callExpression to find ExecutableCallExpression
 * and its parent information (could be missing if root expression).
 * DFS looks for functions first before arguments.
 *
 * @template E
 * @template C
 * @template F
 * @param {C} callExpression
 * @returns {FindResult<E, C, F>}
 */
function helper<
  E extends ExecutableCall,
  C extends CallExpression,
  F extends FunctionExpression
>({
  expression,
  callParent,
  callParentKey
}: {
  expression: C
  callParent?: C
  callParentKey?: 'func' | 'arg'
}): FindResult<E, C, F> {
  if (isExecutableCall<E>(expression)) {
    return {
      expression,
      callParent,
      callParentKey
    }
  }
  if (isCall<C>(expression.func)) {
    const result: FindResult<E, C, F> = helper({
      expression: expression.func,
      callParentKey: 'func',
      callParent: expression
    })
    if (result.expression) {
      return result
    }
  }

  if (isCall<C>(expression.arg)) {
    const result: FindResult<E, C, F> = helper({
      expression: expression.arg,
      callParentKey: 'arg',
      callParent: expression
    })
    if (result.expression) {
      return result
    }
  }

  const notFound: FindResult<E, C, F> = {}
  return notFound
}

export default function findNextCallExpressionAndParent<
  E extends ExecutableCall,
  C extends CallExpression,
  F extends FunctionExpression
>(expression: Expression): FindResult<E, C, F> {
  const notFound: FindResult<E, C, F> = {}
  if (isCall<C>(expression)) {
    return helper<E, C, F>({ expression })
  } else if (isFunction<F>(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: F | null = null
    while (isFunction<F>(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCall<C>(currentExpression)) {
      const helperResult = helper<E, C, F>({ expression: currentExpression })
      if (helperResult.callParent) {
        return helperResult
      } else if (previousExpression) {
        return {
          funcParent: previousExpression,
          expression: helperResult.expression
        }
      }
    }
  }
  return notFound
}
