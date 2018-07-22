const flattenHelper = ({ array, depth = 0, result = [] }) => {
  let index = -1
  const length = array.length

  while (++index < length) {
    const value = array[index]
    if (Array.isArray(value)) {
      flattenHelper({ array: value, depth: depth + 1, result })
    } else {
      result.push({
        value,
        depth
      })
    }
  }

  return result
}

const flattenWithNestLevel = array => flattenHelper({ array })

export default flattenWithNestLevel
