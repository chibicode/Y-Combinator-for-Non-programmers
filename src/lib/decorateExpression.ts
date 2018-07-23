import { List, Map, Record } from 'immutable'
import {
  DecoratedExpression,
  DecoratedExpressionRecordProps,
  FunctionRecordProps,
} from 'types/DecoratedExpressionTypes'
import { AnyExpression } from 'types/ExpressionTypes'

const DecoratedExpression = Record<DecoratedExpressionRecordProps>({
  value: null,
  state: null,
})

const FunctionExpression = Record<FunctionRecordProps>({
  arg: null,
  body: null,
})

const decorateExpression = (expression: AnyExpression): DecoratedExpression => {
  if (typeof expression === 'string') {
    return DecoratedExpression({ value: expression, state: Map() })
  } else if (Array.isArray(expression)) {
    return DecoratedExpression({
      value: List(expression.map(e => decorateExpression(e))),
      state: Map(),
    })
  } else {
    return DecoratedExpression({
      value: FunctionExpression({
        arg: decorateExpression(expression.arg),
        body: decorateExpression(expression.body),
      }),
      state: Map(),
    })
  }
}

export default decorateExpression
