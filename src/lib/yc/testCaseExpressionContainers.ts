import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  FunctionExpressionParams
} from 'src/types/yc/ExpressionParamTypes'

// (a => a)(b)
const basicExpression: CallExpressionParams = [
  {
    arg: 'a',
    body: 'a'
  },
  'b'
]

// (a => b => a)
const trueExpression: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: 'a'
  }
}

// (a => b => b)
const falseExpression: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: 'b'
  }
}

// (c => a => b => c b a)
const notExpression: FunctionExpressionParams = {
  arg: 'c',
  body: {
    arg: 'a',
    body: {
      arg: 'b',
      body: ['c', 'b', 'a']
    }
  }
}

const notTrueExpression: CallExpressionParams = [notExpression, trueExpression]

const notFalseExpression: CallExpressionParams = [
  notExpression,
  falseExpression
]

// (a => b => b)
const zeroExpression: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: 'b'
  }
}

// (a => b => a b)
const oneExpression: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: ['a', 'b']
  }
}

// (a => b => a (a b))
const twoExpression: FunctionExpressionParams = {
  arg: 'a',
  body: {
    arg: 'b',
    body: ['a', ['a', 'b']]
  }
}

// (a => a a)(a => a a)
const infiniteLoopExpression: CallExpressionParams = [
  {
    arg: 'a',
    body: ['a', 'a']
  },
  {
    arg: 'a',
    body: ['a', 'a']
  }
]

// a => (c => c c)(c => a(b => c c b)))
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

const infiniteLoop: CallExpressionParams = [yCombinator, recursiveFunction]

export const defaultTestCases: Array<ContainerWithState<'ready'>> = [
  initializeExpressionContainer(basicExpression),
  initializeExpressionContainer(notTrueExpression),
  initializeExpressionContainer(notFalseExpression),
  initializeExpressionContainer(zeroExpression),
  initializeExpressionContainer(oneExpression),
  initializeExpressionContainer(twoExpression),
  initializeExpressionContainer(infiniteLoopExpression),
  initializeExpressionContainer(yCombinator)
]

export const activeTestCases: Array<ContainerWithState<'ready'>> = [
  initializeExpressionContainer(infiniteLoop)
]
