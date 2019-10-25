export const allZIndices = {
  border: 100,
  multiplySign: 101,
  expressionPriorityNumber: 101,
  variableShade: 102,
  conditionalBorder: 103,
  badge: 104,
  borderToplevel: 105,
  conditionalBorderShade: 106,
  modal: 1000
}

const zIndices = (x: keyof typeof allZIndices) => allZIndices[x]

export default zIndices
