export const allZIndices = {
  badge: 100,
  expressionPriorityNumberWrapperDefault: 100
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
