import {
  isCall,
  isExecutableCall,
  isFunction
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCallExpression,
  Expression,
  FunctionExpression
} from 'src/types/yc/ExpressionTypes'

export interface FindResult<
  E extends ExecutableCallExpression,
  C extends CallExpression,
  F extends FunctionExpression
> {
  readonly expression?: E
  readonly callParent?: C
  readonly funcParent?: F
  readonly callParentKey?: 'func' | 'arg'
}

interface HelperStackItem<C extends CallExpression> {
  readonly expression: C
  readonly callParent?: C
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
  E extends ExecutableCallExpression,
  C extends CallExpression,
  F extends FunctionExpression
>(callExpression: C): FindResult<E, C, F> {
  const stack: Array<HelperStackItem<C>> = [{ expression: callExpression }]
  const notFound: FindResult<E, C, F> = {}

  while (stack.length > 0) {
    const current = stack.pop()
    if (current && current.expression) {
      if (current.expression && isExecutableCall<E>(current.expression)) {
        return {
          expression: current.expression,
          callParent: current.callParent,
          callParentKey: current.callParentKey
        }
      }

      if (isCall<C>(current.expression.func)) {
        stack.push({
          expression: current.expression.func,
          callParentKey: 'func',
          callParent: current.expression
        })
      }

      if (isCall<C>(current.expression.arg)) {
        stack.push({
          expression: current.expression.arg,
          callParentKey: 'arg',
          callParent: current.expression
        })
      }
    }
  }
  return notFound
}

export default function findNextCallExpressionAndParent<
  E extends ExecutableCallExpression,
  C extends CallExpression,
  F extends FunctionExpression
>(expression: Expression): FindResult<E, C, F> {
  const notFound: FindResult<E, C, F> = {}
  if (isCall<C>(expression)) {
    return helper<E, C, F>(expression)
  } else if (isFunction<F>(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: F | null = null
    while (isFunction<F>(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCall<C>(currentExpression)) {
      const helperResult = helper<E, C, F>(currentExpression)
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
