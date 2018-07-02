interface NumberExpression {
  type: 'number'
  value: number
}

interface VariableExpression {
  type: 'variable'
  name: string
}

interface FunctionExpression {
  type: 'function'
  args?: string[]
  body: AnyExpression
}

interface SumExpression {
  type: 'sum'
  left: CanReturnNumberExpression
  right: CanReturnNumberExpression
}

interface IfExpression {
  type: 'if'
  compare: '<' | '<=' | '>=' | '>'
  left: CanReturnNumberExpression
  right: CanReturnNumberExpression
  trueCase: AnyExpression
  falseCase: AnyExpression
}

interface CallExpression {
  type: 'call'
  args?: AnyExpression[]
  func: CanReturnFunctionExpression
}

type CanReturnNumberExpression =
  | NumberExpression
  | VariableExpression
  | SumExpression
  | IfExpression
  | CallExpression

type CanReturnFunctionExpression =
  | VariableExpression
  | FunctionExpression
  | IfExpression
  | CallExpression

type AnyExpression = CanReturnNumberExpression | CanReturnFunctionExpression
