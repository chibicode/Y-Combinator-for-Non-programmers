import {
  isCallExpression,
  isExecutableCallExpression,
  isFunctionExpression
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

function helper<
  E extends ExecutableCallExpression,
  C extends CallExpression,
  F extends FunctionExpression
>(expression: C): FindResult<E, C, F> {
  const stack: Array<HelperStackItem<C>> = [{ expression }]
  const notFound: FindResult<E, C, F> = {}

  while (stack.length > 0) {
    const current = stack.pop()
    if (current && current.expression) {
      if (
        current.expression &&
        isExecutableCallExpression<E>(current.expression)
      ) {
        return {
          expression: current.expression,
          callParent: current.callParent,
          callParentKey: current.callParentKey
        }
      }

      if (isCallExpression<C>(current.expression.func)) {
        stack.push({
          expression: current.expression.func,
          callParentKey: 'func',
          callParent: current.expression
        })
      }

      if (isCallExpression<C>(current.expression.arg)) {
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
  if (isCallExpression<C>(expression)) {
    return helper<E, C, F>(expression)
  } else if (isFunctionExpression<F>(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: F | null = null
    while (isFunctionExpression<F>(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCallExpression<C>(currentExpression)) {
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
