const allMaxWidths = {
  sm: 768,
  lg: 1024
}

const maxWidths = (x: keyof typeof allMaxWidths) => `${allMaxWidths[x]}px`

export default maxWidths
