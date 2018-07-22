import flattenWithNestLevel from '../../src/lib/flattenWithNestLevel'

describe('flatteNWithNestLevel', () => {
  test('no flattening needed', () => {
    expect(flattenWithNestLevel([1, 2, 3])).toEqual([
      { depth: 0, value: 1 },
      { depth: 0, value: 2 },
      { depth: 0, value: 3 }
    ])
  })

  test('no flattening needed', () => {
    expect(
      flattenWithNestLevel([1, [2, 3], [[4, 5, 6], [7, 8]], [[[9]]]])
    ).toEqual([
      { depth: 0, value: 1 },
      { depth: 1, value: 2 },
      { depth: 1, value: 3 },
      { depth: 2, value: 4 },
      { depth: 2, value: 5 },
      { depth: 2, value: 6 },
      { depth: 2, value: 7 },
      { depth: 2, value: 8 },
      { depth: 3, value: 9 }
    ])
  })
})
