export const allZIndices = {
  conditionalBorderInner: 99,
  conditionalBorder: 99,
  badge: 100,
  expressionPriorityNumberWrapperDefault: 100,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
