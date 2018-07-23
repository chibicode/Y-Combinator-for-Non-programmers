import Immutable from 'immutable'

export interface FunctionExpression {
  arg: string
  body: AnyExpression
}

export interface CallExpression extends Array<AnyExpression> {
  [index: number]: FunctionExpression | string | CallExpression
}

export type AnyExpression = string | FunctionExpression | CallExpression
