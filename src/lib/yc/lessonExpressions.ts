import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import { FunctionExpressionParams } from 'src/types/yc/ExpressionParamTypes'

export const episode2Expression1 = initializeExpressionContainer([
  {
    arg: 'a',
    body: 'a'
  },
  'b'
])

export const episode2Expression2 = initializeExpressionContainer([
  {
    arg: 'c',
    body: 'c'
  },
  'd'
])

const yCombinator: FunctionExpressionParams = {
  arg: 'a',
  body: [
    {
      arg: 'c',
      body: ['c', 'c']
    },
    {
      arg: 'c',
      body: [
        'a',
        {
          arg: 'b',
          body: ['c', 'c', 'b']
        }
      ]
    }
  ]
}

// a => b => (a b)
const recursiveFunction: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: ['a', 'b']
  }
}

export const infiniteLoop = initializeExpressionContainer([
  yCombinator,
  recursiveFunction
])
