const allZIndices = {
  expressionPriorityNumberWrapperInactive: 10
}

const zIndexFn = (x: keyof typeof allZIndices) => `${allZIndices[x]}`

export default zIndexFn
