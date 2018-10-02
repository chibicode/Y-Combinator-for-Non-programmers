export const allZIndices = {
  emojiBadge: 10,
  expressionPriorityNumberWrapperInactive: 10
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
