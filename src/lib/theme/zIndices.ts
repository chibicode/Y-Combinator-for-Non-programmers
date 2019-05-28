export const allZIndices = {
  conditionalBorder: 99,
  border: 100,
  badge: 101,
  expressionPriorityNumber: 101,
  conditionalBorderShade: 102,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
