export const allZIndices = {
  badge: 100,
  expressionPriorityNumberWrapperDefault: 100,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
