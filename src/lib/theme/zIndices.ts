export const allZIndices = {
  emojiBadge: 10,
  expressionPriorityNumberWrapperDefault: 10,
  cross: 20
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
