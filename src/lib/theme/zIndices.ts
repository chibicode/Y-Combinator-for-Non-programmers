export const allZIndices = {
  emojiBadge: 10,
  expressionPriorityNumberWrapperInactive: 10,
  cross: 20
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
