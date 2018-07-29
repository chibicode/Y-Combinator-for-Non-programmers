import {
  decorateExpression,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import { Expression } from 'src/types/Expressions'

// (a => a)(b)
const basicExpression = [
  {
    arg: 'a',
    body: 'a'
  },
  'b'
]

// (a => b => a)
const trueExpression = {
  arg: 'a',
  body: {
    arg: 'b',
    body: 'a'
  }
}

// (a => b => b)
const falseExpression = {
  arg: 'a',
  body: {
    arg: 'b',
    body: 'b'
  }
}

// (c => a => b => c b a)
const notExpression = {
  arg: 'c',
  body: {
    arg: 'a',
    body: {
      arg: 'b',
      body: ['c', 'b', 'a']
    }
  }
}

const notTrueExpression = [notExpression, trueExpression]

const notFalseExpression = [notExpression, falseExpression]

// (a => b => b)
const zeroExpression = {
  arg: 'a',
  body: {
    arg: 'b',
    body: 'b'
  }
}

// (a => b => a b)
const oneExpression = {
  arg: 'a',
  body: {
    arg: 'b',
    body: ['a', 'b']
  }
}

// (a => b => a (a b))
const twoExpression = {
  arg: 'a',
  body: {
    arg: 'b',
    body: ['a', ['a', 'b']]
  }
}

// (a => a a)(a => a a)
const infiniteLoopExpression = [
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
const yCombinator = {
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
const recursiveFunction = {
  arg: 'a',
  body: {
    arg: 'b',
    body: ['a', 'b']
  }
}

const infiniteLoop = [yCombinator, recursiveFunction]

const functionTestCases: Expression[] = [
  // basicExpression,
  // notTrueExpression,
  // notFalseExpression,
  // zeroExpression,
  // oneExpression,
  // twoExpression,
  // infiniteLoopExpression,
  // yCombinator,
  infiniteLoop
].map(x => {
  const decorated = decorateExpression(x)
  if (decorated.type === 'call') {
    return prioritizeExpression(decorated)
  } else {
    return decorated
  }
})

export default functionTestCases
