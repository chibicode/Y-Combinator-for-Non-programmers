export const allZIndices = {
  border: 100,
  conditionalBorder: 101,
  borderToplevel: 102,
  badge: 102,
  expressionPriorityNumber: 101,
  conditionalBorderShade: 103,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
