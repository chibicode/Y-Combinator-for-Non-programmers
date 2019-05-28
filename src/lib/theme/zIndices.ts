export const allZIndices = {
  conditionalBorderInner: 97,
  conditionalBorder: 97,
  conditionalBorderShade: 98,
  border: 100,
  badge: 101,
  expressionPriorityNumberWrapperDefault: 101,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
