export const allZIndices = {
  conditionalBorderInner: 98,
  conditionalBorder: 98,
  conditionalBorderOuter: 99,
  conditionalBorderIcons: 100,
  badge: 100,
  expressionPriorityNumberWrapperDefault: 100,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
